import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, Link } from "expo-router";


export default function AboutScreen() {

    const { world } = useLocalSearchParams();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>
                    Technology of {world}
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://i0.wp.com/zainahyousef.com/wp-content/uploads/2024/09/Author-Blog-Covers-2024-09-27T081538.640.png?fit=1024%2C576&ssl=1',
                        }}>
                    </Image>
                </View>

                <Text style={styles.text}>
                    Before the cataclysm, Solmara was ruled by the Aetherian Empire, a civilization that blended magic with advanced machinery. They harnessed Aetherium, a rare energy source found deep within the planet, to power their cities, weapons, and even artificial lifeforms. However, their pursuit of limitless power led to the Sundering, a disaster that shattered the empire, fractured the land, and caused their greatest constructs to either go dormant or turn against them.
                </Text>

                <Text style={styles.text}>
                    Now, remnants of their technology still function, scattered across the world. Some are revered as divine relics, while others are feared as haunted machines. Scholars and adventurers seek to rediscover the lost knowledge of Aetherium, though many believe its reckless use could trigger another catastrophe. In the Emberwild, however, technology was always secondary to raw magical forces, and the creatures that dwell there have long outlived any mortal empire.
                </Text>

                <Text style={styles.text}>
                But the greatest fear is not what has survived. It is what waits to be found. Deep within the ruins, beneath layers of collapsed stone and forgotten passageways, there are vaults that remain sealed—silent tombs filled with secrets that should never be uncovered. The Aetherians did not just destroy themselves. They tried to hide something. And with each passing year, as the barriers between past and present weaken, as lost machines flicker back to life, the question is no longer if their secrets will be revealed.
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