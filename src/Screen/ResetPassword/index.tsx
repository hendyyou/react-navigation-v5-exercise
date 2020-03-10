import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Label = Styled.Text``;

const ResetPassword = () => {
  return (
    <Container
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Label>This is ResetPassword Screen</Label>
    </Container>
  );
};

export default ResetPassword;
