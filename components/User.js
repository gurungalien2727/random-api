
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyledUserView, StyledImageView, StyledView} from './styles/UserView.style';
import {StyledTextView} from './styles/TextView.style';

function User({email, firstName, gender, lastName, nationality, navigation, url}) {

const onPress=()=> {
    navigation.navigate('UserDetails', {
    email:email,
    firstName:firstName,
    gender:gender,
    lastName:lastName,
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