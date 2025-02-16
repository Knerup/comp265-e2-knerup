import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams, Link } from "expo-router";


export default function AboutScreen() {

    const { world } = useLocalSearchParams();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>
                    The Mythical Dragons
                </Text>

                <Text style={styles.text}>
                    In the age before the Sundering, the Dragons of {world} were sovereigns of the wilds, ancient beings whose existence was as much a force of nature as the rising sun. They were not born in nests nor hatched in broods like lesser creatures but were shaped by the world itself, molded by the land, sky, and sea. They are not mere beasts; they are Solmara’s memory given form, the living remnants of an age when the world was untamed and undisturbed by mortal ambition.
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://artsphere.org/wp-content/uploads/2018/04/pixabay-dragon-8780168_640-.jpg',
                        }}>
                    </Image>
                </View>

                <Text style={styles.text}>
                    Unlike many creatures of Solmara, Dragons do not reproduce in a traditional sense. They are believed to emerge from the raw elemental forces of the land, given form through centuries of accumulation. A Fire Drake does not simply hatch—it is forged in the heart of a volcano, its body tempered by centuries of slumber beneath molten rock. A Storm Serpent is not born—it is the coalescence of a thousand tempests, an amalgamation of lightning and wind given sentience.
                </Text>

                <Text style={styles.text}>
                    This unique nature makes each Dragon singular in its existence. No two are exactly alike, for each is shaped by its environment and the passage of time. Some grow wise, becoming watchers of the world, while others become avatars of destruction, embodiments of their domain’s fury. Dragons do not age in the way that mortals do; they simply persist, growing in power and knowledge until the world itself either consumes them or they choose to fade into myth.
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://1001dragons.com/wp-content/uploads/2022/04/dragon-heroic-fantasy-800-01-696x377.jpg',
                        }}>
                    </Image>
                </View>


                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d26a519-f4a9-4786-aee3-512857c0481b/dg78vb5-728865aa-f0a3-4c5a-847f-8051b9aa2bf3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkMjZhNTE5LWY0YTktNDc4Ni1hZWUzLTUxMjg1N2MwNDgxYlwvZGc3OHZiNS03Mjg4NjVhYS1mMGEzLTRjNWEtODQ3Zi04MDUxYjlhYTJiZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5-Znz1bvDdRKqiMoq6K__dKo46mHCRUAneTpGJzwq6A',
                        }}>
                    </Image>
                </View>
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
    }
});
