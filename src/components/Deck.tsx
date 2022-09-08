import { useMemo } from "react";
import styled from "styled-components";
import { shuffle } from "../utils/shuffle";
import { Card } from "./Card";

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

const cardDeck = {
  suits: ["♠️", "♥", "♦", "♣"] as Suit[],
  court: ["J", "Q", "K", "A"],
  values: function () {
    return {
      [Symbol.iterator]: function* () {
        for (let i = 2; i <= 10; i++) yield i.toString() as Value;
        for (let c of cardDeck.court) yield c as Value;
      },
    };
  },
  [Symbol.iterator]: function* () {
    for (let suit of this.suits) {
      for (let value of this.values())
        yield { suit, value: value.toString() } as Card;
    }
  },
};

export const Deck = ({ isShuffled = false }: Props) => {
  const cards = useMemo(() => shuffle([...cardDeck]), [isShuffled]);

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
          {cardDeck.suits.map((suit) => (
            <SuitContainer key={suit}>
              {[...cardDeck.values()].map((value) => (
                <Card key={`${suit}${value}`} suit={suit} value={value} />
              ))}
            </SuitContainer>
          ))}
        </UnshuffledDeckContainer>
      )}
    </>
  );
};
