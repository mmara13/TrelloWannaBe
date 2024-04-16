import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function TaskListItem({ task, onDelete }) {
  return (
    <Link href={`/${task.id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.text}>{task.description}</Text>
        <Pressable onPress={() => onDelete(task.id)}>
          <AntDesign name="close" size={16} color="gray" />
        </Pressable>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2125',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
});
