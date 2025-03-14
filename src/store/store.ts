import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeansData,
            CartPrice: 0,
            FavoritesList: [],
            CartList: [],
            OrderHistoryList: []
        }), {
        name: 'coffee-app',
        storage: createJSONStorage(() => AsyncStorage)
    },
    ),
);