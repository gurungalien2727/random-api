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
        // console.log('array ==> ',jsonResponse);
        setLoading(false);
        setResults(jsonResponse.results)}
        );
    }
    

      return (

        isLoading ? <Loading/> :
        <FlatList 
        data={results}
        renderItem={( result) => (

          // console.log(result.item.login.uuid)
          <User email={result.item.email} firstName={result.item.name.first} key={result.item.login.uuid} lastName={result.item.name.last} url={result.item.picture.thumbnail} navigation={navigation}/> 
        )} 
        >      
        </FlatList>
      );
    }
    export default Home;

