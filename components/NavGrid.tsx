import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/NavGrid.module.css'

const NavGrid: React.FC = () => {
  return (
    <div className={styles.flex}>
      <Link href='/bios' passHref>
        <a>
          <div className={ styles.gridItem }>
            <Image
              layout='fill'
              alt=''
              src='/img/anne-nygard-h7-V2KkCECI-unsplash.jpg'
              objectFit='cover'
              objectPosition='center'
              draggable='false'
            />
            <p>
                Biographies
            </p>
          </div>
        </a>
      </Link>
      <Link href='/documents' passHref>
        <a>
          <div className={ styles.gridItem }>
            <Image
              layout='fill'
              alt=''
              src='/img/annie-spratt-5cFwQ-WMcJU-unsplash.jpg'
              objectFit='cover'
              objectPosition='center'
              draggable='false'
            />
            <p>
                Documents
            </p>
          </div>
        </a>
      </Link>
      <Link href='/pictures' passHref>
        <a>
          <div className={ styles.gridItem }>
            <Image
              layout='fill'
              alt=''
              src='/img/roman-kraft-7sPg5OLfExc-unsplash.jpg'
              objectFit='cover'
              objectPosition='center'
              draggable='false'
            />
            <p>
                Pictures
            </p>
          </div>
        </a>
      </Link>
      <Link href='/timeline' passHref>
        <a>
          <div className={ styles.gridItem }>
            <Image
              layout='fill'
              alt=''
              src='/img/christina-isabella-PivMfS2l9B8-unsplash.jpg'
              objectFit='cover'
              objectPosition='center'
              draggable='false'
            />
            <p>
                Timeline
            </p>
          </div>
        </a>
      </Link>
      <Link href='/resources' passHref>
        <a>
          <div className={styles.gridItem}>
            <Image
              layout='fill'
              alt=''
              src='/img/jace-afsoon-5xmFg-EGhpw-unsplash.jpg'
              objectFit='cover'
              objectPosition='center'
              draggable='false'
            />
            <p>
              Resources
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default NavGrid