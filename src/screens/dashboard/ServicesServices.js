import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'

const ServicesServices = () => {

  const navigation = useNavigation()
  const handNavigation =()=>{
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Profile' }],
      }))
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>{
        handNavigation()
      }

      }>
        <Text>ServicesServices</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ServicesServices

const styles = StyleSheet.create({})