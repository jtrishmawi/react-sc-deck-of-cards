import styled from "styled-components";
import { Pips } from "./Pips";
import { Face } from "./Face";

export const suits = ["clubs", "diamonds", "hearts", "spades"] as const;
export const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
] as const;

export type CardProps = {
  suit: typeof suits[number];
  value: typeof values[number];
};

const Container = styled.div<{ suit: CardProps["suit"] }>`
  flex: 0 0 auto;
  width: 20vmin;
  aspect-ratio: 58/89;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-columns: 15fr 70fr 15fr;
  padding: 1vmin;
  /* color: ${({ suit }) =>
    ["diamonds", "hearts"].includes(suit) ? "red" : ""}; */
`;

const Value = styled.div<{ isBottom?: boolean }>`
  font-weight: bold;
  font-size: 2.5vmin;
  text-align: center;
  transform: ${(props) => (props.isBottom ? "rotate(180deg)" : "none")};
  width: 2.5vmin;
`;

export const Card = ({ suit, value }: CardProps) => {
  return (
    <Container suit={suit}>
      <Value>{value}</Value>
      <Pips number={parseInt(value, 10)} value={value} suit={suit} />
      <Face value={value} suit={suit} />
      <Value isBottom>{value}</Value>
    </Container>
  );
};
