import { FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import createStyles from '../../../constant/CustomStyle';
import CustomHeader from '../../../components/CustomHeader';
import { movingData } from '../../../constant/ConstantData';
import MovingBoxItem from '../../../components/MovingBoxItem';
import { useNavigation } from '@react-navigation/native';
import CustomeText from '../../../components/CustomeText';

const MovingMaterial = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Styles = createStyles(isDarkMode);
  const navigation = useNavigation();
  const [movingMaterialData, setMovingMaterailData] = useState([]);


    useEffect(()=>{
        let moreData = Array.from({length:10},(_,i)=>({
            id:movingData.length+1,
            name: `Tool cabinet${movingMaterialData.length + i + 1}`,
            description: `0.300m3${movingMaterialData.length + i + 1}`,
            price: `${100 * (movingMaterialData.length + i + 1)}`, 
        }))
        let final = [...moreData]
        
        setMovingMaterailData(final)
    },[])
  const handleClick = (item) => {
    console.log('navigate to edit form', item);
    navigation.navigate('EditMovingMaterail', { data: item });
  };

  return (
    <View style={Styles.container}>
      <CustomHeader placeholder="Search Moving Material Here!" />
      <FlatList
        data={movingMaterialData}
        renderItem={({ item }) => <MovingBoxItem item={item} onPress={(item) => handleClick(item)} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <CustomeText title ="Data is not available" style={styles.emptyText}/>
          </View>
        }
        contentContainerStyle={
          movingMaterialData?.length === 0 ? styles.fullHeight : null
        }
      />
    </View>
  );
};

export default MovingMaterial;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
  },
  fullHeight: {
    flexGrow: 1, // Ensures content fills the parent height
    justifyContent: 'center',
  },
});
