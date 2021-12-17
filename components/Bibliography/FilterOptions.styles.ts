import styled from 'styled-components'

export const Menu = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  max-width: 400px;
  margin: auto auto 40px auto;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`
