import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { initializeI18n } from './i18n';


const I18nProvider = ({ children }) => {
  const [isI18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      await initializeI18n(); // Wait for i18n initialization
      setI18nReady(true); // Flag that i18n is ready
    };
    initialize();
  }, []);

  if (!isI18nReady) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
  },
});

export default I18nProvider;
