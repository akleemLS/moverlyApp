// Styles.js
import { StyleSheet } from "react-native";
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
            // flex:1
        },
        text: {
            color: isDarkMode ? Color.lighter : Colors.darker,
            fontSize: 16,
        },
        color: {
            color: isDarkMode ? Color.lightBackground : Color.darkBackground,
            fontWeight:'400'
        },
        button: {
            backgroundColor: isDarkMode ? Color.lighter : Color.darker,
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
        },
    });
};

export default createStyles;
