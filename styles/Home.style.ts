import styled from 'styled-components'
import { specialElite } from './fonts'

export const Main = styled.main`
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
  font-family: ${specialElite.style.fontFamily};
  z-index: 1;
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};

  ::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://unitedfruitcompany.files.wordpress.com/2021/11/map.jpg?w=1200") center no-repeat;
    background-size: cover;
    filter: brightness(0.3);
    z-index: -1;
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
