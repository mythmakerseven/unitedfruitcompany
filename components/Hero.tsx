import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Hero.module.css'

export enum Side {
  Right,
  Left
}

interface Props {
  header: string,
  text: string,
  picturePath: string,
  pictureAltText: string,
  side: Side
}

const Hero: React.FC<Props> = ({ header, text, picturePath, pictureAltText, side }) => {
  const textSection = (
      <div className={styles.textSide}>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
  )

  const imageSection = (
      <div className={styles.heroPic}>
        <Image
          src={picturePath}
          alt={pictureAltText}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
        />
      </div>
  )
  return (
    <div className={styles.heroContainer}>
      { side === Side.Left ? textSection : imageSection }
      { side === Side.Right ? textSection : imageSection }
    </div>
  )
}

export default Hero