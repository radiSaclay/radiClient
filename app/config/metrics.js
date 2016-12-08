import {Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  borderRadius: 4,
  baseMargin: 10,
  basePadding: 10,
  logoHeight: 70,
  logoWidth: 60,
  navBarHeight: 54,
  screenHeight: width < height ? height : width,
  screenWidth: width < height ? width : height,
}

export default metrics
