import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
    createBottomTabNavigator,
    BottomTabBar,
} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

import { Home } from '../screens';
import { COLORS, FONTS, icons } from '../constants';
import TabBarIcon from './TabBarIcon';

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ children, onPress }) => {
    console.log(children);
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow,
            }}
            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: 'transparent',
                    height: 100,
                },
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            label='Home'
                            icon={icons.home}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Portfolio'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            label='Portfolio'
                            icon={icons.pie_chart}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Transaction'
                component={Home}
                options={{
                    tabBarIcon: () => {
                        <Image
                            source={icons.transaction}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.white,
                            }}
                        />;
                    },
                    tabBarButton: (props) => <TabBarCustomButton {...props} />,
                }}
            />
            <Tab.Screen
                name='Prices'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            label='Prices'
                            icon={icons.line_graph}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Settings'
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            label='Settings'
                            icon={icons.settings}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default Tabs;
