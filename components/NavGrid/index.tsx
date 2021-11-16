import NavGridItem from './NavGridItem'
import styles from '../../styles/NavGrid.module.css'

const NavGrid: React.FC = () => {
  return (
    <div className={styles.flex}>
      <NavGridItem
        link='/bios'
        label='Biographies'
        imagePath='/img/anne-nygard-h7-V2KkCECI-unsplash.jpg'
      />
      <NavGridItem
        link='/documents'
        label='Documents'
        imagePath='/img/annie-spratt-5cFwQ-WMcJU-unsplash.jpg'
      />
      <NavGridItem
        link='/pictures'
        label='Pictures'
        imagePath='/img/roman-kraft-7sPg5OLfExc-unsplash.jpg'
      />
      <NavGridItem
        link='/timeline'
        label='Timeline'
        imagePath='/img/christina-isabella-PivMfS2l9B8-unsplash.jpg'
      />
      <NavGridItem
        link='/resources'
        label='Resources'
        imagePath='/img/jace-afsoon-5xmFg-EGhpw-unsplash.jpg'
      />
    </div>
  )
}

export default NavGrid