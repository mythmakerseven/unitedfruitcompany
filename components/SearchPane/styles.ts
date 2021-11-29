import styled from 'styled-components'

export const Pane = styled.div`
  width: 400px;
  background: gray;
  height: auto;

  @media (max-width: 1000px) {
    display: none;
  }
`