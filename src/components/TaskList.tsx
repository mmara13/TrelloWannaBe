import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native'
import TaskListItem from './TaskListItem';
import {useState} from 'react';

export default function TaskList(){
    const [tasks, setTasks] = useState([
        {description : 'First task'},
        {description : 'Second task'},
    ]); 

    const [newTask, setNewTask] = useState('') /*starea inputului*/

    const createTask = () => {
        setTasks([...tasks, {description: newTask}]);
        setNewTask(''); /*resetam sa fie iar gol*/
    };
    return (
        <View style={styles.container}>
            <Text style ={styles.title}
            >
                Todo
            </Text>

            {/*lista de taskuri*/}

            <FlatList 
                data={tasks}
                contentContainerStyle={{ gap: 5}}
                renderItem={({item }) => <TaskListItem task={item} />}
            />
               
            {/*input pt task nou*/}
            <TextInput 
                value ={newTask}
                onChangeText={setNewTask}
                placeholder="New Task" 
                placeholderTextColor="gray" 
                style ={styles.input}
            />
            <Button title = "Add task" onPress={createTask}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#101112', 
        padding: 10, 
        borderRadius: 5, 
        gap: 5
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical:10,
    },
    input: {
        color: 'white', 
        padding: 10,
        backgroundColor: '#1D2125', 
        borderRadius: 5,
    },

})