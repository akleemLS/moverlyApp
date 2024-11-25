import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import Color from '../constant/Color';
import CustomeText from './CustomeText';
import createStyles from '../constant/CustomStyle';


const MovingBoxItem = ({ item, onPress }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const Styles = createStyles(isDarkMode);

    return (
        <TouchableOpacity
            onPress={() => onPress(item)}
            style={Styles.boxContainer}>

            {item?.image &&
                <View style={Styles.imageContainer}>
                    <Image
                        source={{ uri: item.image }}
                        style={[Styles.image, { backgroundColor: 'transparent' }]}
                        resizeMode="cover"

                    />
                </View>
            }


            <View style={[Styles.detailsContainer,]}>
                <CustomeText style={{ fontSize: 18, }} numberOfLines={3} title={item?.name} />
                <CustomeText style={styles.text} numberOfLines={3} title={item.description} />
            </View>

            <View style={[Styles.priceContainer,]}>
                <CustomeText title={`${item.price} €`} />
            </View>
        </TouchableOpacity>
    )
}

export default MovingBoxItem

const styles = StyleSheet.create({
    text: {
        // fontSize:18
        color: Color.textColor,
        paddingTop: 5
    }
})