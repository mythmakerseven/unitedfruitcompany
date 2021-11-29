import styled from 'styled-components'

const Container = styled.div`
  width: 780px;
  margin: auto;
  padding: 0;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
  }
`

export const WideContainer = styled.div`
  width: 1400px;
  margin: auto;
  padding: 0;

  @media (max-width: 1420px) {
    width: 100%;
    padding: 0 10px;
  }
`

export default Container