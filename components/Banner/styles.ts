import styled from 'styled-components'

export const FullwidthContainer = styled.div`
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme.colors.secondary};
`
  
export const ContainerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
`

export const Header = styled.h1`
  font-size: 2rem;

  @media (max-width: 800px) {
    font-size: 1.25rem;
  }
`

export const NavLink = styled.p`
  font-size: 1rem;
`