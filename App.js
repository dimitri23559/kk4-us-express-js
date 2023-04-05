import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Divider, Layout, Text, TopNavigation, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import HomeScreen from './screens/HomeScreen';
import MateriScreen from './screens/MateriScreen';
import QuizScreen from './screens/QuizScreen';
import ReviewScreen from './screens/ReviewScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './navigation/BottomNav';
import QuizSoalScreen from './screens/QuizSoalScreen';
import DetailMateriScreen from './screens/DetailMateriScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Home" component={BottomNav} />
            <Stack.Screen name="Soal" component={MateriScreen} />
            <Stack.Screen name="QuizSoal" component={QuizSoalScreen} />
            <Stack.Screen name="ReviewScore" component={ReviewScreen} />
            <Stack.Screen name='ReviewMateri' component={DetailMateriScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    backgroundColor: 'blue'
  }
});