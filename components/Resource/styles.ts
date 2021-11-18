import styled from 'styled-components'

export const Box = styled.div`
  width: 90%;
  margin: auto;
  padding: 0;
  border: 1px solid black;
  font-size: 1rem;
  line-height: 1.2;

  h1, p {
    padding: 0;
    margin: 0;
  }
`
  
export const BoxContent = styled.div`
  padding: 10px 20px;
`

export const Title = styled.span`
  font-size: 2rem;
`

export const Author = styled.span`
  font-size: 1.5rem;
`

export const Link = styled.div`
  font-size: 0.8rem;

  a {
    display: flex;
    align-items: center;
  }
`

export const Citation = styled.p`
  font-size: 1rem;
`

export const IconContainer = styled.div`
  padding-left: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  svg {
    padding: 0;
    height: 12px;
    width: 12px;
    display: inline;
  }
`