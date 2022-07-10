import styled from "styled-components";
import { CardProps } from "./index";
import { Pip } from "./Pip";
import { cardStyles } from "../../styles/cards";

type PipsProps = {
  number: number;
  value: CardProps["value"];
  suit: CardProps["suit"];
};

const Container = styled.div<{ number: number }>(({ number }) => {
  let styles = `
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(3, calc(13vmin / 3));
  grid-template-rows: repeat(8, 1fr);
  width: 100%;
  grid-auto-flow: column;
  ${cardStyles[number - 1]}
  `;
  return styles;
});

export const Pips = ({ number, value, suit }: PipsProps) => {
  if (value === "A") number = 1;
  else if (isNaN(number)) return null;

  const pips = [];
  for (let i = 0; i < number; i++) {
    pips.push(<Pip key={i + suit} suit={suit} i={i} />);
  }

  return <Container number={number}>{pips}</Container>;
};
