import styled from 'styled-components'

export const Card = styled.div`
  height: 280px;
  width: 220px;
  border-radius: 20px;
  box-shadow: 1px 1px 2px;
  border: 1px solid rgba(0, 0, 0, 0.1 );
  background: #e6d300;
  transition: transform 0.2s;
  text-align: center;
  overflow: hidden;
  
  :hover, a:focus {
    transform: translateY(-5px);
  }
  
  a {
    text-decoration: none;
  }

  a:hover {
    color: initial;
  }

  @media (max-width: 800px) {
    min-height: 200px;
    width: 172px;
  }
`
  
export const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Title = styled.h2`
  font-size: 1.2rem;
`

export const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    margin: auto;
    object-fit: cover;
    object-position: center;
  }
`

// export const Excerpt = styled.p`
//   flex-shrink: 1;
//   font-size: 0.75rem;
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   underline: none;
// `