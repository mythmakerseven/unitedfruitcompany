import styled from 'styled-components'

export const Box = styled.div<{ backgroundurl: string, opacity: number }>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-image: url(${props => props.backgroundurl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: sticky;
  top: 0;
  transition: filter 0.5s;
  filter: brightness(${props => props.opacity});

  a {
    height: 100%;
    width: 100%;
    font-size: 3rem;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.35);
  }

  a:focus, a:hover {
    color: #e6e600;
    // The below line may seem redundant, but it fixes a weird bug on the dev build where
    // the color property changes the background color too. Re-stating the background
    // color seems to override that bug and keeps it working correctly.
    background-color: rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 1000px) {
    height: 35vh;
    width: 100%;
    grid-row: 1;

    a {
      font-size: 1.8rem;
    }
  }
`