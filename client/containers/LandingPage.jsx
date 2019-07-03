import React from 'react'
import styled from 'styled-components'
import Header from '../components/landingpage/Header'

export default function LandingContainer () {
  return (
    <AppWrapper>
      <Header className='landingDiv' />
      <article className='article'>Welcome to Benson</article>
      <figure className='figure'>robot photo</figure>
      <footer className='footer'>I am footer</footer>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template: 50px 1fr 5px / repeat(12, 1fr);

  .article {
    grid-column: 1/4;
  }
  .figure {
    grid-column: 4/ -1;
  }
  .footer {
    grid-column: 1/ -1;
  }
`
