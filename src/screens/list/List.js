import { ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import Styles from '../../constant/CustomStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import CustomeText from '../../components/CustomeText';
import createStyles from '../../constant/CustomStyle';
import Colors from '../../constant/Color';

const List = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const [inputValue, setInputValue] = useState('')
  const handleSearching = (item) => {
    console.log('item', item)
    setInputValue(item)
  }

  let arr = [1,2,3,4,4,5,7]

  return (
    <View style={{}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, justifyContent: 'center' }}>
        <TouchableOpacity style={{ padding: 2, }} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} />
        </TouchableOpacity>
        <Input placeholder={'Leads'}
          style={{ borderRadius: 30 }}
          value={inputValue}
          onChangeText={handleSearching}
        />
      </View>
        <ScrollView>
          {/* box screen */}
        {arr.map((item)=>{
          return(
            <View style={[styles.boxView, Styles.backgroundColor,]}>
            <View style={styles.boxTopSection}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                <View style={{ margin: 10 }}>
                  <CustomeText title={'Name'} style={[styles.text, { fontSize: 22 }]} />
                  <CustomeText title={'Emails@gmail.com'} style={styles.text} />
                </View>
                <View style={{ margin: 10 }}>
                  <CustomeText title={'Pending'} style={[styles.text, { fontSize: 22, color: 'orange', fontWeight: 'bold' }]} />
                  {/* <CustomeText title={'Emails@gmail.com'} style={styles.text}/> */}
                </View>
              </View>

              {/* //bottom section */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                <View style={{ margin: 10 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="calendar" size={20} />
                    <CustomeText title={'2-11-2023'} style={{ paddingLeft: 10 }} />
                  </View>
                  <View style={{ paddingTop: 20, flexDirection: 'row', }}>
                    <FontAwesome name="location-arrow" size={20} />
                    <CustomeText title={'Berlin b - block'} style={[styles.text, { paddingLeft: 10 }]} />
                  </View>
                </View>
                <View style={{ margin: 10 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="calendar" size={20} />
                    <CustomeText title={'2-11-2023'} style={{ paddingLeft: 10 }} />
                  </View>
                  <View style={{ paddingTop: 20, flexDirection: 'row', }}>
                    {/* <FontAwesome name="calendar" size={20} /> */}
                    <CustomeText title={'Address'} style={[styles.text, { paddingLeft: 10 }]} />
                  </View>

                </View>
              </View>
            </View>
          </View>
          )
        })}
          
        </ScrollView>


    </View>
  )
}

export default List

const styles = StyleSheet.create({
  boxView: {
    // borderWidth: 1,
    height: 200,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 10,
    elevation:1,
    shadowOpacity:.2,
    shadowColor:Colors.primaryColor
  },
  boxTopSection: {
    height: '45%',
    borderBottomWidth: 2,
    borderBottomColor:'grey'
  },
  text: {
    fontSize: 18,
    padding: 2
  }
})