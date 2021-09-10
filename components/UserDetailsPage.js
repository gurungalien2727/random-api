 
import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';

function UserDetailsPage({route}) {
    const {firstName, lastName, email, url} = route.params;
    return (
      <View style={styles.container}>
         <Image 
              style={styles.image}
              source={{
                uri: url
              }}></Image> 
        <Text style={styles.textName}>Name: {firstName} {lastName}</Text>
        <Text style={styles.textEmail}>Email: {email}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    borderColor:'black',
    borderWidth:2,
    padding:4

  },
  image:{
    width: '100%', 
    height: 400,
    borderRadius:10,
    marginBottom:'2%'
  },
  textName:{
    color:'#41cdf4',
    fontSize: 20,
    borderBottomWidth:2,
  },
  textEmail:{
    color:'#41cdf4',
    fontSize: 20
  }
});

export default UserDetailsPage;
