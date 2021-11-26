import HomeGridItem from './NavGridItem'
import { FlexContainer, FlexContainerContent } from './styles'

const HomeGrid: React.FC = () => {
  return (
    <FlexContainer>
      <FlexContainerContent>
        <HomeGridItem
          link='/bios'
          label='Biographies'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/anne-nygard-h7-v2kkceci-unsplash.jpg'
        />
        <HomeGridItem
          link='/articles'
          label='Articles'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/laura-rivera-9zqzrlwv52m-unsplash.jpg'
        />
        <HomeGridItem
          link='/documents'
          label='Documents'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/sear-greyson-k-zsc7ydj6y-unsplash.jpg'
        />
        <HomeGridItem
          link='/pictures'
          label='Pictures'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/roman-kraft-7spg5olfexc-unsplash.jpg'
        />
        <HomeGridItem
          link='/timeline'
          label='Timeline'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/christina-isabella-pivmfs2l9b8-unsplash.jpg'
        />
        <HomeGridItem
          link='/resources'
          label='Resources'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/jace-afsoon-5xmfg-eghpw-unsplash.jpg'
        />
      </FlexContainerContent>
    </FlexContainer>
  )
}

export default HomeGrid