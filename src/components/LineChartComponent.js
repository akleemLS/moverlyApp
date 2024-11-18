import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import Colors from '../constant/Color';

const LineChartComponent = ({ data, labels }) => {
  const isDarkMode = useColorScheme() === 'dark';

  // Transform data into the required format for gifted-charts
  const chartData = data.map((value, index) => ({
    value,
    label: labels[index],
  }));

  const chartStyles = {
    yAxisTextStyle: { color: isDarkMode ? Colors.white : '#555' },
    xAxisTextStyle: { color: isDarkMode ? Colors.white : '#555' },
    dataPointLabelStyle: { color: isDarkMode ? Colors.white : '#555' },
    dataPointColor: isDarkMode ? Colors.primaryColor : '#ffa726',
    color: isDarkMode ? Colors.white : Colors.primaryColor, // Line color
    startFillColor: isDarkMode ? Colors.darker : '#fb8c00', // Gradient start color
    endFillColor: isDarkMode ? Colors.darker : '#ffa726', // Gradient end color
    gridLineColor: isDarkMode ? Colors.white : '#e0e0e0', // Grid line color
    labelColor: isDarkMode ? Colors.white : '#555', // Label color
    
  };

  // let arr =[{value:1,label:'new'},{value:90,label:'new2'},{value:1,label:'new4'},{value:100,label:'new5'}]

  return (
    <View style={styles.container}>
      <LineChart
        data={chartData}
        // data2={arr}
        width={400}
        height={220}
        yAxisTextStyle={chartStyles.yAxisTextStyle}
        xAxisTextStyle={chartStyles.xAxisTextStyle}
        color={chartStyles.color}
        thickness={3}
        hideDataPoints={false}
        dataPointsColor={chartStyles.dataPointColor}
        dataPointRadius={4}
        dataPointColor={chartStyles.dataPointColor}
        dataPointLabelStyle={chartStyles.dataPointLabelStyle}
        startFillColor={chartStyles.startFillColor}
        endFillColor={chartStyles.endFillColor}
        startOpacity={isDarkMode ? 0.4 : 0.3}
        endOpacity={isDarkMode ? 0.2 : 0.1}
        noOfSections={5}
        yAxisColor={chartStyles.gridLineColor} // Vertical grid line color
        xAxisColor={chartStyles.gridLineColor} // Horizontal grid line color
        labelColor={chartStyles.labelColor} // X-axis and Y-axis labels color
       
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default LineChartComponent;
