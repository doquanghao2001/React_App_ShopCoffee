import { Button } from '@react-navigation/elements';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from "react-native";
import { delay } from '../utils/helpers';
import { TAB_NAVIGATOR } from '../navigation/Routes';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  useEffect(() => {
    const navigateToHome = async () => {
      await delay(3000);
      navigation.navigate(TAB_NAVIGATOR);
    };
    navigateToHome();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate(TAB_NAVIGATOR)}>
        Go to Details
      </Button>
    </View>
  );
};

export default SplashScreen;