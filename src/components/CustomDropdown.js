import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  Dimensions,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomeText from './CustomeText';
import createStyles from '../constant/CustomStyle';

const { width, height } = Dimensions.get('screen');

const CustomDropdown = ({ data, placeholder = 'Choose', onSelect ,title}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const Styles = createStyles(isDarkMode);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsVisible(false);
    onSelect(item);
  };

  return (
    <View style={[Styles.container, { marginHorizontal: 15, margin: 5 }]}>

      {title &&
        <View style={styles.titleView}>
          <CustomeText title={title} />
        </View>
      }
      <TouchableOpacity
        style={[
          styles.dropdownButton,
          Styles.boxBackgroundStyle]}
        onPress={() => setIsVisible(!isVisible)}>
        <CustomeText title={selectedItem ? selectedItem : placeholder} style={[styles.selectedText,]} />

        <Ionicons
          name={isVisible ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={isDarkMode ? 'white' : 'black'}
        />
      </TouchableOpacity>

      <Modal
        transparent
        visible={isVisible}
        animationType="fade"
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setIsVisible(false)}
          activeOpacity={1}
        >
          <View style={[styles.dropdownList, { backgroundColor: isDarkMode ? '#333' : '#FFF' }]}>
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => handleSelect(item)}>
                  <CustomeText title={item} style={[styles.itemText,]} />
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  titleView:{
    margin:5
},
  container: {
    marginVertical: 10,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: '#CCC',
    // borderWidth:1
  },
  selectedText: {
    fontSize: height * 0.019,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownList: {
    minWidth: width * 0.5,
    maxHeight: height * 0.3,
    borderRadius: 5,
    padding: 10,
    elevation: 1,
    // borderWidth:1,
    // marginHorizontal:10
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCC',
  },
  itemText: {
    fontSize: height * 0.018,
    // textAlign:'center',
    // borderWidth:1
  },
});

export default CustomDropdown;
