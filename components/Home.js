import React, {useState} from 'react';
import { Text, StyleSheet, View} from 'react-native';
import Users from './Users';
import { RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

function Home({navigation}) {

const [gender, setGender]= useState('');
const [open, setOpen] = useState(false);
const [value, setValue] = useState('');
const [nationality, setNationality] = useState([
  {label: 'Australia', value: 'au'},
  {label: 'Great Britain', value: 'gb'},
  {label: 'Canada', value: 'ca'},
  {label: 'China', value: 'ch'},
  {label: 'United States', value: 'us'},
]);

      return (
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

        <DropDownPicker
        style={styles.picker}
        labelProps={'Select a nation'}
        open={open}
        value={value}
        items={nationality}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setNationality}
       />
        <Users gender={gender} nationality={value} navigation={navigation}/>
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
      },
      picker:{
        marginBottom:10,
     
      }
    });
    
    export default Home;

