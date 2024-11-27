import { Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import Color from '../constant/Color';
import CustomeText from './CustomeText';
import createStyles from '../constant/CustomStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const MovingBoxItem = ({ item, onPress, type }) => {
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
                {type == 'customer' ?
                    <>
                        <CustomeText style={{ fontSize: 18, }} numberOfLines={3} title={item?.name} />
                        <View style={styles.detailsStyle}>
                            <MaterialCommunityIcons name="email" size={20} color={Color.primaryColor} style={{ paddingTop: 5, }} />
                            <CustomeText style={styles.text} numberOfLines={1} title={item?.email} />
                        </View>
                        <View style={styles.detailsStyle}>
                            <MaterialCommunityIcons name="map-marker" size={20} color={Color.primaryColor} style={{ paddingTop: 5, }} />
                            <CustomeText  style={styles.text} numberOfLines={2} title={item?.location} />
                        </View>
                    </>
                    :
                    <>
                        <CustomeText style={{ fontSize: 18, }} numberOfLines={3} title={item?.name} />
                        <CustomeText style={styles.text} numberOfLines={3} title={item.description} />
                    </>
                }
               
            </View>
            {
                type === 'customer' ? <>
                    <View style={[{height:'100%',flex:1,alignItems:'center',marginTop:10}]}>
                        <MaterialCommunityIcons name="square-edit-outline" size={30} color={Color.primaryColor} style={{ paddingTop: 5, }} />
                    </View>
                </> :
                    <View style={[Styles.priceContainer,]}>
                        <CustomeText title={`${item.price} €`} />
                    </View>
            }

        </TouchableOpacity>
    )
}

export default MovingBoxItem

const styles = StyleSheet.create({
    text: {
        // fontSize:18
        color: Color.textColor,
        paddingTop: 5,
        paddingLeft: 5
    },
    detailsStyle: {
        flexDirection: 'row',
        alignItems: 'center',

    }
})