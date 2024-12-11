import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Color from '../../constant/Color';
import { useTranslation } from 'react-i18next';
import CustomSafeAreaView from '../../components/CustomSafeAreaView';


// Define locales for German and English
LocaleConfig.locales['de'] = {
  monthNames: [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ],
  monthNamesShort: [
    'Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni',
    'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'
  ],
  dayNames: [
    'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
  ],
  dayNamesShort: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  today: 'Heute'
};

LocaleConfig.locales['en'] = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  dayNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Today'
};

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState([
    { date: '2024-12-09', title: 'Meeting with client' },
    { date: '2024-12-10', title: 'Project deadline' },
    { date: '2024-12-11', title: 'Team lunch' },
  ]);

  const { t, i18n } = useTranslation();

  // Update LocaleConfig whenever the language changes
  useEffect(() => {
    const currentLanguage = i18n.language || 'en'; // Default to English
    LocaleConfig.defaultLocale = currentLanguage;
  }, [i18n.language]);

  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString().slice(0, 7));

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleMonthChange = (month) => {
    console.log('month click')
    setCurrentMonth(month.dateString.slice(0, 7));
  };

  const filteredEvents = events.filter(event => event.date === selectedDate);



  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        {/* Calendar in Top Half */}
        <View style={styles.calendarContainer}>

          <Calendar

            enableSwipeMonths={true}
            current={currentMonth}
            onDayPress={handleDayPress}
            onMonthChange={handleMonthChange}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: Color.primaryColor },
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#dd99ee'
            }}
          />
        </View>

        {/* Event List in Bottom Half */}
        <View style={styles.eventListContainer}>
          <Text style={styles.eventTitle}>Events on {selectedDate || 'Selected Date'}</Text>
          <FlatList
            data={filteredEvents}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.eventItem}>
                <Text>{item.title}</Text>
              </View>
            )}
            ListEmptyComponent={<Text style={styles.noEvents}>No events for this date.</Text>}
          />
        </View>
      </View>
    </CustomSafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  calendarContainer: { flex: 1, padding: 10 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthName: { fontSize: 18, fontWeight: 'bold' },
  arrow: { fontSize: 24, fontWeight: 'bold' },
  eventListContainer: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  eventTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  eventItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  noEvents: { textAlign: 'center', color: '#888', marginTop: 20 },
});

export default CalendarScreen;
