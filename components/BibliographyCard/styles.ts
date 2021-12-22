import styled from 'styled-components'

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 15fr;
  align-items: center;

  svg {
    height: 40px;
    width: 40px;
  }

  p {
    margin: 0;
    padding-left: 1.5em;
    text-indent: -1.5em;
  }

  @media (max-width: 800px) {
    svg {
      height: 16px;
      width: 16px;
    }

    p {
      font-size: 1rem;
    }

    a {
      overflow-wrap: anywhere;
    }
  }
`