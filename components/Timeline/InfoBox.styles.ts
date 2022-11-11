import styled from 'styled-components'

export const Item = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  width: 50vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    justify-content: flex-start;
  }
`

export const Content = styled.div`
  padding: 10%;
  display: flex;
  flex-flow: column;

  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }
  }
`

export const InfoHeader = styled.h2`
  font-size: 3rem;
`
