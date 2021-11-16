import Link from 'next/link'
import Image from 'next/image'
import TypeWriterScript from '../TypeWriterScript'
import styles from '../../styles/NavGrid.module.css'

interface Props {
  link: string,
  label: string,
  imagePath: string
}

const NavGridItem: React.FC<Props> = ({ link, label, imagePath }) => {
  return (
    <Link href={link} passHref>
      <a>
        <div className={styles.gridItem}>
          <Image
            layout='fill'
            alt=''
            src={imagePath}
            objectFit='cover'
            objectPosition='center'
            draggable='false'
          />
          <p>
            <TypeWriterScript text={ label } />
          </p>
        </div>
      </a>
    </Link>
  )
}

export default NavGridItem