import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Solmara is a land teeming with creatures both wondrous and terrifying, each shaped by the world’s fractured history and untamed magic. From the floating ruins of the Shattered Expanse to the burning heart of the Emberwild, beasts roam freely, some as remnants of the old world, others as forces of nature beyond mortal comprehension. These creatures are not mere animals; they are living echoes of Solmara’s past, each possessing unique traits, elemental affinities, and, in some cases, intelligence that rivals or surpasses humanity’s own.
            </Text>

            <Text style={styles.text}>
            Among the most revered are the Dragons, ancient and powerful beings that have witnessed the rise and fall of civilizations, and the Phoenix, a fiery embodiment of rebirth and change. Yet, they are not alone in Solmara’s vast wilderness. Other creatures, some mechanical remnants of the Aetherian Empire and others born from the raw energies of the world, lurk in the shadows, waiting for those brave or foolish enough to seek them out. To understand the creatures of Solmara is to understand the land itself, for they are as much a part of its destiny as those who walk upon it.
            </Text>

            <Link href="creatures/Dragons" style={styles.button}>
                Dragons
            </Link>
            <Link href="creatures/Phoenix" style={styles.button}>
                Phoenix
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        padding: 30, 
    },
    text: {
        color: '#fff',
        paddingTop: 10,
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
