import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { ScrollView} from 'react-native';
import Loading from './Loading';
import User from './User';

function Home({navigation}) {

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
          {isLoading && <Loading/>}
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

    export default Home;