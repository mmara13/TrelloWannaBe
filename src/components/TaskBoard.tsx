import {View, StyleSheet, SafeAreaView} from 'react-native';
import TaskList from './TaskList';
import { LinearGradient } from 'expo-linear-gradient';

export default function TaskBoard (){
    return (
      <View style={{padding: 10, flex: 1}}>
        <LinearGradient
            // Background Linear Gradient
            colors={['#b120b7', '#f67240']}
            style={StyleSheet.absoluteFill}
        />
        <SafeAreaView>
            <TaskList />
        </SafeAreaView>
      </View>
    );
}