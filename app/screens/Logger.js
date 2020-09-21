import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  background: #f37ff3;
  flex: 1;
`;
const Text = styled.Text``;

function Logger() {
  return (
    <Container>
      <Text>Logger</Text>
    </Container>
  );
}

export default Logger;
