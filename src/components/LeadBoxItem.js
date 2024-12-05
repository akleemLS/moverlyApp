import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, useColorScheme } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomeText from './CustomeText';
import Color from '../constant/Color';


const statusColors = {
  Active: { badgeColor: '#CFFFCF', textColor: '#228B2' },
  // Active: { badgeColor: '#90EE90', textColor: 'green' },

  'Waiting Customer Response': { badgeColor: '#ADD8E666', textColor: '#007BFF' },
  default: { badgeColor: '#D3D3D333', textColor: 'orange' },
};


const eveOddValue = (index) => {
  let isEven = index % 2 != 0 && { backgroundColor: '#F4F4FD' }
  return isEven
}



const LeadBoxItem = ({ item, onPress, index }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { badgeColor, textColor } = statusColors[item.status] || statusColors.default;



  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Color.darkBackground : 'white' },
        eveOddValue(index)
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

          <View style={[styles.statusBadgeContainer,]}>
            <View style={{ backgroundColor: badgeColor, borderRadius: 20, }}>
              <CustomeText
                title={item?.status}
                style={[styles.statusText, { color: textColor }]}
                numberOfLines={3}
                ellipsizeMode="tail"
              />
            </View>

          </View>
        </View>

      </View>

      {/* Bottom Section */}
      <View style={styles.rowSpaceBetween}>
        <View style={styles.infoSection}>
          <View style={styles.rowAligned}>
            <Ionicons name="calendar-number-outline" size={25} color={Color.primaryColor} />
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
            style={[{ color: Color.textColor }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          />
        </View>

        <View style={styles.infoSection}>
          <View style={[styles.rowAligned, { justifyContent: 'flex-end' }]}>
            <Ionicons name="calendar-number-outline" size={25} color={Color.primaryColor} />
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
        <Ionicons name="location-outline" size={25} color={Color.primaryColor} />
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
    shadowColor: Color.primaryColor,
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
    // marginHorizontal: 5,
    marginVertical: 5,
  },
  infoSection: {
    flex: 3, // 75% of space
    marginHorizontal: 1,
  },

  statusBadgeContainer: {
    flex: 2,
    borderRadius: 20,
    // borderWidth:1
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 5,
    // paddingVertical: 5,
  },


  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5, // Space between name and email
  },
  emailText: {
    fontSize: 14,
    color: Color.textColor,
    marginTop: 5, // Space between email and status
  },

  statusText: {
    fontSize: 15,
    fontWeight: '700',
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
    color: Color.textColor,
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
