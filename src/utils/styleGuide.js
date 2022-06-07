const {StyleSheet, Dimensions, Platform} = require('react-native');
const {colors, fontSize} = require('./styleref');
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  // fonts
  h1: {
    fontSize: fontSize.h1,
  },
  h1Black: {
    fontSize: fontSize.h1,
    color: colors.black,
  },
  h3: {
    fontSize: fontSize.h3,
  },
  //styles
  cardContainer: {
    width: width / 4 - 12.5,
    height: 120,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grayLight,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardtext: {
    color: colors.primaryColorDark,
    fontSize: 50,
    fontWeight: 'bold',
  },
  homeHeaderContainer: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primaryColorDark,
  },
  homeHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '70%',
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  innerContainer: {
    marginTop: 10,
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    zIndex: -1,
  },
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeft: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext1: {
    fontSize: 24,
    color: colors.primaryColorDark,
    fontWeight: 'bold',
  },
  headertext2: {
    fontSize: 30,
    color: colors.primaryColorDark,
    fontWeight: 'bold',
  },
  bottomContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  suffleButton: {
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    borderRadius: 20,
  },
  suffletext: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bannerContainetr: {
    position: 'absolute',
    height: 100,
    width: width,
    backgroundColor: colors.primaryColorDark,
    top: height / 2 - 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    borderRadius: 30,
  },
  bannerText1: {
    color: colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bannerText2: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export {styles};
