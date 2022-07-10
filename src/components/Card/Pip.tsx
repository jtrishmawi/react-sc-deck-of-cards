import styled from "styled-components";
import { Clubs, Diamonds, Hearts, Spades } from "./suits";

type PipProps = {
  suit: Suit;
  i: number;
};

const Container = styled.div<PipProps>`
  width: 100%;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  grid-row: span 2;
  fill: ${({ suit, theme }) =>
    ["diamonds", "hearts"].includes(suit)
      ? theme.colors.red
      : theme.colors.black};
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
  return (
    <Container i={i} suit={suit}>
      {renderPip()}
    </Container>
  );
};
