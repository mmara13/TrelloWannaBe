import {Text} from 'react-native';
import {Slot, Stack} from 'expo-router'; 
import { StatusBar } from 'expo-status-bar';
import {ThemeProvider, DarkTheme} from '@react-navigation/native';
import Realm from '../providers/Realm';


export default function RootLayout () {
    return (
        <ThemeProvider value={DarkTheme}>
            {/*randeaza codul paginii pe care suntemad*/}
            <Realm>
                <Stack screenOptions={{}}></Stack>
            </Realm>
            
            <StatusBar style="light" />
        </ThemeProvider>
    );
}