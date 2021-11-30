import styled from 'styled-components'

export const Pane = styled.div`
  background: #3a3a3a;
  margin-top: 115px;
  border-radius: 10px;
  font-family: 'Alegreya Sans';
  color: white;
`

export const MobilePaneDiv = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: initial;
  }
`

export const DesktopPaneDiv = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`

export const Content = styled.div`
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-rows: 60px 1fr;
`

export const Form = styled.form`
`

export const Label = styled.label`
  text-size: 1rem;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
`

export const ResetButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: calc(100% - 30px);
  top: -30px;
  z-index: 100;
  border: none;
  background: rgba(1, 1, 1, 0);
  padding: 0;
  transition: 0.2s;

  :hover {
    cursor: pointer;
    background: rgba(1, 1, 1, 0.2);
  }

  svg {
    height: 30px;
    width: 30px;
  }
`