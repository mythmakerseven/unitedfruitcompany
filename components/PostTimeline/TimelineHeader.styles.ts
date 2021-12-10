import styled from 'styled-components'
import { animated } from '@react-spring/web'

export const Header = styled(animated.span)`
  font-size: 3.5rem;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    p {
      font-size: 1.2rem;
    }
  }
`