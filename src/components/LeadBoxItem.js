import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, useColorScheme } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constant/Color';
import CustomeText from './CustomeText';


const statusColors = {
  Active: { badgeColor: '#90EE90', textColor: '#228B22' },
  'Waiting Customer Response': { badgeColor: '#ADD8E6', textColor: '#007BFF' },
  default: { badgeColor: '#D3D3D333', textColor: 'orange' },
};




const LeadBoxItem = ({ item, onPress, }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { badgeColor, textColor } = statusColors[item.status] || statusColors.default;







  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darkBackground : 'white' },
      ]}
    >
      <View style={styles.headerSection}>
       
        <View style={styles.rowSpaceBetween}>
          <View style={styles.infoSection}>
            <CustomeText
              title={item?.name}
              style={styles.nameText}
              numberOfLines={1} // Truncate long text
              ellipsizeMode="tail"
            />
            <CustomeText
              title={item?.email}
              style={styles.emailText}
              numberOfLines={1}
              ellipsizeMode="tail"
            />
          </View>

          {/* Status Badge Section */}
          <View style={[styles.statusBadgeContainer, { backgroundColor: badgeColor }]}>
            <CustomeText
              title={item?.status}
              style={[styles.statusText, {color: textColor }]}
              numberOfLines={2} 
              ellipsizeMode="tail"
            />
          </View>
        </View>

      </View>

      {/* Bottom Section */}
      <View style={styles.rowSpaceBetween}>
        <View style={styles.infoSection}>
          <View style={styles.rowAligned}>
            <Ionicons name="calendar-number-outline" size={25} color={Colors.primaryColor} />
            <CustomeText
              title={item?.date}
              style={styles.dateText}
              numberOfLines={1}
              ellipsizeMode="tail"
            />
          </View>
        </View>
        <View style={{ justifyContent: 'center' }}>
          <CustomeText
            title={"-"}
            style={[{ color: Colors.textColor }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          />
        </View>

        <View style={styles.infoSection}>
          <View style={[styles.rowAligned, { justifyContent: 'flex-end' }]}>
            <Ionicons name="calendar-number-outline" size={25} color={Colors.primaryColor} />
            <CustomeText
              title={item?.date1}
              style={styles.dateText}
              numberOfLines={1}
              ellipsizeMode="tail"
            />
          </View>
        </View>

      </View>
      <View style={[styles.rowAligned, { marginHorizontal: 5, flex: 1 }]}>
        <Ionicons name="location-outline" size={25} color={Colors.primaryColor} />
        <CustomeText
          title={item?.address}
          style={styles.addressText}
          numberOfLines={2} 
          ellipsizeMode="tail"
        />
      </View>
    </TouchableOpacity>
  );
};

export default LeadBoxItem;

const styles = StyleSheet.create({
  container: {
    minHeight: 150,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 15,
    elevation: 1,
    shadowOpacity: 0.1,
    shadowColor: Colors.primaryColor,
    padding: 10,
  },
  headerSection: {
    flex: 1, 
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    paddingBottom: 10, 
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  infoSection: {
    flex: 3, // 75% of space
    marginHorizontal: 1,
  },
  
  statusBadgeContainer: {
    flex: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    // flexWrap: 'wrap', // Allow wrapping for dynamic height
  },
  
  statusText: {
    fontSize: 16, // Slightly smaller to fit within the badge
    fontWeight: 'bold',
    textAlign: 'center',
    // padding: 5,
  },

  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5, // Space between name and email
  },
  emailText: {
    fontSize: 14,
    color: Colors.textColor,
    marginTop: 5, // Space between email and status
  },
  statusBadge: {
    // margin: 5,
    height: 40,
    backgroundColor: '#D3D3D333',
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',


  },
  statusText: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5
  },
  rowAligned: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  dateText: {
    paddingLeft: 10,
    fontSize: 14,
    color: Colors.textColor,
    marginLeft: 5, // Space between icon and text
  },
  iconsAligned: {
    borderWidth: 1,
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
  },
  addressText: {
    paddingLeft: 10,
    fontSize: 14,
    flexShrink: 1,
    // marginLeft: 5, // Space between icon and address text
  },
});
