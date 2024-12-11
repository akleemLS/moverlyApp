// Styles.js
import { Dimensions, StyleSheet } from "react-native";
import Color from "./Color";
import { Colors } from "react-native/Libraries/NewAppScreen";



const createStyles = (isDarkMode) => {
    return StyleSheet.create({
        backgroundStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Color.lighter,
            flex: 1,
        },
        // container: {
        //     backgroundColor: isDarkMode ? Color.darkBackground : Color.lightBackground,
        //     flex: 1,
        //     // marginBottom:-10
        
        // },
        container: {
            backgroundColor: isDarkMode ? Colors.darker : '#F5F5F5',
            flex: 1,
            // marginBottom:-10
        
        },
        backgroundColor: {
            backgroundColor: isDarkMode ? Colors.darker : Color.lightBackground,
        },
        boxBackgroundStyle: {
            backgroundColor: isDarkMode ? Color.darkBackground : 'white' ,
        },
        text: {
            color: isDarkMode ? Color.lighter : Colors.darker,
            fontSize: 16,
        },
        color: {
            color: isDarkMode ? Color.lightBackground : Color.darkBackground,
            // fontWeight:'400'
        },
        button: {
            backgroundColor: isDarkMode ? Color.lighter : Color.darker,
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
        },
        boxContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: Dimensions.get('screen').height * 0.13,
            borderRadius: 12,
            backgroundColor: isDarkMode ? Color.darkBackground : 'white',
            padding: 10,
            marginVertical: 8,
            marginHorizontal: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: .5,
            elevation: 1,
          },
          imageContainer: {
            flex: 2.5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
          },
          image: {
            width: '100%',
            height: '100%',
            borderRadius: 15,
          },
          detailsContainer: {
            flex: 4.5,
            justifyContent: 'center',
            // alignItems:'center',
            paddingLeft: 10,
          },
          priceContainer: {
            flex: 2,
            justifyContent: 'center',
            paddingLeft: 10,
            alignItems:'center',
          },
    });
};

export default createStyles;
