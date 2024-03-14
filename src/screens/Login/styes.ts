import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topContent: {
    backgroundColor: colors.primary,
    position: 'relative',
    paddingHorizontal: 24,
    paddingTop: 52,
    paddingBottom: 82,
    overflow: 'hidden',
  },
  logo: {
    position: 'absolute',
    bottom: -40,
    right: 0,
    width: 200,
    height: 234,
    tintColor: colors.white,
  },
  loginText: {fontSize: 15, fontWeight: '600', color: colors.white},
  textContainer: {
    marginTop: 24,
  },
  catchyText: {
    marginTop: 24,
  },
  formContainer: {
    marginTop: -40,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  label: {
    fontSize: 13,
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.greyDark,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 24,
    gap: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 42,
  },
  btnDark: {
    backgroundColor: colors.primaryDark,
  },
  btnLight: {
    backgroundColor: colors.primary,
  },
  btnText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  },
  troubleText: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

export default styles;
