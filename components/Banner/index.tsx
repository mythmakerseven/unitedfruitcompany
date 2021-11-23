import {
  FullwidthContainer,
  ContainerContent,
  Header,
  DesktopNavLink,
  MobileNavLink
} from './styles'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft
} from 'react-bootstrap-icons'
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
        <DesktopNavLink>
          <Link href={`${getUpperPath(router.pathname)}/${previousSlug}`}>
            Previous
          </Link>
        </DesktopNavLink>
        <MobileNavLink>
          <Link href={`${getUpperPath(router.pathname)}/${previousSlug}`} passHref>
            <a>
              <ArrowLeft />
            </a>
          </Link>
        </MobileNavLink>
        <Header>
          <Link href={getUpperPath(router.pathname)}>
            {header}
          </Link>
        </Header>
        <DesktopNavLink>
          <Link href={`${getUpperPath(router.pathname)}/${nextSlug}`}>
            Next
          </Link>
        </DesktopNavLink>
        <MobileNavLink>
          <Link href={`${getUpperPath(router.pathname)}/${nextSlug}`} passHref>
            <a>
              <ArrowRight />
            </a>
          </Link>
        </MobileNavLink>
      </ContainerContent>
    </FullwidthContainer>
  )
}

export default Banner