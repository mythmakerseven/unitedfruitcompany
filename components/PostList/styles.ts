import styled from 'styled-components'

export const Header = styled.h1`
  font-family: 'Special Elite';
  text-align: center;
`

export const CardFlex = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 100%;
  justify-content: center;
  padding: 0;

  li {
    list-style-type: none;
  }
`

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  padding-top: 15px;

  @media (max-width: 1000px) {
    display: initial;
  }
`