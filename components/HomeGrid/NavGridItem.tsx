import Link from "next/link";
import Image from "../Image";
import TypeWriterScript from "../TypewriterScript";
import { ItemContainer } from "./styles";

interface Props {
  link: string;
  label: string;
  imagePath: string;
}

const HomeGrid: React.FC<Props> = ({ link, label, imagePath }) => {
  return (
    <Link href={link} passHref>
      <ItemContainer>
        <Image alt="" src={imagePath} />
        <p>
          <TypeWriterScript text={label} averageDuration={1500} />
        </p>
      </ItemContainer>
    </Link>
  );
};

export default HomeGrid;
