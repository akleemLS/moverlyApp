// LineChartComponent.js
import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LineChartComponent = ({ data, labels, yAxisLabel = '', yAxisSuffix = '' }) => {
  return (
    <View>
      <LineChart
        data={{
          labels: labels, // x-axis labels
          datasets: [
            {
              data: data, // y-axis data points
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // Full width of the screen
        height={220}
        yAxisLabel={yAxisLabel}
        yAxisSuffix={yAxisSuffix}
        bezier
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // Number of decimal places for y-axis
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default LineChartComponent;
