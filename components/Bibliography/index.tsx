import TypeWriterScript from "../../components/TypewriterScript";
import BibliographyCard from "../BibliographyCard";
import Container from "../Container";
import { Post } from "../../lib/types";
import { Header, Description, PostList } from "./styles";
import { useEffect, useState } from "react";
import FilterOptions from "./FilterOptions";
import { a, useTrail } from "@react-spring/web";

interface Props {
  items: Post[];
}

const Bibliography: React.FC<Props> = ({ items }) => {
  const [itemsToShow, setItemsToShow] = useState(items);
  const [filter, setFilter] = useState<null | string>(null);

  useEffect(() => {
    if (filter) {
      // Some special handling for the different words people might use for a image. I'm doing this so people don't have
      // to remember which specific term to use when adding bibliography items.
      if (filter === "picture") {
        setItemsToShow(
          items.filter(
            (item) =>
              item.tags.labelTags.includes("picture") ||
              item.tags.labelTags.includes("image") ||
              item.tags.labelTags.includes("photo")
          )
        );
      } else {
        setItemsToShow(
          items.filter((item) => item.tags.labelTags.includes(filter))
        );
      }
    } else {
      setItemsToShow(items);
    }
  }, [filter, items]);

  const [trail, api] = useTrail(itemsToShow.length, () => ({
    config: {
      mass: 1,
      tension: 4000,
      friction: 250,
    },
    from: { y: -20, opacity: 0 },
    to: { y: 0, opacity: 1 },
  }));

  useEffect(() => {
    api.start({ reset: true });
  }, [api, itemsToShow]);

  return (
    <Container>
      <Header>
        <TypeWriterScript text={"Resources"} averageDuration={1000} />
      </Header>
      <Description>
        This page lists the sources we used, as well as other resources that we
        couldn&apos;t secure the rights to reproduce.
      </Description>
      <FilterOptions filter={filter} setFilter={setFilter} />
      <PostList>
        {trail.map((style, index) => (
          <a.div key={itemsToShow[index].ID} style={style}>
            <BibliographyCard item={itemsToShow[index]} />
          </a.div>
        ))}
      </PostList>
    </Container>
  );
};

export default Bibliography;
