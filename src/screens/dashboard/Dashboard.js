import {
  Dimensions,
  Image,
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
import { useNavigation } from '@react-navigation/native';
import Color from '../../constant/Color';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const Dashboard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const [serviceData, setServiceData] = useState([
    { name: 'Leads', image: ImageUrls.leads },
    { name: 'Estimates', image: ImageUrls.estimate },
    { name: 'Orders', image: ImageUrls.order },
    { name: 'Services', image: ImageUrls.service },
    { name: 'Products', image: ImageUrls.product },
    { name: 'Moving Material', image: ImageUrls.moving },
    
  ]);

  const boxArr = [
    { number: '48', name: 'Kunden' },
    { number: '47', name: 'Bestelluggen' },
    { number: '55', name: 'Anfragen' },
    { number: '37', name: 'Verkaufe' },
  ];

  const chartData = [20, 45, 28, 80, 99, 43, 74, 44, 22, 11, 11];
  const chartLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
  ];

  const Styles = createStyles(isDarkMode);

  const serviceNavigationMap = {
    Leads: 'LeadServices',
    Estimates: 'EstimateServices',
    Orders: 'OrderServices',
    Services: 'ServicesServices',
    Products: 'ProductServices',
    'Moving Material': 'MovingServices',
  };

  const handleServiceBoxClick = (item) => {
    console.log('Item clicked:', item);
    const routeName = serviceNavigationMap[item.name];
    if (routeName) {
      navigation.navigate(routeName);
    } else {
      console.warn(`No route defined for ${item.name}`);
    }
  };

  return (
    <View style={Styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: height * 0.05 }}>
        {/* Box Section */}
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
                  title={item.name}
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
            <CustomeText title={'Statistic'} style={styles.title} />
          </View>
          <View style={styles.chartContainer}>
            <LineChartComponent data={chartData} labels={chartLabels} />
          </View>
        </View>

        {/* Service Boxes */}
        <View style={[styles.boxView]}>
          {serviceData.map((item, ind) => (
            <TouchableOpacity
              onPress={() => handleServiceBoxClick(item)}
              key={ind}
              style={[styles.serviceBox]}>
              <View style={styles.imageContainer}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode={'contain'}
                />
              </View>
              <CustomeText
                numberOfLines={1}
                title={item.name}
                style={styles.serviceName}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
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
  box: {
    backgroundColor: Color.primaryColor,
    flexDirection: 'row',
    height: height * 0.12,
    width: '45%', 
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

  serviceBox: {
    backgroundColor: Color.white,
    height: height * 0.12,
    width: '30%', 
    marginBottom: height * 0.02, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: Color.primaryColor,
    shadowOpacity: 0.2,
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  serviceName: {
    color: Color.textColor,
    fontSize: height * 0.015,
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
    textAlign: 'center', // Centers text
  },
});

