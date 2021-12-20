import HomeGridItem from './NavGridItem'
import { FlexContainer, FlexContainerContent } from './styles'

const HomeGrid: React.FC = () => {
  return (
    <FlexContainer>
      <FlexContainerContent>
        <HomeGridItem
          link='/biographies'
          label='Biographies'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/anne-nygard-h7-v2kkceci-unsplash.jpg?w=480'
        />
        <HomeGridItem
          link='/documents'
          label='Documents'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/sear-greyson-k-zsc7ydj6y-unsplash.jpg?w=480'
        />
        <HomeGridItem
          link='/pictures'
          label='Pictures'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/roman-kraft-7spg5olfexc-unsplash.jpg?w=480'
        />
        <HomeGridItem
          link='/timeline'
          label='Timeline'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/christina-isabella-pivmfs2l9b8-unsplash.jpg?w=480'
        />
        <HomeGridItem
          link='/resources'
          label='Resources'
          imagePath='https://unitedfruitcompany.files.wordpress.com/2021/11/jace-afsoon-5xmfg-eghpw-unsplash.jpg?w=480'
        />
      </FlexContainerContent>
    </FlexContainer>
  )
}

export default HomeGrid