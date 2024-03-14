import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
    flex: 1,
  },
  logo2: {
    height: 42,
    resizeMode: 'contain',
  },
  powered: {
    alignItems: 'center',
    backgroundColor: colors.grey,
    paddingVertical: 24,
  },
  poweredText: {
    color: colors.greyDark,
    fontSize: 13,
    marginBottom: 4,
  },
});

export default styles;
