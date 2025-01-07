import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../theme/theme';
import { Image } from '@/components/ui/image';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;
interface CoffeeCardProps {
    id: string;
    index: number;
    type: string;
    roasted: string;
    imagelink_square: string;
    name: string;
    special_ingredient: string;
    average_rating: number;
    price: any;
    buttonPressHandler: any;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
    id,
    index,
    type,
    roasted,
    imagelink_square,
    name,
    special_ingredient,
    average_rating,
    price,
    buttonPressHandler,
}) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        >
            <ImageBackground source={imagelink_square}
                className={`w-[${CARD_WIDTH}px] h-[${CARD_WIDTH}px] rounded-[20px] mb-[15px] overflow-hidden`}></ImageBackground>

        </LinearGradient>
    )
}

export default CoffeeCard

const styles = StyleSheet.create({})