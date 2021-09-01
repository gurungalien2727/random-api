import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Button, Image,ScrollView,  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from './components/User';
import UserDetailsPage from './components/UserDetailsPage';

function HomeScreen({navigation}) {

const [results,setResults] = useState([]);
const [isLoading, setLoading]= useState(true);

useEffect(()=>{
  fetch('https://randomuser.me/api/?results=8')
  .then(response => response.json())
  .then(jsonResponse =>{
    console.log('results ==> ',jsonResponse.results);
    setLoading(false);
    setResults(jsonResponse.results)}
    );
},[]);

  return (
    <ScrollView >
      {isLoading && <Text>Loading</Text>}
      {results.length!=0 && results.map((result,index)=>{
      return<> 
       <User email={result.email} firstName={result.name.first} key={index} lastName={result.name.last} url={result.picture.thumbnail} navigation={navigation}/> 
        </>    
      }) 
        }
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserDetails" component={UserDetailsPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;