import styled from 'styled-components'

export const Collapsed = styled.div`
  height: 40vh;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
`

export const Expanded = styled.div`
  height: 100%;
`

export const ToggleButton = styled.button`
  width: 100%;
  text-align: center;
  background: none;
  border: none;
  color: white;

  :hover {
    cursor: pointer;
  }

  svg {
    height: 40px;
    width: 40px;
  }
`