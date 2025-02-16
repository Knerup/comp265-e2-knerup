import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, Link } from "expo-router";


export default function AboutScreen() {

    const { world } = useLocalSearchParams();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>
                    Geography of {world}
                </Text>

                <Text style={styles.text}>
                    Solmara is a world of contrast. The Shattered Expanse was once home to towering cities and advanced technology, but a cataclysm fractured the land, leaving behind floating islands, deep chasms, and ruins filled with strange, humming artifacts. The air crackles with latent energy, and pockets of gravity-defying rock drift through the sky, remnants of a lost era. Travelers in the Expanse often stumble upon machines still running centuries after their creators vanished, some offering great knowledge, others unleashing unknown dangers.
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://images.stockcake.com/public/2/b/8/2b824769-873d-4e20-bc8d-f04fc3cacfc7_large/floating-crystal-paradise-stockcake.jpg',
                        }}>
                    </Image>
                </View>

                
                <Text style={styles.text}>
                To the south, the Emberwild is a land of endless fire and molten rivers, shaped by ancient volcanic activity and pulsing with raw elemental energy. Here, towering obsidian spires rise from the earth, serving as nesting grounds for the Phoenix, while Dragons dominate the skies, ruling over their charred territories. The land itself seems alive, with unpredictable eruptions and fiery storms that make it nearly uninhabitable for most mortals.
                </Text>
                
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://robertwimer.com/wp-content/uploads/2024/12/Hell.webp',
                        }}>
                    </Image>
                </View>

                                
                <Text style={styles.text}>
                And yet, even these places are not the true horror of Solmara. The real terror lies in what lurks beneath. In the deepest chasms of the Expanse, beneath the molten rivers of the Emberwild, something stirs—something vast, patient, and utterly alien. The Sundering may have shattered the land, but it did not bury all its sins. Some believe the catastrophe was not an accident but an act of desperation—an attempt to seal something away. And if that is true, then the world is not merely broken... it's a ticking clock.
                </Text>
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
        paddingBottom: 10, 
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
    },
});
