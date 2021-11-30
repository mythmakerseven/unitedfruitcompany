import styled from 'styled-components'

export const TagContainer = styled.div`
`

export const MobileHeaderContainer = styled.div`
  display: none;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: flex;
    justify-contents: center;
    align-items: center;
  }
`

export const DesktopHeaderContainer = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`

export const Header = styled.h3`
  padding: 0;
  margin: 0;
  display: inline;

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
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
    filter: brightness(0.7);
  }
`

export const ToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;

  svg {
    height: 20px;
    width: 20px;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: inline-flex;
    justify-contents: center;
    align-items: center;
  }
`