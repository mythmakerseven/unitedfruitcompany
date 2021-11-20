import type { NextPage } from 'next'
import Link from 'next/link'
import {
  FullPageContainer,
  FullPageContainerContent,
  BigHeader,
  SmallHeader,
  HomeLink
} from '../styles/404.style'

const FourOhFour: NextPage = () => {
  return (
    <FullPageContainer>
      <FullPageContainerContent>
        <BigHeader>
          🍌
        </BigHeader>
        <BigHeader>
          That&#39;s bananas!
        </BigHeader>
        <SmallHeader>
          We couldn&#39;t find the page you&#39;re looking for.
        </SmallHeader>
        <HomeLink>
          <Link href='/'>
            Go back home
          </Link>
        </HomeLink>
      </FullPageContainerContent>
    </FullPageContainer>
  )
}

export default FourOhFour