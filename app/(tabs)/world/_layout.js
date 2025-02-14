import { Stack } from 'expo-router';

export default function AboutLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Solmara' }} />
            <Stack.Screen name="Geography" options={{ title: 'Geography' }} />
            <Stack.Screen name="Technology" options={{ title: 'Technology' }} />
        </Stack>
    );
}
