// Styles.js
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const createStyles = (isDarkMode) => {
    return StyleSheet.create({
        backgroundStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
            flex: 1,
        },
        container: {
            backgroundColor: isDarkMode ? Colors.darker : '#F5F5F5',
            flex: 1,
            padding: 16,
        },
        backgroundColor:{
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
        text: {
            color: isDarkMode ? Colors.lighter : Colors.darker,
            fontSize: 16,
        },
        button: {
            backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
        },
    });
};

export default createStyles;
