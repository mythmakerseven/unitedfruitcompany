import styled from 'styled-components'

export const Container = styled.div`
  min-height: 60vh;
  width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgba(178, 151, 0, 0.3);
  padding: 60px 0;

  @media (max-width: 1420px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    flex-flow: column;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 0;
  }
`

export const TextSide = styled.div`
  max-width: 40%;

  @media (max-width: 800px) {
    max-width: 90%;
    order: 2;
  }
`

export const PicSide = styled.div`
  position: relative;
  height: 300px;
  width: 500px;

  img {
    border-radius: 30px;
  }

  @media (max-width: 800px) {
    max-width: 90%;
    order: 1;
  }
`