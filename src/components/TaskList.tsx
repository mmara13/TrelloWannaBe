import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import TaskListItem from './TaskListItem';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: '123', description: 'First task' },
    { id: '67', description: 'Second task' },
  ]);

  const [newTask, setNewTask] = useState('');

  const createTask = () => {
    if (newTask.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, { id: Date.now().toString(), description: newTask }]);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>

      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <TaskListItem task={item} onDelete={deleteTask} />}
      />

      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New Task"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <Button title="Add task" onPress={createTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#101112',
    padding: 10,
    borderRadius: 5,
    gap: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  input: {
    color: 'white',
    padding: 10,
    backgroundColor: '#1D2125',
    borderRadius: 5,
  },
});
