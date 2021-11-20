import {
  FullwidthContainer,
  ContainerContent,
  Header,
  NavLink
} from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  header: string,
  link: string
}

const Banner: React.FC<Props> = ({ header, link }) => {
  const router = useRouter()

  const getUpperPath = (url: string) => {
    const lastSlash = url.lastIndexOf('/')
    return url.slice(0, lastSlash)
  }

  return (
    <FullwidthContainer>
      <ContainerContent>
        <NavLink>
          Previous
        </NavLink>
          <Header>
            <Link href={getUpperPath(router.pathname)}>
              {header}
            </Link>
          </Header>
        <NavLink>
          Next
        </NavLink>
      </ContainerContent>
    </FullwidthContainer>
  )
}

export default Banner