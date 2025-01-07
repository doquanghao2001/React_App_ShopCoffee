import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '@/src/theme/theme';
import { ScrollView } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import CoffeeCard from '../components/CoffeeCard';

const getCategoriesFormData = (data: any) => {

  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == undefined) {
      temp[data[i].name] == 1;
    } else {
      temp[data[i].name]++;
    }
  }
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
}

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeelist = data.filter((item: any) => item.name == category);
    return coffeelist;
  }
}

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, setCategories] = useState(getCategoriesFormData(CoffeeList));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(getCoffeeList(categoryIndex.category, CoffeeList));

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View className='flex flex-1 bg-primary-black-hex'>
      <StatusBar className='bg-primary-black-hex' />
      <ScrollView className='flex flex-grow' showsVerticalScrollIndicator={false}>

        {/*App Header*/}

        <HeaderBar title='Home Screen' />
        <Text className='pl-6 text-white text-3xl font-PoppinsSemiBold'>
          Find the best{'\n'}coffee for you
        </Text>

        {/*Search Input*/}

        <View className='flex flex-row items-center m-7 rounded-3xl bg-primary-dark-grey-hex'>
          <TouchableOpacity onPress={() => {

          }}>
            <CustomIcon name='search'
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
              style={styles.InputIcon}
            />
          </TouchableOpacity>
          <TextInput placeholder='Find Your Coffee...'
            value={searchText}
            onChangeText={text => setSearchText(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            className='flex flex-1 h-[60px] font-PoppinsMedium text-sm text-white'
          />
        </View>

        {/* Category Scroller */}

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='px-[20px] mb-5'>
          {categories.map((data, index) => (
            <View key={index.toString()} className='px-[15px]'>
              <TouchableOpacity className='items-center'
                onPress={() => {
                  setCategoryIndex({ index: index, category: categories[index] })
                  setSortedCoffee([...getCoffeeList(categories[index], CoffeeList)])
                }}
              >
                <Text className={`font-PoppinsSemiBold text-base ${categoryIndex.index === index ? 'text-primary-orange-hex' : 'text-primary-light-grey-hex'}`}>
                  {data}
                </Text>
                {categoryIndex.index == index ?
                  <View className='h-[10px] w-[10px] rounded-[10px] bg-primary-orange-hex' />
                  :
                  <></>}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee Flatlist */}

        <FlatList horizontal showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          keyExtractor={item => item.id}
          className='gap-5 px-[30] py-5'
          renderItem={({ item }) => {
            return <TouchableOpacity>
              <CoffeeCard
                id={item.id}
                index={item.index}
                type={item.type}
                roasted={item.roasted}
                imagelink_square={item.imagelink_square}
                name={item.name}
                special_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                price={item.price}
                buttonPressHandler={item.buttonPressHandler}
              />
            </TouchableOpacity>
          }}
        />

      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  InputIcon: {
    marginHorizontal: SPACING.space_20,
  },
})