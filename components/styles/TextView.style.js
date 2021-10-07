import React from 'react';
import styled from 'styled-components/native';

export const StyledTextView = styled.Text`
  color:${({color}) => color || 'grey' };
  fontSize:${({fontSize}) => fontSize || '12px' };
`

