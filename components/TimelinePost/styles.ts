import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  padding-top: 200px;
`
  
export const BackgroundHeader = styled.h1`
  position: absolute;
  overflow: hidden;
  left: 20px;
  top: 200px;
  padding: 0;
  margin: 0;
  font-size: clamp(5rem, 10vw, 30rem);
  color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
`

export const Header = styled.h1< { textAlign: string } >`
  text-align: ${props => props.textAlign};
  font-family: Alegreya Sans;
  padding: 0;
  margin: 0;
`