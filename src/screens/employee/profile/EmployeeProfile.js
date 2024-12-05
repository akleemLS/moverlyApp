import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Avatar, Card, Text, List, Button, Switch, IconButton } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../../../utils/i18n';


const EmployeeProfile = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const { t } = useTranslation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add dark mode implementation if needed
  };

  const handleChangeLanguage = async (language) => {
    await changeLanguage(language);
    setLanguageModalVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#FFFFFF' }]}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Avatar.Image
          size={120}
          source={{ uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' }} // Placeholder for profile image
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.editIcon}>
          <IconButton
            icon="pencil"
            size={20}
            color="#FFF"
            style={styles.editButton}
            onPress={() => console.log('Edit Profile Image')}
          />
        </TouchableOpacity>
        <Text style={[styles.name, { color: darkMode ? '#FFFFFF' : '#000000' }]}>
          John Doe
        </Text>
        <Text style={[styles.email, { color: darkMode ? '#AAAAAA' : '#555555' }]}>
          john.doe@example.com
        </Text>
      </View>

      {/* General Settings Section */}
      <Card style={[styles.card, { backgroundColor: darkMode ? '#1E1E1E' : '#F5F5F5' }]}>
        <Card.Title title={t('General Settings')} />
        <Card.Content>
          <List.Item
            title={t('Change Password')}
            right={() => <List.Icon icon="chevron-right" />}
            onPress={() => navigation.navigate('ChangePassword')}
          />
          <List.Item
            title={t('Mode')}
            right={() => (
              <Switch
                value={darkMode}
                onValueChange={toggleDarkMode}
                color={darkMode ? '#BB86FC' : '#6200EE'}
              />
            )}
          />
          <List.Item
            title={t('Language')}
            right={() => <List.Icon icon="chevron-right" />}
            onPress={() => setLanguageModalVisible(true)}
          />
        </Card.Content>
      </Card>

      {/* Account Section */}
      <Card style={[styles.card, { backgroundColor: darkMode ? '#1E1E1E' : '#F5F5F5' }]}>
        <Card.Title title={t('Account')} />
        <Card.Content>
          <List.Item
            title={t('button.Log_Out')}
            onPress={() => console.log('Logout pressed')}
            left={() => <List.Icon icon="logout" />}
          />
        </Card.Content>
      </Card>

      {/* Language Modal */}
      <Modal
        transparent={true}
        visible={languageModalVisible}
        animationType="slide"
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={[styles.modalContent, { backgroundColor: darkMode ? '#1E1E1E' : '#FFFFFF' }]}>
            <Text style={styles.modalTitle}>{t('Select Language')}</Text>
            <Button
              mode="contained"
              onPress={() => handleChangeLanguage('en')}
              style={styles.languageButton}
            >
              English
            </Button>
            <Button
              mode="contained"
              onPress={() => handleChangeLanguage('de')}
              style={styles.languageButton}
            >
              Deutsch
            </Button>
            <Button
              mode="outlined"
              onPress={() => setLanguageModalVisible(false)}
              style={styles.cancelButton}
              color="red"
            >
              {t('Cancel')}
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EmployeeProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 110,
  },
  editButton: {
    backgroundColor: '#6200EE',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  languageButton: {
    marginVertical: 5,
  },
  cancelButton: {
    marginTop: 10,
  },
});
