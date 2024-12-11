import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { Avatar, Card, Text, List, Button, Switch } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import createStyles from '../../constant/CustomStyle';
import { changeLanguage } from 'i18next';
import CustomeText from '../../components/CustomeText';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Color from '../../constant/Color';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';





const Profile = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
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

    <CustomSafeAreaView>
      <ScrollView
        style={[Styles.container, styles.container]}
        contentContainerStyle={{ paddingBottom: 20 }}
      >

        {/* Profile Section */}
        <Card style={[styles.profileCard, Styles.boxBackgroundStyle]}>
          <Card.Content style={styles.profileSection}>
            <Avatar.Image
              size={100}
              source={{
                uri: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
              }}
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.editIcon}>
              <MaterialCommunityIcons name="pencil-circle" size={30} color="blue" />
            </TouchableOpacity>

            <CustomeText style={styles.name} title='John Doe' />

            <CustomeText style={styles.email} title='john.doe@example.com' />
            {/* <Text style={[styles.email, { color: darkMode ? '#AAAAAA' : '#555555' }]}>
            john.doe@example.com
          </Text> */}
          </Card.Content>
        </Card>

        {/* General Settings Section */}
        <Card style={[styles.card, Styles.boxBackgroundStyle]}>
          <Card.Title
            title={t('heading.General Settings')}
            titleStyle={[styles.cardTitle, Styles.color]}
          />
          <Card.Content style={styles.cardContent}>
            <List.Item
              title={t('Change Password')}
              titleStyle={Styles.color}
              left={() => <MaterialCommunityIcons name="key" size={24} style={Styles.color} />}
              right={() => <List.Icon icon="chevron-right" />}
              onPress={() => navigation.navigate('ChangePassword')}
            />
            <List.Item
              title={t('Mode')}
              titleStyle={Styles.color}
              left={() => <MaterialCommunityIcons name="theme-light-dark" size={24} style={Styles.color} />}
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
              titleStyle={Styles.color}
              left={() => <Fontisto name="language" size={24} style={Styles.color} />}
              right={() => <List.Icon icon="chevron-right" />}
              onPress={() => setLanguageModalVisible(true)}
            />
          </Card.Content>
        </Card>

        {/* Account Section */}
        <Card style={[styles.card, Styles.boxBackgroundStyle]}>
          <Card.Title title={t('heading.Account')} titleStyle={[styles.cardTitle, Styles.color]} />
          <Card.Content style={styles.cardContent}>
            <List.Item
              title={t('button.Log_Out')}
              titleStyle={Styles.color}
              left={() => <MaterialCommunityIcons name="logout" size={24} style={Styles.color} />}
              onPress={() => console.log('Logout pressed')}
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
              <CustomeText style={styles.modalTitle} title={'Select Language'} />
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
      </ScrollView>
    </CustomSafeAreaView>


  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  profileCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    marginBottom: 10,
  },
  editIcon: {
    position: 'absolute',
    bottom: 60,
    right: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardContent: {
    paddingHorizontal: 10,
    // backgroundColor:'white'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
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
