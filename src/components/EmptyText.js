import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyText = ({message}) => {
  return (
    <View style={styles.emptyContainer}>
    <CustomeText title ={message||"Data is not available"} style={styles.emptyText}/>
  </View>
  )
}

export default EmptyText

const styles = StyleSheet.create({})