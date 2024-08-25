import Link from "next/link";
import Image from "../Image";
import { Container, TextSide, PicSide } from "./styles";

export enum Side {
  Right,
  Left,
}

interface Props {
  header: string;
  text: string;
  picturePath: string;
  pictureAltText: string;
  side: Side;
  link?: string;
}

const Hero: React.FC<Props> = ({
  header,
  text,
  picturePath,
  pictureAltText,
  side,
  link,
}) => {
  const textSection = (
    <TextSide>
      <h2>{link ? <Link href={link}>{header + " ➔"}</Link> : header}</h2>
      <p>{text}</p>
    </TextSide>
  );

  const imageSection = (
    <PicSide>
      <Image src={picturePath} alt={pictureAltText} />
    </PicSide>
  );
  return (
    <Container>
      {side === Side.Left ? textSection : imageSection}
      {side === Side.Right ? textSection : imageSection}
    </Container>
  );
};

export default Hero;
