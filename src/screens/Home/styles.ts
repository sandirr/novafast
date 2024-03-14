import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  flex1: {flex: 1},
  head: {position: 'relative', padding: 24, paddingBottom: 32},
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {height: 28, width: 120},
  logo2: {position: 'absolute', right: 0, bottom: 0},
  actionContainer: {flexDirection: 'row', gap: 12},
  greeting: {
    marginTop: 36,
  },
  loginText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 20,
  },
  balance: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 4,
  },
  menuContainer: {
    backgroundColor: colors.primary,
    marginTop: -16,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
    paddingVertical: 16,
  },
  menuItem: {
    alignItems: 'center',
    gap: 8,
  },
  iconContainer: {
    backgroundColor: colors.grey,
    padding: 10,
    borderRadius: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  menuIcon: {
    height: 28,
    width: 28,
  },
  menuText: {color: colors.white, fontSize: 10, fontWeight: '500'},
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 16,
    marginBottom: 12,
  },
  title: {fontSize: 20, fontWeight: '600'},
  openAccount: {fontSize: 13, fontWeight: '700'},
  scrollContainer: {paddingLeft: 24, gap: 16},
  accountCard: {
    backgroundColor: colors.grey,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: 130,
  },
  cardContent: {flexDirection: 'row', alignItems: 'center', gap: 16},
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 16,
  },
  balanceAccount: {fontSize: 18, fontWeight: '600'},
  rateContainer: {paddingHorizontal: 24, marginTop: 16},
  row: {flexDirection: 'row', alignItems: 'center', gap: 4},
  rateText: {
    flex: 1,
    color: colors.primaryDark,
    fontSize: 16,
    fontWeight: '700',
  },
  buySellText: {
    flex: 1,
    color: colors.primaryDark,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
  buySellValueText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'right',
  },
  rateItemContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  seeAll: {
    textAlign: 'center',
    color: colors.greyDark,
    fontWeight: '700',
    fontSize: 13,
    marginTop: 2,
  },
  insightImg: {height: 110, width: 140, borderRadius: 8},
  insightText: {fontSize: 13, fontWeight: '600', margin: 8},
});

export default styles;
