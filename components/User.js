
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

function User({firstName, lastName, email, url}) {


    return (
        <View style={styles.container}>
            <Text>{firstName} {lastName}</Text>
            <Text>{email}</Text>
              <Image 
              source={{
                uri: url,
      
              }}
              style={{ width: 305, height: 159 }}></Image>
              
        </View>
    )
 }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    

    export default User;