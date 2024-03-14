import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styes';
import AbleGroupHalf from '../../assets/images/LogoAbleGroupHalf.png';
import close from '../../assets/icons/close.png';
import {useNavigation} from '@react-navigation/native';

export function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContent}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={close} resizeMode="contain" />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.loginText}>Lorem Ipsum</Text>
          <Text style={styles.loginText}>blablabla</Text>
          <Text style={[styles.loginText, styles.catchyText]}>
            something catchy
          </Text>
        </View>

        <Image
          source={AbleGroupHalf}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <ScrollView style={styles.formContainer}>
        <Text style={styles.title}>Log In</Text>
        <View>
          <Text style={styles.label}>Your Mobile No.</Text>
          <TextInput keyboardType="number-pad" style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput secureTextEntry style={styles.input} />
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.btnDark]}>
            <Text style={styles.btnText}>Log In</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.btnLight]}>
            <Text style={styles.btnText}>Register</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.troubleText}>Trouble logging in?</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
