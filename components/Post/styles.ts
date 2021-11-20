import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Urania Czech';
`

export const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
  margin: auto;
  text-align: center;

  img {
    height: 100%;
    object-fit: contain;
    object-position: center;
    margin: auto;
    border-radius: 10px;
  }
`