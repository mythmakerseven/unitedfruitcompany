import styled from 'styled-components'

const Container = styled.div`
  width: 780px;
  margin: auto;
  margin-top: calc(${({ theme }) => theme.navbar.height} + 40px);
  padding: 0;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
  }
`

export default Container