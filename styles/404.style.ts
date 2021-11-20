import styled from 'styled-components'

export const FullPageContainer = styled.div`
  height: calc(100vh - ${({ theme }) => theme.navbar.height});
  width: 100%;
  margin-top: ${({ theme }) => theme.navbar.height};
`
  
export const FullPageContainerContent = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const BigHeader = styled.h1`
  font-size: 4rem;
  margin: 0;
  padding: 0;

  @media (max-width: 800px) {
    font-size: 2.5rem;
  }
`

export const SmallHeader = styled.h2`
  font-size: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`

export const HomeLink = styled.p`
  font-size: 1rem;

  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`