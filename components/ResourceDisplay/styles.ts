import styled from 'styled-components'

export const Content = styled.div`
  height: 60vh;
  width: 100%;
  margin-top: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`

export const Description = styled.div`
  font-size: 1rem;
`

export const FullScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 100000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
  
export const FullScreenContent = styled.div`
  height: 90vh;
  width: 90vw;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 7vh;
  right: 6vw;
  display: flex;
  justify-content: flex;
  align-items: flex;

  svg {
    height: 30px;
    width: 30px;
  }
`