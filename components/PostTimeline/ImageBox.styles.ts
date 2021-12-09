import styled from 'styled-components'

export const Box = styled.div<{ backgroundurl: string, opacity: number }>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-image: url(${props => props.backgroundurl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: sticky;
  top: 0;
  transition: filter 0.5s;
  filter: opacity(${props => props.opacity});
`