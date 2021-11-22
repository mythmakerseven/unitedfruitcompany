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
  previousSlug: string,
  nextSlug: string
}

const Banner: React.FC<Props> = ({ header, previousSlug, nextSlug }) => {
  const router = useRouter()

  const getUpperPath = (url: string) => {
    const lastSlash = url.lastIndexOf('/')
    return url.slice(0, lastSlash)
  }

  return (
    <FullwidthContainer>
      <ContainerContent>
        <NavLink>
          <Link href={`${getUpperPath(router.pathname)}/${previousSlug}`}>
            Previous
          </Link>
        </NavLink>
          <Header>
            <Link href={getUpperPath(router.pathname)}>
              {header}
            </Link>
          </Header>
        <NavLink>
          <Link href={`${getUpperPath(router.pathname)}/${nextSlug}`}>
            Next
          </Link>
        </NavLink>
      </ContainerContent>
    </FullwidthContainer>
  )
}

export default Banner