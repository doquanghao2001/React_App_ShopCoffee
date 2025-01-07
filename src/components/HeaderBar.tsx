import React from 'react';
import { Text, View } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '@/src/theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
    return (
        <View className="p-6 flex-row items-center justify-between">
            <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
            <Text className="text-white text-xl font-PoppinsSemiBold">
                {title}
            </Text>
            <ProfilePic />
        </View>
    );
}

export default HeaderBar;
