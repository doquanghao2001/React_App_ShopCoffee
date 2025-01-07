import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import { SPLASH_SCREEN, TAB_NAVIGATOR } from './Routes';
import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  initialRouteName: TAB_NAVIGATOR,
  screens: {
    SplashScreen: {
      screen: SplashScreen,
    },
    TabNavigator: {
      screen: TabNavigator,
    },
  },
});
const Navigation = createStaticNavigation(RootStack);
export default Navigation;
