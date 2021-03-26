import React from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div`
      @media (min-width: 500px) {
        width: 450px;
      }
    `

const person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>I'm a {props.name} and I'm {props.age} years old {props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </StyledDiv>
  )
};

export default person;