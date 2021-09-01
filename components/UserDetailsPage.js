 
import React from 'react';
import {Text, View } from 'react-native';

function UserDetailsPage({route}) {
    const {firstName, lastName, email} = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{firstName} {lastName}</Text>
        <Text>{email}</Text>
      </View>
    );
}

export default UserDetailsPage;
