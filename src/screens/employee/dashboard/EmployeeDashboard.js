import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, useColorScheme, View, Dimensions, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import createStyles from '../../../constant/CustomStyle';
import CustomeText from '../../../components/CustomeText';
import Color from '../../../constant/Color';
import { profileImageUrl } from '../../../constant/ConstantData';
import ImageUrls from '../../../constant/Images';


const { width } = Dimensions.get('window');

const EmployeeDashboard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = createStyles(isDarkMode);

  const navigation = useNavigation();

  const handleOrderStatus = (type) => {
    navigation.navigate('ViewOrderStatus',{type})
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={localStyles.profileContainer}>
          <View style={localStyles.profileHeader}>
            <View style={localStyles.profileInfo}>
              <CustomeText title="Welcome Back" style={localStyles.welcomeText} />
              <CustomeText title="John Doe" style={localStyles.userName} />
              <Text style={localStyles.userRole}>Role</Text>
            </View>
            <View style={localStyles.profileImageContainer}>
              <Image
                style={[styles.image, localStyles.profileImage]}
                source={{ uri: profileImageUrl }}
              />
            </View>
          </View>

          <TouchableOpacity activeOpacity={.5}
            onPress={() => handleOrderStatus('Pending')}
            style={localStyles.statusBox}>
            <View style={localStyles.statusContent}>
              <View>
                <CustomeText title="Pending Orders" style={localStyles.statusTitle} />
                <CustomeText title="20" style={localStyles.statusValue} />
              </View>
              <Image
                source={ImageUrls.timer}
                style={localStyles.statusImage}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.5}
            onPress={() => handleOrderStatus('Complete')}
            style={localStyles.statusBox}>
            <View style={localStyles.statusContent}>
              <View>
                <CustomeText title="Completed Orders" style={localStyles.statusTitle} />
                <CustomeText title="20" style={localStyles.statusValue} />
              </View>
              <Image
                source={ImageUrls.target}
                style={localStyles.statusImage}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EmployeeDashboard;

const localStyles = StyleSheet.create({
  profileContainer: {
    padding: width * 0.03,
  },
  profileHeader: {
    height: 190,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: width * 0.03,
  },
  profileInfo: {
    height: 100,
    paddingLeft: width * 0.03,
  },
  welcomeText: {
    fontSize: 13,
    paddingLeft: width * 0.03,
  },
  userName: {
    paddingVertical: width * 0.02,
    fontSize: 26,
    fontWeight: 'bold',
    color: Color.primaryColor,
  },
  userRole: {
    paddingLeft: width * 0.05,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    borderRadius: 50,
  },
  statusBox: {
    height: 100,
    borderRadius: 20,
    marginVertical: width * 0.02,
    backgroundColor: Color.primaryColor,
  },
  statusContent: {
    margin: width * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  statusValue: {
    fontSize: 40,
    paddingTop: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  statusImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
});
