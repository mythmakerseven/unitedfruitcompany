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
import { getUpperPath } from '../../lib/common'

interface Props {
  header: string,
  previousSlug: string,
  nextSlug: string
}

const Banner: React.FC<Props> = ({ header, previousSlug, nextSlug }) => {
  const router = useRouter()

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
            <ArrowLeft />
          </Link>
        </MobileNavLink>
        <Header>
          <Link href={getUpperPath(router.pathname)} legacyBehavior>
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
            <ArrowRight />
          </Link>
        </MobileNavLink>
      </ContainerContent>
    </FullwidthContainer>
  )
}

export default Banner