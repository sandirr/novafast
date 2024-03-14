import React, {useEffect} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import LogoNovaFast from '../../assets/images/LogoNovaFast.png';
import LogoAbleGroup from '../../assets/images/LogoAbleGroup.png';

export function SplashScreen({navigation}: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainPage');
    }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={LogoNovaFast} style={styles.logo} testID="logoNovaFast" />
      <View style={styles.powered}>
        <Text style={styles.poweredText}>Powered by</Text>
        <Image
          source={LogoAbleGroup}
          style={styles.logo2}
          testID="logoAbleGroup"
        />
      </View>
    </SafeAreaView>
  );
}
