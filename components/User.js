
import React from 'react';
import { Button, Image, StyleSheet,TouchableOpacity, Text, View } from 'react-native';

function User({firstName, lastName, email, url, navigation}) {

const onPress=()=> {
    navigation.navigate('UserDetails', {
    firstName:firstName,
    lastName:lastName,
    email:email
  })
}
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
           <Image 
              style={styles.image}
              source={{
                uri: url,
      
              }}></Image> 
            <View style={styles.view}>   
            <Text style={styles.textName}>{firstName} {lastName}</Text>
            <Text style={styles.textEmail}>{email}</Text>
            </View>
               
        </TouchableOpacity>
    )
 }
    
    const styles = StyleSheet.create({
      container: {
        flexDirection:'row',
        marginBottom:'6%',
        borderColor:'black',
        borderWidth:2,
  
      },
      image:{
        width: 80, 
        height: 80,
        borderRadius:40,
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