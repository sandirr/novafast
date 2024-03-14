import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator';
import colors from './src/constant/colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Navigator />
    </NavigationContainer>
  );
}
