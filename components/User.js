
import React from 'react';
import { Image, StyleSheet,TouchableOpacity, Text, View } from 'react-native';

function User({firstName, lastName, email, url, gender, nationality, navigation}) {

const onPress=()=> {
    navigation.navigate('UserDetails', {
    firstName:firstName,
    lastName:lastName,
    email:email,
    gender:gender,
    nationality:nationality,
    url:url
  })
}
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
           <Image 
              style={styles.image}
              source={{
                uri: url
              }}></Image> 
            <View style={styles.view}>   
            <Text style={styles.textName}>{firstName} {lastName}</Text>
            <Text style={styles.textEmail}>{email}</Text>
            <Text style={styles.textEmail}>Gender: {gender}</Text>
            <Text style={styles.textEmail}>Nationality: {nationality}</Text>
            </View>
               
        </TouchableOpacity>
    )
 }
    
    const styles = StyleSheet.create({
      container: {
        flexDirection:'row',
        marginBottom:'6%',
        borderColor:'grey',
        borderWidth:2,
        padding:4
  
      },
      image:{
        width: 80, 
        height: 80,
        borderRadius:1,
       

      },
      view:{
        padding: '4%'
      },
      textName:{
        color:'#41cdf4',
        fontSize: 24
      },
      textEmail:{
        color:'grey'
      }
    });
    export default User;