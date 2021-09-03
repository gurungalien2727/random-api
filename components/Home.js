import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { ScrollView, FlatList} from 'react-native';
import Loading from './Loading';
import User from './User';

function Home({navigation}) {

    const [results,setResults] = useState([]);
    const [isLoading, setLoading]= useState(true);
    const [page, setPage]= useState(1);
    
    useEffect(()=>{
      loadUsers();
    },[]);

    
    loadUsers=()=>{
      const URL=`https://randomuser.me/api/?page=${page}&results=10&seed=alien`
      fetch(URL)
      .then(response => response.json())
      .then(jsonResponse =>{
        console.log('results ==> ',jsonResponse);
        setLoading(false);
        setResults(jsonResponse.results)}
        );

    }
    
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