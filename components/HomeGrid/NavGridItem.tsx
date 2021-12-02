import Link from 'next/link'
import Image from 'next/image'
import TypeWriterScript from '../TypewriterScript'
import { ItemContainer } from './styles'

interface Props {
  link: string,
  label: string,
  imagePath: string
}

const HomeGrid: React.FC<Props> = ({ link, label, imagePath }) => {
  return (
    <Link href={link} passHref>
      <a>
        <ItemContainer>
          <Image
            layout='fill'
            alt=''
            src={imagePath}
            objectFit='cover'
            objectPosition='center'
            draggable='false'
          />
          <p>
            <TypeWriterScript
              text={ label }
              averageDuration={1500}
            />
          </p>
        </ItemContainer>
      </a>
    </Link>
  )
}

export default HomeGrid