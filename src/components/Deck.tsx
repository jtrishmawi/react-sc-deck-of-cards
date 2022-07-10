import styled from "styled-components";
import { Card, suits, values } from "./Card";

const DeckContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const SuitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Deck = () => {
  return (
    <DeckContainer>
      {suits.map((suit) => (
        <SuitContainer key={suit}>
          {values.map((value) => (
            <Card key={`${suit}${value}`} suit={suit} value={value} />
          ))}
        </SuitContainer>
      ))}
    </DeckContainer>
  );
};
