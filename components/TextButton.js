import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { COLORS, SIZES, FONTS } from '../constants';

export function TextButton({
    label,
    customContainerStyle,
    customLabelStyle,
    onPress,
}) {
    return (
        <TouchableOpacity
            style={{
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.green,
                ...customContainerStyle,
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                    ...customLabelStyle,
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
}
