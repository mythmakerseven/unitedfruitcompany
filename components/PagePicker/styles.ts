import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`

export const Button = styled.button`
  height: 40px;
  width: 40px;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #3a3a3a;
  border-radius: 10px;
  transition: filter 0.2s;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2),0 6px 16px 0 rgba(0,0,0,0.2);

  :hover, :focus {
    cursor: pointer;
    filter: brightness(0.8);
  }
`