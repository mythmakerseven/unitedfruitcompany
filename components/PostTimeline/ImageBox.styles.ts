import styled from 'styled-components'

export const Box = styled.div<{ backgroundURL: string }>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-image: url(${props => props.backgroundURL});
  background-size: contain;
  background-repeat: no-repeat;
  position: sticky;
  top: 0;
`