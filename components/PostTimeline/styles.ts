import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: black;
  color: white;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

type ButtonDirection = 'up' | 'down'

export const NavButton = styled.button< { isActive: boolean, direction: ButtonDirection  } >`
  font-size: 3rem;
  position: fixed;
  color: white;
  background: none;
  border: none;
  left: calc(50vw - 30px);
  ${props => props.direction === 'down' ? 'bottom: 20px;' : 'top: 20px;'}
  z-index: 1000;
  display: ${props => props.isActive ? 'initial' : 'none'};

  :hover {
    cursor: pointer;
  }
`