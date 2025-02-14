import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

export default function AboutScreen() {

    const { world } = useLocalSearchParams();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.header}>
                    Creatures of Solmara: Beasts of Myth
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://w0.peakpx.com/wallpaper/199/999/HD-wallpaper-fantasy-dragon-creature-dark.jpg',
                        }}>
                    </Image>
                </View>

                <Text style={styles.text}>
                    Solmara is a land teeming with creatures both wondrous and terrifying, each shaped by the world’s fractured history and untamed magic. From the floating ruins of the Shattered Expanse to the burning heart of the Emberwild, beasts roam freely, some as remnants of the old world, others as forces of nature beyond mortal comprehension. These creatures are not mere animals; they are living echoes of Solmara’s past, each possessing unique traits, elemental affinities, and, in some cases, intelligence that rivals or surpasses humanity’s own.
                </Text>

                <Text style={styles.text}>
                    Among the most revered are the Dragons, ancient and powerful beings that have witnessed the rise and fall of civilizations, and the Phoenix, a fiery embodiment of rebirth and change. Yet, they are not alone in Solmara’s vast wilderness. Other creatures, some mechanical remnants of the Aetherian Empire and others born from the raw energies of the world, lurk in the shadows, waiting for those brave or foolish enough to seek them out. To understand the creatures of Solmara is to understand the land itself, for they are as much a part of its destiny as those who walk upon it.
                </Text>

                <Link href="creatures/Dragons?world=Solmara" style={styles.button}>
                    Learn More About The Dragons
                </Link>

                <Link href="creatures/Phoenix?world=Solmara" style={styles.button}>
                    Learn More About The Phoenix
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
