import React, {useState, useEffect} from 'react';
import { FlatList} from 'react-native';
import useFetchUsers from './hooks/useFetchUsers';
import Loading from './Loading';
import User from './User';

function Users({gender, nationality, navigation}){
     
const [loading, loadMoreUsers, loadingMoreUsers, results] = useFetchUsers(gender, nationality, navigation);
    
    return (
      loading ? <Loading/>:
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
