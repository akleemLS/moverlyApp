import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import CustomSafeAreaView from '../../components/CustomSafeAreaView'

const ServicesServices = () => {

  const navigation = useNavigation()
  const handNavigation = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Profile' }],
      }))
  }
  return (
    <CustomSafeAreaView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => {
          handNavigation()
        }

        }>
          <Text>ServicesServices</Text>
        </TouchableOpacity>

      </View>
    </CustomSafeAreaView>

  )
}

export default ServicesServices

const styles = StyleSheet.create({})