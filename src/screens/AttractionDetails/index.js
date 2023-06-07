import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  ScrollView,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import InfoCard from '../../components/InfoCard';
import Title from '../../components/Title';
import styles from './styles';
const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const programOP = `Open\n${item?.opening_time} - ${item?.closing_time}`;
  const markCoords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0,
    longitudeDelta: 0.01,
  };
  //verific daca are meniu
  const hasMenu =
    item.Menu && (item.Menu.Bere.length > 0 || item.Menu.Mancare.length > 0);
  const hasEntryPrice =
    item.entry_price &&
    (item.entry_price.length > 0 || item.entry_price.length > 0);
  const onBack = () => {
    navigation.goBack();
  };
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };
  console.log('item :>> ', item);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={{maxWidth: '70%'}}>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
            {hasEntryPrice && (
              <Title
                style={styles.title}
                text={'Pret intrare ' + item?.entry_price + ' lei'}
              />
            )}
          </View>
        </View>
        <InfoCard
          text={item?.address}
          icon={require('../../assets/locatie.png')}
        />
        <InfoCard
          text={programOP}
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
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.mapStyle}
          region={markCoords}>
          <Marker
            coordinate={markCoords}
            title={'Aici se afla  ' + item?.name}
          />
        </MapView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(AttractionDetails);
