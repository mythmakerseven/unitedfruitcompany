import HomeGridItem from './NavGridItem'
import { FlexContainer } from './styles'

const HomeGrid: React.FC = () => {
  return (
    <FlexContainer>
      <HomeGridItem
        link='/bios'
        label='Biographies'
        imagePath='/img/anne-nygard-h7-V2KkCECI-unsplash.jpg'
      />
      <HomeGridItem
        link='/documents'
        label='Documents'
        imagePath='/img/annie-spratt-5cFwQ-WMcJU-unsplash.jpg'
      />
      <HomeGridItem
        link='/pictures'
        label='Pictures'
        imagePath='/img/roman-kraft-7sPg5OLfExc-unsplash.jpg'
      />
      <HomeGridItem
        link='/timeline'
        label='Timeline'
        imagePath='/img/christina-isabella-PivMfS2l9B8-unsplash.jpg'
      />
      <HomeGridItem
        link='/resources'
        label='Resources'
        imagePath='/img/jace-afsoon-5xmFg-EGhpw-unsplash.jpg'
      />
    </FlexContainer>
  )
}

export default HomeGrid