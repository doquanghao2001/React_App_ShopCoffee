import React from 'react';
import { View } from 'react-native';
import { Image } from '@/components/ui/image';
import { COLORS } from '@/src/theme/theme';

const ProfilePic = () => {
    return (
        <View
            className="h-9 w-9 rounded-xl border-2 flex items-center justify-center overflow-hidden border-secondary-grey-hex"
        >
            <Image
                source={require('../assets/app_images/avatar.png')}
                className="h-9 w-9" alt="avatar"
            />
        </View>
    );
};

export default ProfilePic;
