import { Stack } from 'expo-router';

export default function AboutLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Creatures' }} />
            <Stack.Screen name="Dragons" options={{ title: 'Dragons' }} />
            <Stack.Screen name="Phoenix" options={{ title: 'Phoenix' }} />
        </Stack>
    );
}
