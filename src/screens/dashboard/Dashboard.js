import { Image, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import CustomeText from '../../components/CustomeText'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constant/Color';
import LineChartComponent from '../../components/LineChartComponent';
import ImageUrls from '../../constant/Images';

const Dashboard = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [serviceData, setServiceData] = useState([
    { name: 'Leads', image: ImageUrls.leads},
    { name: 'Estimates', image: ImageUrls.estimate},
    { name: 'Orders', image: ImageUrls.order},
    { name: 'Services', image: ImageUrls.service},
    { name: 'Products', image: ImageUrls.product},
    { name: 'Moving Material', image: ImageUrls.moving},
    // { name: 'Services', image: 'url' },
    // { name: 'Products', image: 'url' },
    // { name: 'Moving Material', image: 'url' },
  ])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const boxArr = [
    { number: 48, name: 'Kunden' },
    { number: 47, name: 'Bestelluggen' },
    { number: 55, name: 'Anfragen' },
    { number: 37, name: 'Verkaufe' },
  ]
  const chartData = [20, 45, 28, 80, 99, 43];
  const chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  return (
   
    <View style={[styles.container, backgroundStyle]}>
      {/* box section  */}
      <ScrollView contentContainerStyle={{ paddingBottom: 35 }}>
        <View style={styles.boxView}>
          {boxArr.map((item, index) => {
            return (
              <View key={index} style={styles.box}>
                <View style={{ width: '40%', alignItems: 'center', justifyContent: 'center' }}>
                  <FontAwesome name="user-o" size={55} color={Colors.white} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={[styles.titleText, { alignSelf: 'flex-start' }]}>{item.number}</Text>
                  <CustomeText title={item.name} style={styles.titleText} />
                </View>
              </View>)
          })}
        </View>

        <View style={{ margin: 10, paddingTop: 5, paddingLeft: 10 }}>
          <CustomeText title={'Statistic'} style={{ fontSize: 22 }} />
          <View style={{}}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <LineChartComponent
                data={chartData}
                labels={chartLabels}
                yAxisLabel="$"
                yAxisSuffix="k"
              />
            </View>
          </View>
          {/* <CustomeText title={'Statistic'} style={{ fontSize: 22,marginTop:10 }} /> */}
    
        </View>
        <View style={styles.boxView}>
            {serviceData.map((item,ind) => {
              return (
                <View key={ind} style={styles.box1}>
                  <View style={{ height: '60%', width: '100%', alignItems: 'center', }}>
                   <Image source={item.image} style={{width:'100%',height:'100%'}} resizeMode={'contain'}  />
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
  boxView: {
    // borderWidth: 1,
    height: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    flexWrap: 'wrap',
    rowGap: 1,
    width: '95%',
    alignSelf: 'center'

  },
  box: {
    backgroundColor: Colors.primaryColor,
    flexDirection: 'row',
    // borderWidth: 1,
    height: 90,
    width: 185,
    margin: 10,
    borderRadius: 10
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