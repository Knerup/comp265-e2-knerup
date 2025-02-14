import { Text, View, StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from "expo-router";


export default function AboutScreen() {

    const { world } = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Technology Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});