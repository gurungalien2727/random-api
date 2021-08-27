import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Button, Image,ScrollView,  StyleSheet, Text, View } from 'react-native';
import User from './components/User';

export default function App() {

const [data,setData] = useState([]);
const [count, setCount] = useState(0);
const [isLoading, setLoading]= useState(true);

useEffect(()=>{
  fetch('https://randomuser.me/api/?results=100')
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
       <User key={i}firstName={d.name.first} lastName={d.name.last} email={d.email} url={d.picture.thumbnail}/>  
        </>    
      }) 
        }
      <StatusBar style="auto" />
    </ScrollView>
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
