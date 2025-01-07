import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import { COLORS } from '@/src/theme/theme'
import { BlurView } from '@react-native-community/blur'
import CustomIcon from '../components/CustomIcon'
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground: () => (
                <BlurView
                    overlayColor=''
                    blurAmount={10}
                    style={styles.BlurViewStyles}
                />
            )
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcon name='home'
                        size={24}
                        color={
                            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                        } />
                )
            }} />
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcon name='cart'
                        size={24}
                        color={
                            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                        } />
                )
            }} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcon name='like'
                        size={24}
                        color={
                            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                        } />
                )
            }} />
            <Tab.Screen name="History" component={OrderHistoryScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcon name='bell'
                        size={24}
                        color={
                            focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                        } />
                )
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 89,
        paddingTop: 10,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        borderTopColor: 'transparent',
        elevation: 0,
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})