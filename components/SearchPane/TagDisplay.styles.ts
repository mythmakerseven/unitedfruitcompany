import styled from 'styled-components'

export const TagContainer = styled.div`
`

export const TagList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 1.2rem;
`

export const TagItem = styled.li`
  background: ${({ theme }) => theme.colors.secondary};
  color: black;
  padding: 5px;
  border-radius: 5px;

  :hover, :focus {
    cursor: pointer;
    filter: brightness(0.9);
  }
`