import {View, Text, StyleSheet} from 'react-native'
export default function TaskListItem() {

    return ( 
        <View style={styles.container}>  
            <Text style={styles.text}>First task</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { /* culoare pt containerul in care afisam taskul*/
        backgroundColor: '#1D2125', 
        padding: 10,
        borderRadius: 5,
    },
    text: { /* culoare pt textul din task*/
        color: 'white', 
    }
})