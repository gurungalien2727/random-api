import React, {useState, useEffect} from 'react';
import { FlatList} from 'react-native';
import Loading from './Loading';
import User from './User';

function Users({gender, nationality, navigation}){
  
    const [results,setResults] = useState([]);
    const [isLoading, setLoading]= useState(true);
    const [page, setPage]= useState(1);
    const [loadingMoreUsers, setLoadingMoreUsers] =useState(false);
    const [prevGender, setPrevGender] = useState(gender);
    const [prevNat, setPrevNat] = useState(nationality);

     useEffect(()=>{
      if(gender !== prevGender || nationality!==prevNat) setLoading(true);
      loadUsers();
    },[page, gender, nationality]);

    loadUsers=()=>{
      const URL=`https://randomuser.me/api/?page=${page}&results=10&gender=${gender}&nat=${nationality}`
      fetch(URL)
      .then(response => response.json())
      .then(jsonResponse =>{
        setLoading(false);
        setLoadingMoreUsers(false);
        if(gender === prevGender && nationality === prevNat  ){
           arr= (page==1) ?jsonResponse.results:[...results, ...jsonResponse.results];
         }
        
         else{
           arr= jsonResponse.results;
           if(gender!==prevGender)   setPrevGender(gender);
           if(nationality!==prevNat)  setPrevNat(nationality);
          
         }

        setResults(arr);
      }
        );
    }

    loadMoreUsers=()=>{
      setLoadingMoreUsers(true);
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
        {loadingMoreUsers && <Loading/>}
       </>
    )
  }

    export default Users;
