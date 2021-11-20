import AudioSecret from '../AudioSecret'
import { FooterContainer } from './styles'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Site created by <a href='https://camdenmecklem.com'>Camden Mecklem</a>.</p>
      <p>Content created by HIS394/HNR331, proctored by Dr. Jonathan T. Reynolds.</p>
      <AudioSecret
        child={<span>🍌</span>}
      />
    </FooterContainer>
  )
}

export default Footer