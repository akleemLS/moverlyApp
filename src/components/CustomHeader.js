import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme, Dimensions, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Input from './Input'; // Replace with your input component if different
import { useNavigation } from '@react-navigation/native';
import createStyles from '../constant/CustomStyle';
import CustomeText from './CustomeText';
import { Searchbar } from 'react-native-paper';

// Screen dimensions
const { width, height } = Dimensions.get('window');

const CustomHeader = ({
  searchQuery,
  showSearch = true,
  title = '',
  onChangeText,
  placeholder = 'Search here',
}) => {
  const colorScheme = useColorScheme(); // Detect light or dark mode
  const isDarkMode = colorScheme === 'dark';
  const Styles = createStyles(isDarkMode);
  const navigation = useNavigation();

  return (
    <View style={[styles.headerContainer, Styles.backgroundColor]}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-sharp" size={height * 0.03} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>

      <View style={styles.content}>
        {showSearch ? ( 
          <TextInput
          // right={{color:'red'}}
          // clearIcon={<Ionicons name="chevron-back-sharp" size={height * 0.03} color={isDarkMode ? 'white' : 'black'} />}
          // loading={searchQuery?.length ?true:false}
            // icon={'plus'}
            placeholder={placeholder}
            style={[
              styles.searchInput,
              {
                backgroundColor: isDarkMode ? '#555' : '#EEE',
                color: isDarkMode ? 'white' : 'black',
              },
            ]}
            value={searchQuery}
            onChangeText={onChangeText}
            placeholderTextColor={isDarkMode ? '#CCC' : '#888'}
          />
        ) : (
          <CustomeText title={title} style={[styles.title,]}/>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04, // Relative padding
    height: height * 0.07, 
    marginBottom:5,
    
    // margin: 15
  },
  backButton: {
    marginRight: width * 0.02, // Adjust spacing
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  searchInput: {
    padding: height * 0.019, // Responsive padding
    borderRadius: height * 0.05, // Rounded corners relative to screen height
    width: '100%', // Full width for the search box
  },
  title: {
    fontSize: height * 0.025, // Responsive font size
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomHeader;
