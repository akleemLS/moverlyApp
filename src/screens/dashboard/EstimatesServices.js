import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import CustomeText from '../../components/CustomeText';
import createStyles from '../../constant/CustomStyle';
import LeadBoxItem from '../../components/LeadBoxItem';
import CustomHeader from '../../components/CustomHeader';


const EstimatesServices = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const [searchQuery, setSearchQuery] = useState('');
  const [leadsData, setLeadsData] = useState([
    {
      name: 'wfd Dcdoefuehufieh hohef',
      email: 'email@yopmail.com',
      address: 'Berlin list and selhfioejfhoeifjoiej fefoiejfej fneof feifhoehfeo l',
      address1: 'fioejfoeifjoeijfioej',
      status: 'Waiting Customer Response',
      date: '11-12-2024',
      date1: '12-12-2024',
    },
    {
      name: 'fef Dfefoe',
      email: 'email@yopmail.com',
      address: 'Berlin list and sell',
      address1: 'Berlin',
      status: 'Waiting Customer Response',
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
      status: 'Waiting Customer Response',
      date: '11-12-2024',
      date1: '12-12-2024',
    },
    {
      name: '2anef Doe',
      email: 'email@yopmail.com',
      address: 'Berlin list and sell',
      address1: 'Bereoifjieojfeojlin',
      status: 'Waiting Customer Response',
      date: '11-12-2024',
      date1: '12-12-2024',
    },
    // Add more dummy data as needed
  ]);

  const handleSearch = (text) => {
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
        placeholder="Search Estimates Here!"
      />


      {filteredLeads.length > 0 ? (
        <FlatList
          data={filteredLeads}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <LeadBoxItem item={item} onPress={() => handlePress(item)} />}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <CustomeText title='No data available' style={styles.noDataText} />
        </View>
      )}


    </View>
  )
}

export default EstimatesServices;

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noDataText: {
    fontSize: 22,
    fontWeight: '800'
  }
})