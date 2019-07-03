import React from 'react';
import styled from "styled-components";
import Header from '../components/landingpage/Header';


export default function LandingContainer() {
  return (
    <AppWrapper>
      <Header className='landingDiv' />
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: grid;
grid-template-columns: repeat(5,1fr);
grid-template-rows: 1fr 1fr 1fr 1fr;
grid-template-area: 
'header header header'
'content content img'
'content content img'
'content content img'
'footer footer footer';
height: 100%;
`