import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

const [data,setData] = useState([]);
const [isLoading, setLoading]= useState(true);

useEffect(()=>{
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(d =>{
    console.log('results ==>',d.results);
    setLoading(false);
    setData(d.results)}
    );
},[]);



  return (
    <View style={styles.container}>
      {isLoading && <Text>Loading</Text>}
      {data.length!=0 &&
      (<><Text>{data[0].email} {data[0].picture.medium}</Text>
        <Image 
        source={{
          uri: data[0].picture.thumbnail,

        }}
        style={{ width: 305, height: 159 }}></Image>
    
      </>
       )    
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
