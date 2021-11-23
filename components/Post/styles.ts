import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Urania Czech';
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2rem;
    text-align: left;
  }
`

export const ImageContainer = styled.div`
  height: 300px;
  width: 100%;
  margin: auto;
  text-align: center;

  img {
    height: 100%;
    object-fit: contain;
    object-position: center;
    margin: auto;
    border-radius: 10px;
  }
`

// Most styles are provided by the Wordpress API
// They have pretty good defaults but we need to
// override some things.
export const Content = styled.div`
  a {
    overflow-wrap: break-word;
  }

  @media (max-width: 600px) {
    hyphens: auto;

    p {
      font-size: 1.1rem;
    }
  }
`