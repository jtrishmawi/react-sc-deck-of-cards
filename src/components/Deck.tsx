import { useMemo } from "react";
import styled from "styled-components";
import { shuffle } from "../utils/shuffle";
import { Card, suits, values } from "./Card";

const ShuffledDeckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: centrer;
  gap: 1rem;
  padding: 1rem;
`;

const UnshuffledDeckContainer = styled.div`
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

type Props = {
  isShuffled: boolean;
};

export const Deck = ({ isShuffled = false }: Props) => {
  const cards = useMemo(
    () =>
      shuffle(
        suits.flatMap((suit) =>
          values.map((value) => ({
            value,
            suit,
          }))
        )
      ),
    [isShuffled]
  );

  return (
    <>
      {isShuffled ? (
        <ShuffledDeckContainer>
          {cards.map(({ suit, value }) => (
            <Card key={`${suit}${value}`} suit={suit} value={value} />
          ))}
        </ShuffledDeckContainer>
      ) : (
        <UnshuffledDeckContainer>
          {suits.map((suit) => (
            <SuitContainer key={suit}>
              {values.map((value) => (
                <Card key={`${suit}${value}`} suit={suit} value={value} />
              ))}
            </SuitContainer>
          ))}
        </UnshuffledDeckContainer>
      )}
    </>
  );
};
