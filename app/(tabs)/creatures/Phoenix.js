import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { useLocalSearchParams, Link } from "expo-router";


export default function AboutScreen() {

    const { world } = useLocalSearchParams();

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.header}>
                    The Phoenix of {world}: Embers of Eternity
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://phoenixcreativearts.co.uk/wp-content/uploads/2021/09/ae064181a2f68f13edc5e5d08276f95d_cropped_optimized.jpg',
                        }}>
                    </Image>
                </View>

                <Text style={styles.text}>
                    In a world shaped by destruction and loss, the Phoenix stands as a paradox—an entity of both annihilation and renewal, a creature that embodies the eternal cycle of death and rebirth. Unlike the Dragons, who are bound by time and memory, the Phoenix exists outside the constraints of history, its presence felt in moments of great upheaval and change. It is not a ruler, not a guardian, but something far older and more elusive—a force that does not answer to the will of mortals or gods.
                </Text>

                <Text style={styles.text}>
                    The Phoenix is not a species, nor is it a singular entity. It is an event, a phenomenon, an occurrence woven into the very fabric of Solmara. Where it comes from, none can say, for no record exists of its birth. Some scholars believe that there has only ever been one Phoenix, an eternal being that has burned and risen for eons. Others claim that new Phoenixes emerge from the great infernos of the Emberwild, born from volcanic eruptions that shake the very core of the world. There are even whispers of Phoenixes slumbering beneath the ruined cities of the Shattered Expanse, their fire lying dormant within the relics of a lost age.
                </Text>

                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ac44cbc5-2c57-4578-80b5-3954d4d75180/dg8k9w2-23dd468c-4f33-4591-be19-f13c63d389b4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FjNDRjYmM1LTJjNTctNDU3OC04MGI1LTM5NTRkNGQ3NTE4MFwvZGc4azl3Mi0yM2RkNDY4Yy00ZjMzLTQ1OTEtYmUxOS1mMTNjNjNkMzg5YjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5EYZBpk1sF5mrVfL0TavI6UruPDuR1O0cXDeIc3u3q4',
                        }}>
                    </Image>
                </View>

                <Text style={styles.text}>
                    Unlike any other creature in Solmara, the Phoenix does not die—it transforms. Its body is consumed in flame, its very essence reduced to ash, only to rise anew, untouched by the weight of its past. But this rebirth is not without consequence. With each cycle, the Phoenix sheds its former self, forgetting what once was, its memories lost in the fire. To the Phoenix, time is an endless loop of destruction and renewal, a cycle it neither resists nor embraces. It simply is.
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
    }
});
