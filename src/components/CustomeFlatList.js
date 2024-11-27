import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomeText from './CustomeText'

const CustomeFlatList = ({ data, renderItem }) => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            ListEmptyComponent={
                <View style={styles.emptyContainer}>
                    <CustomeText title="Data is not available" style={styles.emptyText} />
                </View>
            }
            contentContainerStyle={
                data?.length === 0 ? styles.fullHeight : null
            }
        />
    )
}

export default CustomeFlatList

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
    },
    fullHeight: {
        flexGrow: 1, // Ensures content fills the parent height
        justifyContent: 'center',
    },
})