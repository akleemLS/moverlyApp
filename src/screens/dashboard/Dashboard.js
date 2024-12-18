import {
  Alert,
  BackHandler,
  Dimensions,
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomeText from '../../components/CustomeText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LineChartComponent from '../../components/LineChartComponent';
import ImageUrls from '../../constant/Images';
import createStyles from '../../constant/CustomStyle';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Color from '../../constant/Color';
import { boxArr, graphData, serviceData, serviceNavigationMap } from '../../constant/ConstantData';
import { useTranslation } from 'react-i18next';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';


const { width, height } = Dimensions.get('window');
const scale = width / 390;

// Responsive size function
const responsiveSize = (size) => PixelRatio.roundToNearestPixel(size * scale);
const Dashboard = () => {
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const navigation = useNavigation();


  const handleServiceBoxClick = (item) => {
    console.log('Item clicked:', item);
    const routeName = serviceNavigationMap[item.name];
    if (routeName) {
      navigation.navigate(routeName);
    } else {
      console.warn(`No route defined for ${item.name}`);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        console.log("back button press")
        // Show confirmation dialog
        Alert.alert(
          'Exit App',
          'Are you sure you want to exit?',
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Exit', onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: false }
        );
        return true; // Prevent default behavior
      };

      // Add event listener for back button
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      // Cleanup event listener when leaving the screen
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <CustomSafeAreaView>
      <View style={Styles.container}>
        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={{ paddingBottom: height * 0.05 }} showsVerticalScrollIndicator={false}>
          {/* Box Section */}
          <CustomeText title={t('heading.Dashboard')} style={[styles.title, styles.heading]} />
          <View style={styles.boxView}>
            {boxArr.map((item, index) => (
              <View key={index} style={styles.box}>
                <View style={styles.iconContainer}>
                  <FontAwesome name="user-o" size={height * 0.06} color={Color.white} />
                </View>
                <View style={styles.textContainer}>
                  <CustomeText
                    title={item.number}
                    style={styles.numberText}
                  />
                  <CustomeText
                    title={t(item.name)}
                    numberOfLines={1}
                    style={styles.nameText}
                  />
                </View>
              </View>
            ))}
          </View>

          {/* Statistics Section */}
          <View style={[styles.chartSection]}>
            <View style={styles.header}>
              <CustomeText title={t('heading.Statistic')} style={styles.title} />
            </View>
            <View style={styles.chartContainer}>
              <LineChartComponent data={graphData.chartData} labels={graphData.chartLabels} />
            </View>
          </View>


          {/* Service Boxes */}
          <View style={styles.serviceContainer}>
            <View style={styles.boxView1}>
              {serviceData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleServiceBoxClick(item)}
                  style={styles.serviceBox}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={item.image}
                      style={styles.image}
                      resizeMode={'contain'}
                    />
                  </View>
                  <CustomeText
                    numberOfLines={1}
                    title={t(item.name)}
                    style={styles.serviceName}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>


        </ScrollView>
      </View>
    </CustomSafeAreaView>

  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
    alignSelf: 'center',
  },
  heading: { paddingLeft: 20, padding: 10, },
  box: {
    backgroundColor: Color.primaryColor,
    flexDirection: 'row',
    height: height * 0.12,
    width: '47%',
    marginBottom: height * 0.02,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconContainer: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '60%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  numberText: {
    paddingBottom: height * 0.005,
    color: 'white',
    fontWeight: 'bold',
    fontSize: height * 0.02,
  },
  nameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: height * 0.015,
  },
  serviceContainer: {
    marginTop: height * 0.02,
    justifyContent: 'center',
    paddingLeft: 20
  },

  boxView1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: '5%',  

  },
  serviceBox: {
    backgroundColor: Color.white,
    height: responsiveSize(100),
    width: '29%',
    marginBottom: responsiveSize(15),
    marginRight: '3.5%',
    borderRadius: responsiveSize(8),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: .5,
    shadowColor: Color.primaryColor,
    shadowOpacity: 0.1,
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '90%',
  },
  serviceName: {
    fontSize: responsiveSize(12),
    color: Color.textColor,
    textAlign: 'center',
  },

  chartSection: {
    marginVertical: height * 0.02,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    marginBottom: height * 0.02,
    alignItems: 'flex-start',
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: height * 0.03, // Responsive title size
    // textAlign: 'center', // Centers text
  },
});

