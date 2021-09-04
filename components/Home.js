import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Button, FlatList} from 'react-native';
import Loading from './Loading';
import User from './User';


function Home({navigation}) {

    const [results,setResults] = useState([]);
    const [isLoading, setLoading]= useState(true);
    const [page, setPage]= useState(1);
    const [loadingMore, setLoadingMore] =useState(false);
    
    useEffect(()=>{
      loadUsers();
    },[page]);

    loadUsers=()=>{

      const URL=`https://randomuser.me/api/?page=${page}&results=10&seed=alien`
      fetch(URL)
      .then(response => response.json())
      .then(jsonResponse =>{
        setLoading(false);
        setLoadingMore(false);
        arr= page==1?jsonResponse.results:[...results, ...jsonResponse.results];
        setResults(arr);
      }
        );
    }

    loadMoreUsers=()=>{
      
      setPage(page=>page+1);
      setLoadingMore(true);
    }

    console.log(page)
      return (

        isLoading ? <Loading/> :
        <>
        <FlatList
        data={results}
        keyExtractor= {(result)=> result.login.uuid}
        renderItem={( result) => (
         //console.log(result.item.login.uuid) 
         <User email={result.item.email} firstName={result.item.name.first} key={result.item.login.uuid} lastName={result.item.name.last} url={result.item.picture.thumbnail} navigation={navigation}/> 
        )} 
        onEndReached={() => loadMoreUsers ()}
        onEndReachedThreshold={0.2}>  
        </FlatList>
        {loadingMore && <Loading/>}
        </>
      );
    }
    export default Home;

