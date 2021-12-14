import Link from 'next/link'

const NavLinks: React.FC = () => {
  return (
    <>
      <Link href='/biographies'>Bios</Link>
      <Link href='/articles'>Articles</Link>
      <Link href='/documents'>Documents</Link>
      <Link href='/pictures'>Pictures</Link>
      <Link href='/timeline'>Timeline</Link>
      <Link href='/resources'>Resources</Link>
    </>
  )
}

export default NavLinks