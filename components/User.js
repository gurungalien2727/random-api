
import React from 'react';
import { Button, Image, StyleSheet,TouchableOpacity, Text, View } from 'react-native';

function User({firstName, lastName, email, url}) {

const onPress=()=> alert("component pressed")
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text>{firstName} {lastName}</Text>
            <Text>{email}</Text>
              <Image 
              source={{
                uri: url,
      
              }}
              style={{ width: 305, height: 159 }}></Image>
              
        </TouchableOpacity>
    )
 }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:'15%',
        borderWidth:2,
        borderColor:'green',
        backgroundColor:'yellow'
      
      }
    });
    

    export default User;