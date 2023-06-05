import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../Categories/index';
import AttractionCard from '../../AttractionCard/index';
import jsonData from '../../data/attractions.json';
import categories from '../../data/categories.json';
import {useNavigation} from '@react-navigation/native';

const ALL = 'All';
const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  useEffect(() => {
    if (selectedCategory === ALL) {
      setData(jsonData);
    } else {
      const filteredData = jsonData?.filter(item =>
        item?.categories?.includes(selectedCategory),
      );

      setData(filteredData);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={{flexGrow: 1}}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items found</Text>
        }
        ListHeaderComponent={
          <View style={{margin: 32}}>
            <Title text="Aplicatia ta" style={{fontWeight: 'normal'}} />
            <Title text="Pentru tot ce cauti" />
            <Title text="Descopera Timisoara" style={styles.subtitle} />
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[ALL, ...categories]}
            />
          </View>
        }
        keyExtractor={item => String(item?.id)}
        renderItem={({item, index}) => (
          <AttractionCard
            key={item.id}
            style={
              index % 2 === 0
                ? {marginRight: 12, marginLeft: 32}
                : {marginRight: 32}
            }
            onPress={() => navigation.navigate('AttractionDetails', {item})}
            title={item.name}
            subtitle={item.city}
            imageSrc={item.images?.length ? item.images[0] : null}
          />
        )}
      />
    </SafeAreaView>
  );
};
export default Home;
