import React, { useEffect, useState } from "react";
import { Header } from "./TimelineHeader.styles";
import { useTrail, config } from "@react-spring/web";
import { ListedPost } from "../../lib/types";

interface Props {
  post: ListedPost;
  activePost: ListedPost;
  children: React.ReactElement[];
}

const TimelineHeader: React.FC<Props> = ({ post, activePost, children }) => {
  const [isActive, setIsActive] = useState(false);
  const lines = React.Children.toArray(children);

  const trail = useTrail(lines.length, {
    to: { opacity: isActive ? 1 : 0 },
    from: { opacity: isActive ? 0 : 1 },
    config: config.molasses,
  });

  useEffect(() => {
    if (post.title === activePost.title) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activePost, post.title]);

  return (
    <>
      {trail.map((props, index) => (
        <Header style={props} key={index}>
          {lines[index]}
        </Header>
      ))}
    </>
  );
};

export default TimelineHeader;
