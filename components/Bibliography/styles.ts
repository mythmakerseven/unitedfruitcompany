import styled from 'styled-components'
import { specialElite } from '../../styles/fonts'

export const Header = styled.h1`
  font-family: ${specialElite.style.fontFamily};
  text-align: center;
  padding-top: 50px;
`

export const Description = styled.p`
  text-align: center;
`

export const PostList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  margin: auto auto 40px auto;
`
