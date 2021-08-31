import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Button, Image,ScrollView,  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from './components/User';

function HomeScreen({navigation}) {

const [data,setData] = useState([]);
const [count, setCount] = useState(0);
const [isLoading, setLoading]= useState(true);

useEffect(()=>{
  fetch('https://randomuser.me/api/?results=6')
  .then(response => response.json())
  .then(d =>{
    console.log('results ==>',d.results);
    setLoading(false);
    setData(d.results)}
    );
},[count]);

  return (
    <ScrollView >
      {isLoading && <Text>Loading</Text>}
      {data.length!=0 && data.map((d,i)=>{
      return<> 
       <User key={i} firstName={d.name.first} lastName={d.name.last} email={d.email} url={d.picture.thumbnail}/> 
       <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          name:d.name.first,
          email:d.email
        })}
      /> 
        </>    
      }) 
        }
      <StatusBar style="auto" />
    </ScrollView>
  );
}

function DetailsScreen({route}) {
  const {name,email} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{name}</Text>
      <Text>{email}</Text>

    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
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