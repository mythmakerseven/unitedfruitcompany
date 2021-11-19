import styled from 'styled-components'

export const NavDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.navbar.height};
  z-index: 10000;
  background: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.primary};

  img {
    border-radius: 20px;
  }
`

export const NavContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const NavRight = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.3rem;

  @media (max-width: 780px) {
    display: none;
  }
`

export const DropdownToggle = styled.div`
  display: none;
  
  svg {
    height: 40px;
    width: 40px;
  }
  
  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      cursor: pointer;
    }
  }
`

export const MobileDropdown = styled.div`
  display: none;
  position: absolute;
  top: ${({ theme }) => theme.navbar.height};
  left: 0;
  margin: auto;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  font-size: 2rem;
  padding: 20px 0;
  
  @media (max-width: 780px) {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`