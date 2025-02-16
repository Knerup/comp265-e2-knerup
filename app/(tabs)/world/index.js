import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { useLocalSearchParams, Link } from "expo-router";


export default function Index() {

    const { world } = useLocalSearchParams();


    return (
        <ScrollView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.header}>
                    Solmara: The GhatGPt Created World
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://imgcdn.stablediffusionweb.com/2024/12/20/0b7b69dd-1a23-4805-b2be-af25c6a5575b.jpg',
                        }}>
                    </Image>
                </View>

                <Text style={styles.text}>
                    Solmara is a world caught between the echoes of its past and the uncertainty of its future. Once a thriving land of boundless knowledge and ambition, it now stands as a fractured realm where nature and ancient power reclaim what was lost. The world’s very essence is shaped by two dominant forces—remnants of the Aetherian Empire, whose mastery of Aetherium once pushed the boundaries of technology, and the unbridled wilds of The Emberwild, where primal magic burns ever bright.
                </Text>

                <Text style={styles.text}>
                    Legends speak of Solmara as a land born from conflict, a battleground between the celestial beings of creation and destruction. When the Aetherians sought to wield power beyond their control, the world itself revolted, sundering their empire and leaving behind a realm of floating ruins and volatile landscapes. Now, the scattered peoples of Solmara live in the shadows of that great fall, scavenging the knowledge of the past while struggling against the forces that seek to consume them—whether the relentless march of forgotten machines, the wrath of vengeful Dragons, or the unpredictable rebirth of the Phoenix. Solmara is a world where history refuses to remain buried, and the stories of its past shape the destinies of those who dare to walk its lands.
                </Text>

                <Link href="world/Geography?world=Solmara" style={styles.button}>
                    Learn More About Solmara's Geography
                </Link>

                <Link href="world/Technology?world=Solmara" style={styles.button}>
                    Learn More About Solmara's Technology
                </Link>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        padding: 30,
        textAlign: 'center',
    },
    subContainer: {
        paddingBottom: 60,
    },
    text: {
        color: '#fff',
        paddingTop: 10,
    },
    button: {
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000',
        backgroundColor: 'lightblue',
        alignSelf: 'center',
        padding: 15, 
        margin: 10,
        width: 250,
        textAlign: 'center',
    },
    image: {
        height: 250,
        width: 250,
        alignSelf: 'center',
    },
    header: {
        color: '#fff',
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
