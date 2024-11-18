import { Image, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import CustomeText from '../../components/CustomeText'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constant/Color';
import LineChartComponent from '../../components/LineChartComponent';
import ImageUrls from '../../constant/Images';
import createStyles from '../../constant/CustomStyle';

const Dashboard = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [serviceData, setServiceData] = useState([
    { name: 'Leads', image: ImageUrls.leads },
    { name: 'Estimates', image: ImageUrls.estimate },
    { name: 'Orders', image: ImageUrls.order },
    { name: 'Services', image: ImageUrls.service },
    { name: 'Products', image: ImageUrls.product },
    { name: 'Moving Material', image: ImageUrls.moving },
    // { name: 'Services', image: 'url' },
    // { name: 'Products', image: 'url' },
    // { name: 'Moving Material', image: 'url' },
  ])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const boxArr = [
    { number: '48', name: 'Kunden' },
    { number: '47', name: 'Bestelluggen' },
    { number: '55', name: 'Anfragen' },
    { number: '37', name: 'Verkaufe' },
  ]
  const chartData = [20, 45, 28, 80, 99, 43,74,44,22,11,11];
  const chartLabels = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',"item1",'item2','item3','item4'];


  const Styles = createStyles(isDarkMode);
  return (

    <View style={Styles.container}>
      {/* box section  */}
      <ScrollView contentContainerStyle={{ paddingBottom: 35 }}>
        <View style={styles.boxView}>
          {boxArr.map((item, index) => {
            return (
              <View key={index} style={styles.box}>
                <View style={{ width: '40%', alignItems: 'center', justifyContent: 'center', }}>
                  <FontAwesome name="user-o" size={55} color={Colors.white} />
                </View>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center',width:'60%' }}>
                  <CustomeText title={item.number}  style={[styles.text,{color:'white',paddingBottom:5}]}/>
                  <CustomeText title={item.name} numberOfLines={1} style={[styles.text,{color:'white'}]} />
                 
                </View>
              </View>)
          })}
        </View>

        {/* //graphs UI */}
        
        <View style={[{paddingLeft:20,marginVertical:10,paddingTop:10}]}>
          <View style={[styles.header]}>
            <CustomeText title={'Statistic'} style={styles.title} />
          </View>
          <View style={styles.chartContainer}>
            <LineChartComponent data={chartData} labels={chartLabels} />
          </View>
        </View>


        <View style={[styles.boxView,]}>
          {serviceData.map((item, ind) => {
            return (
              <View key={ind} style={[styles.box1]}>
                <View style={{ height: '60%', width: '100%', alignItems: 'center', }}>
                  <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode={'contain'} />
                </View>
                <View style={{}}>
                  <CustomeText
                    numberOfLines={1}
                    title={item.name} style={[{ color: Colors.textColor }]} />
                </View>
              </View>
            )
          })}

        </View>
      </ScrollView>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth:1,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
  },
  text:{
    fontWeight:'700'
  },
  chartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
  },

  boxView: {
    // borderWidth: 1,
    height: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    flexWrap: 'wrap',
    rowGap: 1,
    width: '95%',
    alignSelf: 'center',
   
    // borderWidth:1

  },

  box: {
    backgroundColor: Colors.primaryColor,
    flexDirection: 'row',
    height: 90,
    width: '43%',
    margin: 10,
    borderRadius: 10,
    // borderWidth:1,
  },
  titleText: {
    fontFamily: 22,
    fontWeight: 'bold',
    color: 'white',
    padding: 4
  },
  box1: {
    backgroundColor: Colors.white,
    height: '45%',
    width: '28%',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: Colors.primaryColor,
    shadowOpacity: .1
    // borderWidth:1,
  },
})