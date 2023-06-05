import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';
import Menu from '../../components/Menu';
const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  //verific daca are meniu
  const hasMenu =
    item.Menu && (item.Menu.Bere.length > 0 || item.Menu.Mancare.length > 0);

  const onBack = () => {
    navigation.goBack();
  };
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: mainImage}}>
          <View style={styles.header}>
            <Pressable onPress={onBack} hitStop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/back.png')}
              />
            </Pressable>
          </View>
          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImages?.map((image, index) => (
              <View key={image}>
                <Image source={{uri: image}} style={styles.miniImage} />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.headerContainer}>
          <View>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
            <Title style={styles.title} text={item?.entry_price} />
          </View>
        </View>
        <InfoCard
          text={item?.address}
          icon={require('../../assets/locatie.png')}
        />
        <InfoCard
          text={`Open
${item?.opening_time} - ${item?.closing_time}`}
          icon={require('../../assets/schedule.png')}
        />
        <View>
          {hasMenu && (
            <InfoCard
              text={
                <View>
                  <Text style={styles.title}>Ce gasesti la {item?.name}</Text>
                  {item.Menu.Bere.length > 0 && (
                    <View style={styles.menuSection}>
                      <View style={styles.container}>
                        <Text style={styles.categoryTitle}>Bere</Text>
                        <Image
                          style={styles.iconBeer}
                          source={require('../../assets/beer.png')}
                        />
                      </View>

                      {item.Menu.Bere.map((bere, index) => (
                        <View key={index} style={styles.menuItem}>
                          <Text style={styles.bereText}>{bere}</Text>
                          <Text style={styles.price}>
                            - {item.Preturi.Bere[index]} lei
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                  {item.Menu.Mancare.length > 0 && (
                    <View style={styles.menuSection}>
                      <View style={styles.container}>
                        <Text style={styles.categoryTitle}>Mancare</Text>
                        <Image
                          style={styles.iconBeer}
                          source={require('../../assets/foodmenu.png')}
                        />
                      </View>
                      {item.Menu.Mancare.map((mancare, index) => (
                        <View key={index} style={styles.menuItem}>
                          <Text style={styles.mancareText}>{mancare}</Text>
                          <Text style={styles.price}>
                            - {item.Preturi.Mancare[index]} lei
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              }
              icon={require('../../assets/food.png')}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(AttractionDetails);
