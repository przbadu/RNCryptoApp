import React from 'react';
import { Image, View, Text } from 'react-native';

import { COLORS, FONTS } from '../constants';

export default function TabBarIcon({ icon, label, focused }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={icon}
                resizeMode='contain'
                style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? COLORS.primary : COLORS.black,
                }}
            />
            <Text
                style={{
                    color: focused ? COLORS.primary : COLORS.black,
                    ...FONTS.body5,
                    textTransform: 'uppercase',
                }}
            >
                {label}
            </Text>
        </View>
    );
}
