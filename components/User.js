
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
              <Text>{firstName} {lastName}</Text>
            <Text>{email}</Text>
            </View>
               
        </TouchableOpacity>
    )
 }
    
    const styles = StyleSheet.create({
      container: {
        flexDirection:'row',
        marginBottom:'6%',
        borderWidth:2,
        borderColor:'black',
      },
      image:{
        width: 80, 
        height: 80,
        borderRadius:40,
      },
      view:{
        padding: '4%'
      }
    });
    
    export default User;