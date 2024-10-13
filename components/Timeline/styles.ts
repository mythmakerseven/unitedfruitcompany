import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: black;
  color: white;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

type ButtonDirection = "up" | "down";

export const NavButton = styled.button<{
  isActive: boolean;
  direction: ButtonDirection;
}>`
  font-size: 3rem;
  width: 66px;
  height: 66px;
  position: fixed;
  color: white;
  background: rgba(243, 230, 187, 0.15);
  border-radius: 50%;
  border: none;
  left: calc(50vw - 33px);
  ${(props) => (props.direction === "down" ? "bottom: 20px;" : "top: 20px;")}
  z-index: 1000;
  transition: filter 0.75s;
  filter: opacity(${(props) => (props.isActive ? "1" : "0")});
  pointer-events: ${(props) => (props.isActive ? "auto" : "none")};

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
