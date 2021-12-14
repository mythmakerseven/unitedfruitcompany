import styled from 'styled-components'

export const Collapsed = styled.div`
  margin: 0;
  max-height: 30vh;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  pointer-events: none;
`

export const Expanded = styled.div`
  margin: 0;
  height: 100%;
  min-height: 40vh;
`

export const ToggleButton = styled.button<{ toggled: boolean }>`
  width: 100%;
  text-align: center;
  border: none;
  background: none;
  color: white;
  position: relative;
  top: ${props => props.toggled ? '' : '-80px' };
  
  :hover {
    cursor: pointer;
  }
  
  svg {
    background: rgba(255, 255, 255, 0.4);
    padding: 10px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`