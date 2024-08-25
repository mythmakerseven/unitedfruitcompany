import { Container, SeeMoreButton } from "./Banner.styles";
import { ChevronDown } from "react-bootstrap-icons";

interface Props {
  scrollToContent: () => void;
}

const Banner: React.FC<Props> = ({ scrollToContent }) => {
  return (
    <Container>
      <div /> {/* empty div so the below div is centered */}
      <div>
        <h1>The Story of the United Fruit Company</h1>
        <p>You can use the arrow keys to scroll.</p>
      </div>
      <SeeMoreButton onClick={() => scrollToContent()}>
        <span>Explore</span>
        <ChevronDown />
      </SeeMoreButton>
    </Container>
  );
};

export default Banner;
