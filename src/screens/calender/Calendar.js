import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Modalize } from 'react-native-modalize';
import DatePicker from 'react-native-date-picker';
import Color from '../../constant/Color';
import { useTranslation } from 'react-i18next';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';
import CustomDropdown from '../../components/CustomDropdown';
import { dropdownData } from '../../constant/ConstantData';
import Input from '../../components/Input';
import createStyles from '../../constant/CustomStyle';
import CustomeText from '../../components/CustomeText';
import { configureLocales, locales, setDefaultLocale } from '../../locales/localeConfig';
import Feather from 'react-native-vector-icons/Feather';



const CalendarScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState([]);
  const { t, i18n } = useTranslation();
  const modalizeRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    customer: '',
    email: '',
    contact: '',
    startDate: '',
    endDate: '',
  });

  // Date Picker States
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());




  useEffect(() => {
    configureLocales(); // Configure locales once
    const currentLanguage = i18n.language || 'en'; // Default to English if no language is set
    setDefaultLocale(currentLanguage);
  }, [i18n.language]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);

  };

  const handleAddEvent = () => {
    if (!formData.name || !formData.startDate || !formData.endDate) {
      alert("Please fill in all required fields");
      return;
    }
    const newEvent = { ...formData, date: selectedDate };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setFormData({ name: '', address: '', customer: '', email: '', contact: '', startDate: '', endDate: '' });
    modalizeRef.current?.close();
  };

  const filteredEvents = events.filter((event) => event.date === selectedDate);

  const handleDropdown = (item) => {
    console.log('selected value', item);
    setFormData({ ...formData, 'eventType': item });
  };

  const handleInput = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  return (
    <CustomSafeAreaView>
      <View style={[styles.container, Styles.container]}>


        <View style={styles.eventListContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <CustomeText style={styles.eventTitle} title={`Events on ${selectedDate || 'Selected Date'}`} />
            <TouchableOpacity
              onPress={() => modalizeRef.current?.open()}
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Feather name="plus" size={20} />
              <CustomeText title='  Add Event' />
            </TouchableOpacity>
          </View>
          <FlatList
            ListHeaderComponent={
              <>
                <View style={[styles.calendarContainer]}>
                  <Calendar
                    enableSwipeMonths={true}
                    onDayPress={handleDayPress}
                    markedDates={{
                      [selectedDate]: { selected: true, selectedColor: Color.primaryColor },
                    }}
                    theme={{
                      backgroundColor: isDarkMode ? Color.darkBackground : 'white',
                      calendarBackground: isDarkMode ? Color.darkBackground : 'white',
                      textSectionTitleColor: isDarkMode ? '#ffffff' : '#2d4150',
                      selectedDayBackgroundColor: Color.primaryColor,
                      selectedDayTextColor: '#ffffff',
                      todayTextColor: isDarkMode ? '#ffcc00' : '#00adf5',
                      dayTextColor: isDarkMode ? '#ffffff' : '#2d4150',
                      textDisabledColor: isDarkMode ? '#555555' : '#d9e1e8',
                      monthTextColor: isDarkMode ? '#ffffff' : '#2d4150',
                      arrowColor: isDarkMode ? '#ffcc00' : '#2d4150',
                      indicatorColor: isDarkMode ? '#ffcc00' : '#2d4150',
                    }}
                  />

                </View>
              </>
            }
            data={filteredEvents}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.eventItem}>
                <Text>{item.name || 'Unnamed Event'}</Text>
              </View>
            )}
            ListEmptyComponent={<Text style={styles.noEvents}>No events for this date.</Text>}
          />
        </View>

        {/* Add Event Modal */}
        <Modalize ref={modalizeRef} adjustToContentHeight>
          <View style={[styles.modalContent, Styles.boxBackgroundStyle]}>
            <CustomeText style={styles.modalTitle} title='Add Event' />
            <Input
              title="Event Name"
              placeholder="Name"
              value={formData.name}
              onChangeText={(text) => handleInput('name', text)}
            />
            <View style={styles.eventView}>
              <CustomDropdown title="Event Type" data={dropdownData} onSelect={handleDropdown} />
            </View>

            <Input
              title="Customer Name"
              placeholder="Name"
              value={formData.customer}
              onChangeText={(text) => handleInput('customer', text)}
            />
            <Input
              title="Address"
              placeholder="Location"
              value={formData.address}
              onChangeText={(text) => handleInput('address', text)}
            />

            <Input
              title="Email"
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => handleInput('email', text)}
            />
            <Input
              title="Contact Number"
              placeholder="Number"
              value={formData.contact}
              onChangeText={(text) => handleInput('contact', text)}
            />
            <View style={{}}>
              {/* Start Date */}
              <TouchableOpacity
                onPress={() => setIsStartDatePickerOpen(true)}
                style={[styles.dateInput,Styles.boxBackgroundStyle, formData.startDate && { borderColor: Color.primaryColor }]}
              >
                <Text style={styles.dateText}>{formData.startDate || 'Select Start Date'}</Text>
              </TouchableOpacity>

              {/* End Date */}
              <TouchableOpacity
                onPress={() => setIsEndDatePickerOpen(true)}
                style={[styles.dateInput, Styles.boxBackgroundStyle, { marginBottom: 20 }, formData.endDate && { borderColor: Color.primaryColor }]}
              >
                <Text style={styles.dateText}>{formData.endDate || 'Select End Date'}</Text>
              </TouchableOpacity>
            </View>


            {/* Start Date Picker */}
            <DatePicker
              modal
              open={isStartDatePickerOpen}
              date={startDate}
              mode="date"
              // mode='time'
              onConfirm={(date) => {
                setIsStartDatePickerOpen(false);
                setStartDate(date);
                setFormData({ ...formData, startDate: date.toISOString().split('T')[0] });
              }}
              onCancel={() => setIsStartDatePickerOpen(false)}
            />

            {/* End Date Picker */}
            <DatePicker
              modal
              open={isEndDatePickerOpen}
              date={endDate}
              mode="date"
              onConfirm={(date) => {
                setIsEndDatePickerOpen(false);
                setEndDate(date);
                setFormData({ ...formData, endDate: date.toISOString().split('T')[0] });
              }}
              onCancel={() => setIsEndDatePickerOpen(false)}
            />

            <TouchableOpacity style={styles.addButton} onPress={handleAddEvent}>
              <Text style={styles.addButtonText}>Add Event</Text>
            </TouchableOpacity>
          </View>
        </Modalize>
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  calendarContainer: { flex: 1, padding: 10 },
  eventListContainer: { flex: 1, padding: 10, },
  eventTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  eventItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  noEvents: { textAlign: 'center', color: '#888', marginTop: 20 },
  modalContent: { padding: 10 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  dateInput: {
    borderWidth: .5,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    margin: 15,
  
  },
  dateText: { fontSize: 16, color: '#555' },
  addButton: { backgroundColor: Color.primaryColor, padding: 15, borderRadius: 5, alignItems: 'center' },
  addButtonText: { color: '#fff', fontWeight: 'bold' },
  eventView: { paddingHorizontal: 10 }
});

export default CalendarScreen;
