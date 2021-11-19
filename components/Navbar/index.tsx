import {
  NavContainer,
  NavDiv,
  NavLeft,
  NavRight,
  DropdownToggle,
  MobileDropdown
} from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { List, X } from 'react-bootstrap-icons'
import NavLinks from './NavLinks'

const Navbar: React.FC = () => {
  const [displayDropdown, toggleDropdown] = useState(false)

  const router = useRouter()

  // Close the mobile dropdown menu after the user clicks through to another page.
  useEffect(() => {
    toggleDropdown(false)
  }, [router.pathname])

  const handleDropdownToggleIcon = () => {
    if (displayDropdown) {
      return (
        <X
          onClick={() => toggleDropdown(!displayDropdown)}
        />
      )
    } else {
      return (
        <List
          onClick={() => toggleDropdown(!displayDropdown)}
        />
      )
    }
  }

  return (
    <NavDiv>
      <NavContainer>
        <NavLeft>
          <Link href='/' passHref>
            <a>
              <Image
                src='/opengraph.jpg'
                layout='fixed'
                height='56'
                width='111'
                alt='Back to home'
              />
            </a>
          </Link>
        </NavLeft>
        <NavRight>
          <NavLinks />
        </NavRight>
        <DropdownToggle>
          {handleDropdownToggleIcon()}
        </DropdownToggle>
        { displayDropdown ? <MobileDropdown><NavLinks /></MobileDropdown> : null }
      </NavContainer>
    </NavDiv>
  )
}

export default Navbar