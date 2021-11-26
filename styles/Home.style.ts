import styled from 'styled-components'

export const Main = styled.main`
  position: relative;
  color: ${({ theme }) => theme.colors.primary};
`

export const MainContent = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0;
  font-family: 'Special Elite';
  z-index: 1;
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};
`

export const BackgroundContainer = styled.div`
  img {
    filter: brightness(0.3);
  }
`

// Keeps the content from overlapping with the navbar.
export const NavbarPlaceholder = styled.div`
  height: ${({ theme }) => theme.navbar.height};
`

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 3.5rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`
