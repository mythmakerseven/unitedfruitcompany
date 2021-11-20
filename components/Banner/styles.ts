import styled from 'styled-components'

export const FullwidthContainer = styled.div`
  width: 100%;
  min-height: 100px;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`