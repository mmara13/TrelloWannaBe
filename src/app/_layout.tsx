import {Text} from 'react-native';
import {Slot, Stack} from 'expo-router'; 
import { StatusBar } from 'expo-status-bar';
import {ThemeProvider, DarkTheme} from '@react-navigation/native';

export default function RootLayout () {
    return (
        <ThemeProvider value={DarkTheme}>
            {/*render the code of the page we are on*/}
            <Stack screenOptions={{}}></Stack>

            <StatusBar style="light" />
        </ThemeProvider>
    );
}