import styled from 'styled-components'

export const Item = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const RightSide = styled.div<{ backgroundColor: string }>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
`

export const LeftSide = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`