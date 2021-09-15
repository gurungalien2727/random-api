import React, { useState, useEffect} from 'react';
import { FlatList, Text} from 'react-native';
import Loading from './Loading';
import User from './User';
import { RadioButton,Button } from 'react-native-paper';

function Home({navigation}) {

    const [results,setResults] = useState([]);
    const [isLoading, setLoading]= useState(true);
    const [page, setPage]= useState(1);
    const [loadingMore, setLoadingMore] =useState(false);
    const [gender, setGender]= useState('');
    const [prevGender, setPrevGender] = useState('');
    
    useEffect(()=>{
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
      setPage(page=>page+1);
      setLoadingMore(true);
    }

      return (
        isLoading ? <Loading/> :
        <>
        <Text>All</Text>
        <RadioButton
          color="red"
          checked={gender === ''}
          onPress={() => { setGender('') }}/>
        <Text>Female</Text>
        <RadioButton
          color="red"
          checked={gender === 'female'}
          onPress={() => { setGender('female') }}/>
        <Text>Male</Text>
        <RadioButton
          color="red"
          checked={gender === 'male'}
          onPress={() => { setGender('male') }}/>
        <Text>Gender: {gender === ''? 'All':gender}</Text>
        <Button raised onPress={() => console.log('Pressed')}>
    Press me
  </Button>
      
       
        <FlatList
        data={results}
        keyExtractor= {(result)=> result.login.uuid}
        onEndReached={() => loadMoreUsers ()}
        onEndReachedThreshold={0.2} 
        renderItem={( result) => (
         <User email={result.item.email} firstName={result.item.name.first} key={result.item.login.uuid} lastName={result.item.name.last} navigation={navigation} url={result.item.picture.large} /> 
        )} 
        >
        </FlatList>
        {loadingMore && <Loading/>}
        </>
      );
    }
    export default Home;

