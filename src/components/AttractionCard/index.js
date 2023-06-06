import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
const AttractionCard = ({imageSrc, title, subtitle, onPress, style}) => {
  if (!imageSrc) {
    return null; // sau puteți returna un element placeholder
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(AttractionCard);
