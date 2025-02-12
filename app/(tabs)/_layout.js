import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: 'World History',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'earth-sharp' : 'earth-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Creatures',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'paw-sharp' : 'paw-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
