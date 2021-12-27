import styled from 'styled-components'

const Container = styled.div`
  width: 780px;
  margin: auto;
  padding: 0 0 40px 0;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
  }
`

export const WideContainer = styled.div`
  width: 1400px;
  margin: auto;
  padding: 0 0 40px 0;

  @media (max-width: 1420px) {
    width: 100%;
    padding: 0 10px;
  }
`

export const FullWidthContainer = styled.div< { backgroundColor: string } >`
  margin: 0;
  padding: 0 0 40px 0;
  background: ${props => props.backgroundColor};
`

export default Container