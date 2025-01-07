import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SPACING } from '@/src/theme/theme';
import CustomIcon from './CustomIcon';

interface GradientBGIconProps {
    name: string;
    color: string;
    size: number;
}

const GradientBGIcon: React.FC<GradientBGIconProps> = ({ name, color, size }) => {
    return (
        <View
            className="border-2 rounded-xl bg-secondary-dark-grey overflow-hidden flex items-center justify-center border-secondary-grey-hex"
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
                className="h-9 w-9 flex items-center justify-center"
            >
                <CustomIcon name={name} color={color} size={size} />
            </LinearGradient>
        </View>
    );
};

export default GradientBGIcon;
