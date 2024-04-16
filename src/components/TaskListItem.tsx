import {View, Text, StyleSheet, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {Link} from 'expo-router';

export default function TaskListItem({task}) {

    return ( 
        /* navigate to that thing we click on */
        <Link href={`/${task.id}`} asChild>
            <Pressable  style={styles.container}>  
                <Text style={styles.text}>{task.description}</Text>
    
            <AntDesign name="close" size ={16} color="gray" />
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: { /* culoare pt containerul in care afisam taskul*/
        backgroundColor: '#1D2125', 
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: { /* culoare pt textul din task*/
        color: 'white', 
        fontSize: 16,
    }
})