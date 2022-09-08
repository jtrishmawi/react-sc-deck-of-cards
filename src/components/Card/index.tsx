import styled from "styled-components";
import { Pips } from "./Pips";
import { Face } from "./Face";

const Container = styled.div<{ suit: Suit }>`
  flex: 0 0 auto;
  width: 20vmin;
  aspect-ratio: 58/89;
  display: grid;
  grid-template-columns: 15fr 70fr 15fr;
  padding: 1vmin;
  color: ${({ suit, theme }) =>
    ["♦", "♥"].includes(suit) ? theme.colors.red : theme.colors.black};
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts[1]};
  border-radius: 0.5rem;
  outline: 1px solid ${({ theme }) => theme.colors.black};
`;

const Value = styled.div<{ isBottom?: boolean }>`
  font-weight: bold;
  font-size: 2.5vmin;
  text-align: center;
  transform: ${({ isBottom }) => (isBottom ? "rotate(180deg)" : "none")};
  width: 2.5vmin;
`;

export const Card = ({ suit, value }: Card) => {
  return (
    <Container suit={suit}>
      <Value>{value}</Value>
      <Pips number={parseInt(value, 10)} value={value} suit={suit} />
      <Face value={value} suit={suit} />
      <Value isBottom>{value}</Value>
    </Container>
  );
};
