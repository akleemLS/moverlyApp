import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native';
import CustomeText from '../../components/CustomeText';
import createStyles from '../../constant/CustomStyle';
import LeadBoxItem from '../../components/LeadBoxItem';
import CustomHeader from '../../components/CustomHeader';
import { useTranslation } from 'react-i18next';


const LeadServices = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const [searchQuery, setSearchQuery] = useState('');
  const [leadsData, setLeadsData] = useState([
    {
      name: 'wfd Dcdoef',
      email: 'email@yopmail.com',
      address: 'Berlin list and selhfioejfhoeifjoiej fefoiejfej fneof feifhoehfeo l',
      address1: 'fioejfoeifjoeijfioej',
      status: 'Pending',
      date: '11-12-2024',
      date1: '12-12-2024',
    },
    {
      name: 'fef Dfefoe',
      email: 'email@yopmail.com',
      address: 'Berlin list and sell',
      address1: 'Berlin',
      status: 'Pending',
      date: '11-12-2024',
      date1: '12-12-2024',
    },
    {
      name: 'efe Dffioudhfoe',
      email: 'email@yopmail.com',
      address: 'Berlin list and sell',
      address1: 'Berlin',
      status: 'Waiting Customer Response',
      date: '11-12-2024',
      date1: '12-12-2024',
    },
    {
      name: 'Ja3refne Doe',
      email: 'email@yfiil.com',
      address: 'Berlin list and sell',
      address1: 'Berlin',
      status: 'Pending',
      date: '11-12-2024',
      date1: '12-12-2024',
    },
    {
      name: '2anef Doe',
      email: 'email@yopmail.com',
      address: 'Berlin list and sell',
      address1: 'Bereoifjieojfeojlin',
      status: 'Active',
      date: '11-12-2024',
      date1: '12-12-2024',
    },
    // Add more dummy data as needed
  ]);

  const handleSearch = (text) => {
    console.log('seach quray',text);
    setSearchQuery(text);
  };

  const filteredLeads = leadsData.filter((lead) =>
    lead.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePress = (item) => {
    // Navigate to the EditLead screen and pass the item data
    // navigation.navigate('EditLead', { leadData: item });
  };

  return (
    <View style={Styles.container}>

      <CustomHeader
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder={t('placeholder.Leads')}
      />


      {filteredLeads.length > 0 ? (
        <FlatList
          data={filteredLeads}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item,index }) => <LeadBoxItem index ={index} item={item} onPress={() => handlePress(item)} />}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <CustomeText title='No data available' style={styles.noDataText}/>
        </View>
      )}


    </View>
  )
}

export default LeadServices;

const styles = StyleSheet.create({
  noDataContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  noDataText:{
    fontSize:22,
    fontWeight:'800'
  }
})