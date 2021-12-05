import {
  NavContainer,
  NavDiv,
  NavRight,
  DropdownToggle,
  MobileDropdown
} from './styles'
import Image from '../Image'
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
    <NavDiv color={router.pathname === '/' ? 'rgba(0, 0, 0, 0.6)' : '#3a3a3a' }>
      <NavContainer>
        <div>
          <Link href='/' passHref>
            <a>
              <Image
                src='https://unitedfruitcompany.files.wordpress.com/2020/02/kurtz-phelan-600.jpg?w=200'
                height='56'
                width='111'
                alt='Back to home'
              />
            </a>
          </Link>
        </div>
        <NavRight>
          <NavLinks />
        </NavRight>
        <DropdownToggle>
          {handleDropdownToggleIcon()}
        </DropdownToggle>
        {displayDropdown ? <MobileDropdown color={router.pathname === '/' ? 'rgba(0, 0, 0, 0.6)' : '#3a3a3a'} ><NavLinks /></MobileDropdown> : null }
      </NavContainer>
    </NavDiv>
  )
}

export default Navbar