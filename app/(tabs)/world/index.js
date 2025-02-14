import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Solmara is a world caught between the echoes of its past and the uncertainty of its future. Once a thriving land of boundless knowledge and ambition, it now stands as a fractured realm where nature and ancient power reclaim what was lost. The world’s very essence is shaped by two dominant forces—remnants of the Aetherian Empire, whose mastery of Aetherium once pushed the boundaries of technology, and the unbridled wilds of The Emberwild, where primal magic burns ever bright.
            </Text>
            <Text style={styles.text}>
                Legends speak of Solmara as a land born from conflict, a battleground between the celestial beings of creation and destruction. When the Aetherians sought to wield power beyond their control, the world itself revolted, sundering their empire and leaving behind a realm of floating ruins and volatile landscapes. Now, the scattered peoples of Solmara live in the shadows of that great fall, scavenging the knowledge of the past while struggling against the forces that seek to consume them—whether the relentless march of forgotten machines, the wrath of vengeful Dragons, or the unpredictable rebirth of the Phoenix. Solmara is a world where history refuses to remain buried, and the stories of its past shape the destinies of those who dare to walk its lands.
            </Text>
            <Link href="world/Geography" style={styles.button}>
                Geography
            </Link>
            <Link href="world/Technology" style={styles.button}>
                Technology
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
        textAlign: 'center',
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
