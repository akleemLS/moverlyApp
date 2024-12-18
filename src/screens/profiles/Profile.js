import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Image
} from 'react-native';
import { Avatar, Card, Text, List, Button, Switch, TextInput } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { useTranslation } from 'react-i18next';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import createStyles from '../../constant/CustomStyle';
import CustomeText from '../../components/CustomeText';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Color from '../../constant/Color';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import { Modalize } from 'react-native-modalize';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import { changeLanguage } from '../../utils/i18n';





const Profile = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
  })
  const passwordModalRef = useRef(null);
  const languageModalRef = useRef(null)
  const { t } = useTranslation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add dark mode implementation if needed
  };

  const handleChangeLanguage = async (language) => {
    await changeLanguage(language);
    setLanguageModalVisible(false);
  };

  const renderPasswordModal = () => (
    <View style={[styles.modalContent, { backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF' }]}>
      <CustomeText style={styles.modalTitle} title={t('Change Password')} />
      <TextInput
        label={t('Old Password')}
        value={oldPassword}
        onChangeText={(text) => setOldPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        label={t('New Password')}
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <View style={{ paddingTop: 30 }}>
        <CustomButton title={t('Change')} />
      </View>

    </View>
  );

  const renderLanguageModal = () => (
    <View style={[styles.modalContent, { backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF' }]}>
      {/* Title */}
      <CustomeText style={styles.modalTitle} title={t('Select Language')} />

      {/* Language Selection Options */}
      <View style={styles.languageOptionsContainer}>
        {/* English Option */}
        <TouchableOpacity
          style={[styles.languageOption, { backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F5F5' }]}
          onPress={() => {
            handleChangeLanguage('en')
            setLanguageModalVisible(false);
            languageModalRef.current?.close();
          }}
        >
          <Image
            source={{ uri: 'https://flagcdn.com/w320/us.png' }}
            style={styles.flagIcon}
          />
          <CustomeText style={styles.languageText} title={t('English')} />
        </TouchableOpacity>

        {/* German Option */}
        <TouchableOpacity
          style={[styles.languageOption, { backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F5F5' }]}
          onPress={() => {
            handleChangeLanguage('de')
            setLanguageModalVisible(false);
            languageModalRef.current?.close();
          }}
        >
          <Image
            source={{ uri: 'https://flagcdn.com/w320/de.png' }}
            style={styles.flagIcon}
          />
          <CustomeText style={styles.languageText} title={t('Deutsch')} />
        </TouchableOpacity>
      </View>

      {/* Cancel Button */}
      <Button
        mode="outlined"
        onPress={() => {
          setLanguageModalVisible(false);
          languageModalRef.current?.close();
        }}
        style={styles.cancelButton}
      >
        {t('Cancel')}
      </Button>
    </View>
  );

  return (
    <View style={Styles.container}>
      <StatusBar
        barStyle={'light-content'} // Adjust barStyle based on theme
        backgroundColor={Color.primaryColor} // Match the header and StatusBar color
        animated={true}
      />

      {/* <CustomSafeAreaView
        backgroundColor={Color.primaryColor}
      // statusBarStyle="light-content"
      > */}
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
              titleStyle={Styles.color}
              title={t('Change Password')}
              left={() => <MaterialCommunityIcons name="key" size={24} style={Styles.color} />}
              right={() => <List.Icon icon="chevron-right" />}
              onPress={() => {
                setPasswordModalVisible(true);
                passwordModalRef.current?.open();
              }}
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
              // onPress={() => setLanguageModalVisible(true)}
              onPress={() => {
                setLanguageModalVisible(true);
                languageModalRef.current?.open();
              }}
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

      </ScrollView>
      <Modalize
        ref={languageModalRef}
        modalHeight={400}
        onClosed={() => setPasswordModalVisible(false)}
      >
        {renderLanguageModal()}
      </Modalize>

      <Modalize
        ref={passwordModalRef}
        modalHeight={400}
        onClosed={() => setPasswordModalVisible(false)}
      >
        {renderPasswordModal()}
      </Modalize>
      {/* </CustomSafeAreaView> */}

    </View>



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
  modalContent: {
    padding: 20,
    height: '100%',
  },
  languageButton: {
    marginVertical: 5,
  },
  cancelButton: {
    marginTop: 10,
  },
  input: {
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  languageOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  languageOption: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    width: '40%',
    elevation: 3,
  },
  flagIcon: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  languageText: {
    fontSize: 16,
    fontWeight: '600',
    // color: '#333',
  },
  cancelButton: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
});
