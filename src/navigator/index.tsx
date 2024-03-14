import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import colors from '../constant/colors';
import {Home, Login, SplashScreen} from '../screens';
import scan from '../assets/icons/scan.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({
  color,
  size,
  name,
}: {
  color: string;
  size: number;
  name: string;
}) => {
  const renderTabSource = () => {
    switch (name) {
      case 'Home':
        return scan;
      case 'Rate':
        return scan;
      case 'Chat':
        return scan;
      case 'Wallet':
        return scan;
      case 'Transaction':
        return scan;
      default:
        return scan;
    }
  };
  return (
    <Image
      source={renderTabSource()}
      resizeMode="contain"
      height={size}
      width={size}
      tintColor={color}
    />
  );
};

const MainPage = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        alignItems: 'center',
        paddingTop: 4,
      },
      tabBarActiveTintColor: colors.primaryDark,
      tabBarInactiveTintColor: colors.greyDark,
      tabBarLabelStyle: {
        marginBottom: 4,
      },
      headerShown: false,
    }}>
    <Tab.Screen
      component={Home}
      name={'Home'}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: props => TabIcon({...props, name: 'Home'}),
      }}
    />
    <Tab.Screen
      component={Home}
      name={'Rate'}
      options={{
        tabBarLabel: 'Rate',
        tabBarIcon: props => TabIcon({...props, name: 'Rate'}),
      }}
    />
    <Tab.Screen
      component={Home}
      name={'Chat'}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: props => TabIcon({...props, name: 'Chat'}),
      }}
    />
    <Tab.Screen
      component={Home}
      name={'Wallet'}
      options={{
        tabBarLabel: 'Wallet',
        tabBarIcon: props => TabIcon({...props, name: 'Wallet'}),
      }}
    />
    <Tab.Screen
      component={Home}
      name={'Transaction'}
      options={{
        tabBarLabel: 'Transaction',
        tabBarIcon: props => TabIcon({...props, name: 'Transaction'}),
      }}
    />
  </Tab.Navigator>
);

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
