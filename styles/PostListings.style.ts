import styled from 'styled-components'

export const Header = styled.h1`
  font-family: 'Urania Czech';
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