import HomeGridItem from './NavGridItem'
import { FlexContainer, FlexContainerContent } from './styles'

const HomeGrid: React.FC = () => {
  return (
    <FlexContainer>
      <FlexContainerContent>
        <HomeGridItem
          link='/bios'
          label='Biographies'
          imagePath='/img/anne-nygard-h7-V2KkCECI-unsplash.jpg'
        />
        <HomeGridItem
          link='/articles'
          label='Articles'
          imagePath='/img/laura-rivera-9ZQzrLWV52M-unsplash.jpg'
        />
        <HomeGridItem
          link='/documents'
          label='Documents'
          imagePath='/img/sear-greyson-K-ZsC7YdJ6Y-unsplash.jpg'
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
      </FlexContainerContent>
    </FlexContainer>
  )
}

export default HomeGrid