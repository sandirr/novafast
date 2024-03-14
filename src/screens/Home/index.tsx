import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import bell from '../../assets/icons/bell.png';
import person from '../../assets/icons/person.png';
import scan from '../../assets/icons/scan.png';
import AbleGroupHalf from '../../assets/images/LogoAbleGroupHalf.png';
import NovaFast from '../../assets/images/LogoNovaFast.png';
import topup from '../../assets/icons/topup.png';
import transfer from '../../assets/icons/transfer.png';
import exchange from '../../assets/icons/exchange.png';
import cards from '../../assets/icons/cards.png';
import flagCH from '../../assets/images/flagCH.png';
import flagMY from '../../assets/images/flagMY.png';
import flagSG from '../../assets/images/flagSG.png';
import insight1 from '../../assets/images/insight1.png';
import insight2 from '../../assets/images/insight2.png';
import insight3 from '../../assets/images/insight3.png';
import {useNavigation} from '@react-navigation/native';

export function Home() {
  const navigation: {navigate: any} = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Head */}
        <View style={styles.head}>
          <View style={styles.navContainer}>
            <View>
              <Image
                source={NovaFast}
                resizeMode="contain"
                style={styles.logo}
              />
            </View>
            <View style={styles.actionContainer}>
              <Image
                source={scan}
                resizeMode="contain"
                height={24}
                width={24}
              />
              <Image
                source={bell}
                resizeMode="contain"
                height={24}
                width={24}
              />
              <Image
                source={person}
                resizeMode="contain"
                height={24}
                width={24}
              />
            </View>
          </View>
          <View>
            <Text style={[styles.title, styles.greeting]}>Hi There</Text>
            <Text
              style={styles.loginText}
              onPress={() => navigation.navigate('Login')}>
              Login to see your Balance!
            </Text>
            <Text style={styles.balance}>0.00 USD</Text>
          </View>
          <Image
            source={AbleGroupHalf}
            resizeMode="contain"
            style={styles.logo2}
          />
        </View>

        {/* Menu List */}
        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Image
                source={topup}
                resizeMode="contain"
                style={styles.menuIcon}
              />
            </View>
            <Text style={styles.menuText}>Top Up</Text>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Image
                source={transfer}
                resizeMode="contain"
                style={styles.menuIcon}
              />
            </View>
            <Text style={styles.menuText}>Transfer</Text>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Image
                source={exchange}
                resizeMode="contain"
                style={styles.menuIcon}
              />
            </View>
            <Text style={styles.menuText}>Exchange</Text>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.iconContainer}>
              <Image
                source={cards}
                resizeMode="contain"
                style={styles.menuIcon}
              />
            </View>
            <Text style={styles.menuText}>Cards</Text>
          </View>
        </View>

        {/* Accounts List */}
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Accounts</Text>
            <Text style={styles.openAccount}>Open Account {'>'}</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <View style={styles.accountCard}>
              <View style={styles.cardContent}>
                <Image
                  source={flagCH}
                  height={26}
                  width={26}
                  resizeMode="contain"
                />
                <Text style={styles.rateText}>CNY</Text>
              </View>
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceAccount}>0.00</Text>
              </View>
            </View>
            <View style={styles.accountCard}>
              <View style={styles.cardContent}>
                <Image
                  source={flagMY}
                  height={26}
                  width={26}
                  resizeMode="contain"
                />
                <Text style={styles.rateText}>USD</Text>
              </View>
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceAccount}>0.00</Text>
              </View>
            </View>
            <View style={styles.accountCard}>
              <View style={styles.cardContent}>
                <Image
                  source={flagSG}
                  height={26}
                  width={26}
                  resizeMode="contain"
                />
                <Text style={styles.rateText}>SGD</Text>
              </View>
              <View style={styles.balanceContainer}>
                <Text style={styles.balanceAccount}>0.00</Text>
              </View>
            </View>
          </ScrollView>

          {/* Rate List */}
          <View style={styles.rateContainer}>
            <View style={styles.row}>
              <Text style={styles.rateText}>Rate</Text>
              <Text style={styles.buySellText}>Buy</Text>
              <Text style={styles.buySellText}>Sell</Text>
            </View>
            <View style={[styles.row, styles.rateItemContainer]}>
              <View style={[styles.flex1, styles.row]}>
                <Image
                  source={flagSG}
                  height={20}
                  width={20}
                  resizeMode="contain"
                />
                <Text>SGD</Text>
              </View>
              <Text style={styles.buySellValueText}>15, 555.600</Text>
              <Text style={styles.buySellValueText}>15, 555.600</Text>
            </View>
            <View style={[styles.row, styles.rateItemContainer]}>
              <View style={[styles.flex1, styles.row]}>
                <Image
                  source={flagSG}
                  height={20}
                  width={20}
                  resizeMode="contain"
                />
                <Text>SGD</Text>
              </View>
              <Text style={styles.buySellValueText}>15, 555.600</Text>
              <Text style={styles.buySellValueText}>15, 555.600</Text>
            </View>
            <View style={[styles.row, styles.rateItemContainer]}>
              <View style={[styles.flex1, styles.row]}>
                <Image
                  source={flagSG}
                  height={20}
                  width={20}
                  resizeMode="contain"
                />
                <Text>SGD</Text>
              </View>
              <Text style={styles.buySellValueText}>15, 555.600</Text>
              <Text style={styles.buySellValueText}>15, 555.600</Text>
            </View>
            <Text style={styles.seeAll}>See All {'>'}</Text>
          </View>

          {/* Insight */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Insight</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <View>
              <Image source={insight1} style={styles.insightImg} />
              <Text style={styles.insightText}>FX Trend</Text>
            </View>
            <View>
              <Image source={insight2} style={styles.insightImg} />
              <Text style={styles.insightText}>Promotions</Text>
            </View>
            <View>
              <Image source={insight3} style={styles.insightImg} />
              <Text style={styles.insightText}>Referral</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
