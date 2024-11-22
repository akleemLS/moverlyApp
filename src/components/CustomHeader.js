import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from './Input'; // Replace with your input component if different
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({
  searchQuery,
  showSearch = true,
  title = '',
  onChangeText,
  placeholder = 'Search here'
}) => {
  const colorScheme = useColorScheme(); // Detect light or dark mode
  const isDarkMode = colorScheme === 'dark';


  const navigation = useNavigation();

  return (
    <View style={[styles.headerContainer, title && { backgroundColor: isDarkMode ? '#333' : '#FFF' }]}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-sharp" size={30} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>
      
      {showSearch ? (
        <Input
          placeholder={placeholder}
          style={[styles.searchInput, { backgroundColor: isDarkMode ? '#555' : '#EEE',    color: isDarkMode ? 'white' : 'black' }]}
          value={searchQuery}
          onChangeText={onChangeText}
          placeholderTextColor={isDarkMode ? '#CCC' : '#888'}
        />
      ) : (
        <Text style={[styles.title, { color: isDarkMode ? 'white' : 'black' }]}>{title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    // borderWidth:1,
    justifyContent:'center'
    // paddingVertical: 10,
  },
  backButton: {
    // padding: 5,
  },
  searchInput: {
    // flex: 1,
    marginLeft: 5,
    padding: 10,
    borderRadius: 30,
    width: '95%',
    marginBottom:5

  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
