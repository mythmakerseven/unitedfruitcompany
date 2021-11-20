import styled from 'styled-components'

export const FlexContainer = styled.div`
  a {
    text-decoration: none;
  }
`

export const FlexContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
`

export const ItemContainer = styled.div`
  padding: 2rem;
  height: 240px;
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  filter: grayscale(1);
  border-radius: 5px;
  transition: filter 0.2s;
  overflow: hidden;
  position: relative;

  div {
    border-radius: 5px;
  }

  p {
    z-index: 100;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    border-radius: 10px;
  }

  img {
    border-radius: 5px;
    transition: transform 0.2s;
    overflow: hidden;
  }

  :hover {
    cursor: pointer;
    filter: grayscale(0);

    img {
      transform: scale(1.05);
    }
  }

  @media (max-width: 1000px) {
    height: 120px;
    width: 240px;
  }

  @media (max-width: 1000px) {
    height: 80px;
    width: 240px;
    filter: none;

    p {
      font-size: 1.4rem;
    }
  }
`