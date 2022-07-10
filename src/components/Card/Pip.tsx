import styled from "styled-components";
import { CardProps } from "./index";
import { Clubs, Diamonds, Hearts, Spades } from "./suits";

type PipProps = {
  suit: CardProps["suit"];
  i: number;
};

const Container = styled.div<{ i: number }>`
  width: 100%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  grid-row: span 2;
  /* outline: 1px solid green;
  &::before {
    content: '${({ i }) => i}';
    position: absolute;
    color: white;
  } */
`;

export const Pip = ({ suit, i }: PipProps) => {
  const renderPip = () => {
    switch (suit) {
      case "clubs":
        return <Clubs />;
      case "diamonds":
        return <Diamonds />;
      case "hearts":
        return <Hearts />;
      case "spades":
        return <Spades />;
      default:
        return <>{suit}</>;
    }
  };
  return <Container i={i}>{renderPip()}</Container>;
};
