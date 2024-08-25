import React, { useEffect, useRef, useState } from "react";
import {
  Collapsed,
  Expanded,
  ToggleButton,
  Flex,
} from "./ExpandableContent.styles";
import { ArrowDown } from "react-bootstrap-icons";

interface Props {
  flex: boolean;
  children: React.ReactElement | React.ReactElement[];
}

const ExpandableContent: React.FC<Props> = ({ flex, children }) => {
  const [expanded, setExpanded] = useState(false);

  const content = React.Children.toArray(children);

  const collapsedRef = useRef<HTMLDivElement>(null);

  const disableFocus = (element: HTMLElement) => {
    element.querySelectorAll("a").forEach((e) => (e.tabIndex = -1));
  };

  const displayContent = () => {
    if (expanded) {
      return <Expanded>{handleFlex(content)}</Expanded>;
    } else {
      return <Collapsed ref={collapsedRef}>{handleFlex(content)}</Collapsed>;
    }
  };

  const handleFlex = (children: ReturnType<typeof React.Children.toArray>) => {
    if (flex) {
      return <Flex>{children}</Flex>;
    } else {
      return children;
    }
  };

  // Disable tab focus on stuff that's inside a Collapsed div.
  useEffect(() => {
    if (!expanded && collapsedRef.current) {
      disableFocus(collapsedRef.current);
    }
  }, [expanded]);

  return (
    <>
      {displayContent()}
      {expanded ? (
        ""
      ) : (
        <ToggleButton onClick={() => setExpanded(true)}>
          <ArrowDown />
        </ToggleButton>
      )}
    </>
  );
};

export default ExpandableContent;
