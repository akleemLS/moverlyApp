import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../components/Input'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { useNavigation } from '@react-navigation/native';
import CustomeText from '../../components/CustomeText';
import createStyles from '../../constant/CustomStyle';
import Colors from '../../constant/Color';
import LeadBoxItem from '../../components/LeadBoxItem';


const List = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const [searchQuery, setSearchQuery] = useState('');
  const [leadsData, setLeadsData] = useState([
    {
      name: 'wfd Dcdoe',
      email: 'email@yopmail.com',
      address: 'Berlin list and sell',
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
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15, justifyContent: 'center' }}>
        <TouchableOpacity style={{ padding: 2, }} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={20} color={isDarkMode ? "white" : 'black'} />
        </TouchableOpacity>
        <Input
          placeholder="Search Leads"
          style={{ borderRadius: 30 }}
          value={searchQuery}
          onChangeText={handleSearch}
        />

      </View>

     
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
          <Text style={styles.noDataText}>No data available</Text>
        </View>
      )}


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
    marginBottom: 10,
    elevation: 1,
    shadowOpacity: .2,
    shadowColor: Colors.primaryColor,

  },
  boxTopSection: {
    height: '45%',
    borderBottomWidth: 2,
    borderBottomColor: 'grey'
  },
  text: {
    fontSize: 16,
    padding: 2
  },
  paddingButton: {
    margin: 10,
    // borderWidth: 1,
    height: 40,
    backgroundColor: '#D3D3D333',
    borderRadius: 20,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})