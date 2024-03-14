import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {SplashScreen} from './index';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('SplashScreen component', () => {
  test('navigates to MainPage after 2 seconds', async () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const {getByTestId} = render(<SplashScreen navigation={navigation} />);

    // Ensure LogoNovaFast is rendered
    const logoNovaFast = getByTestId('logoNovaFast');
    expect(logoNovaFast).toBeTruthy();

    // Ensure LogoAbleGroup is rendered
    const logoAbleGroup = getByTestId('logoAbleGroup');
    expect(logoAbleGroup).toBeTruthy();

    // Wait for 2 seconds
    await waitFor(
      () => {
        navigation.navigate('MainPage');
      },
      {timeout: 2000},
    );
  });
});
