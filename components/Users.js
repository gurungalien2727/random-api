import React, {useState, useEffect} from 'react';
import { FlatList, StyleSheet} from 'react-native';
import Loading from './Loading';
import User from './User';

function Users({gender, navigation}){
    const [results,setResults] = useState([]);
    const [isLoading, setLoading]= useState(true);
    const [page, setPage]= useState(1);
    const [loadingMore, setLoadingMore] =useState(false);
    const [prevGender, setPrevGender] = useState(gender);

     useEffect(()=>{
     if(gender !== prevGender) setLoading(true);
      loadUsers();
    },[page, gender]);

    loadUsers=()=>{
      const URL=`https://randomuser.me/api/?page=${page}&results=10&gender=${gender}`
      fetch(URL)
      .then(response => response.json())
      .then(jsonResponse =>{
        setLoading(false);
        setLoadingMore(false);
        if(gender === prevGender){
           arr= (page==1) ?jsonResponse.results:[...results, ...jsonResponse.results];
         }
         else{
           arr= jsonResponse.results;
           setPrevGender(gender);
         }

        setResults(arr);
      }
        );
    }

    loadMoreUsers=()=>{
      setLoadingMore(true);
      setPage(page=>page+1);
    }

    return (
      isLoading ? <Loading/>:
        <>
        <FlatList
        data={results}
        keyExtractor= {(result)=> result.login.uuid}
        onEndReached={() => loadMoreUsers ()}
        onEndReachedThreshold={0.2} 
        renderItem={( result) => (
         <User email={result.item.email} firstName={result.item.name.first} gender={result.item.gender} key={result.item.login.uuid} lastName={result.item.name.last} nationality={result.item.nat} navigation={navigation} url={result.item.picture.large} /> 
        )} 
        >
        </FlatList>
        {loadingMore && <Loading/>}
       </>

    )
  }

    export default Users;
