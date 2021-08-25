import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {

const [data,setData] = useState([]);
const [count, setCount] = useState(0);
const [isLoading, setLoading]= useState(true);

useEffect(()=>{
  fetch('https://randomuser.me/api/?results=3')
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
      <Text>djdi</Text>
      {data.length!=0 && 
      console.log(data.length)

      //   <>
      //   <Text>{data[0].name.first} {data[2].name.last}</Text>
      //  <Text>{data[1].email}</Text>
       
      //     <Image 
      //     source={{
      //       uri: data[0].picture.thumbnail,
  
      //     }}
      //     style={{ width: 305, height: 159 }}></Image>
      //      <Button
      //     title="Another User"
      //     color="#f194ff"
      //     onPress={() => setCount(count+1) }
      //   />
      //   </>    
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
