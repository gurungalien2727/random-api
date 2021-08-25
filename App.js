import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

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
    <View style={styles.container}>
      {isLoading && <Text>Loading</Text>}
     
      {data.length!=0 && data.map((d)=>{
      
      return<>
        
        <Text>{d.name.first} {d.name.last}</Text>
        <Text>{d.email}</Text>
          <Image 
          source={{
            uri: d.picture.thumbnail,
  
          }}
          style={{ width: 305, height: 159 }}></Image>
           <Button
          title="Another User"
          color="#f194ff"
          onPress={() => setCount(count+1) }
        />
        </>    
      })
        
        }
      <StatusBar style="auto" />
    </View>
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
