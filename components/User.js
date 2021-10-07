
import React from 'react';
import { Image, StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import {StyledUserView, StyledImageView, StyledView} from './styles/UserView.style';
import {StyledTextView} from './styles/TextView.style';

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
        <TouchableOpacity onPress={onPress}>
          <StyledUserView>
            
           <StyledImageView 
              source={{
                uri: url
              }}></StyledImageView> 
              
            <StyledView>   
            <StyledTextView color={'#41cdf4'} fontSize={'24px'}>{firstName} {lastName}</StyledTextView>
            <StyledTextView >{email}</StyledTextView>
            <StyledTextView >Gender: {gender}</StyledTextView>
            <StyledTextView >Nationality: {nationality}</StyledTextView>
            </StyledView>
            </StyledUserView>
               
        </TouchableOpacity>
    )
 }
     
    export default User;