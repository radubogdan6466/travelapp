import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    margin: 15,
  },
  iconBeer: {width: 24, height: 24},
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(256,256,256, 0.4)',
    margin: 16,
    paddingHorizontal: 8,
  },
  miniImage: {
    width: 40,
    height: 40,
    margin: 4,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 10,
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, 0.3)',
    width: 40,
    height: 40,
    top: 8,
    left: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 40,
  },
  city: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    marginTop: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    color: '#000000',
  },

  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
    marginRight: 8,
    color: '#000000',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  price: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000000',
  },
  bereText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000000',
  },
  mancareText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000000',
  },
});
export default styles;
