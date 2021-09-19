import React, {useState, useEffect} from 'react';
import { FlatList, Text, StyleSheet, View} from 'react-native';
import Loading from './Loading';
import User from './User';
import { RadioButton} from 'react-native-paper';

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
      setLoadingMore(true);
      setPage(page=>page+1);
    }

      return (
        isLoading ? <Loading/> :
        <>
        <View style={styles.container}>
        <Text style={styles.all}>All</Text>
        <RadioButton
          color="red"
          onPress={() => { setGender('') }}
          status={gender === ''?'checked':'unchecked'}
          />
        <Text style={styles.female}>Female</Text>
        <RadioButton
          color="red"
          onPress={() => { setGender('female') }}
          status={gender === 'female'?'checked':'unchecked'}

         />
        <Text style={styles.male}>Male</Text>
        <RadioButton
          color="red"
          status={gender === 'male'?'checked':'unchecked'}
          onPress={() => { setGender('male') }}/>
        <Text style={styles.gender}>Gender: {gender === ''? 'All':gender}</Text>
        </View>
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
      );
    }

    const styles = StyleSheet.create({
      container: {
        flexDirection:'row',
        marginBottom:'2%',
        borderColor:'grey',
        borderWidth:2,
        padding:2
  
      },
      all:{
        marginTop:10
      },
      male:{
        marginTop:10
      },
      female:{
        marginTop:10
      },
      gender:{
        marginTop:10
      }
    });
    export default Home;

