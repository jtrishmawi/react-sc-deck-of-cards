import styled from "styled-components";
import { CardProps } from "./index";

type FaceProps = {
  value: CardProps["value"];
  suit: CardProps["suit"];
};

const Letter = styled.div`
  font-size: 8vmin;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${Letter} {
    flex: 1 auto;
  }

  ${Letter}:nth-child(2) {
    transform: rotate(180deg);
  }
`;

export const Face = ({ value, suit }: FaceProps) => {
  if (value === "A" || !isNaN(parseInt(value, 10))) return null;

  return (
    <Container>
      <Letter>{value}</Letter>
      <Letter>{value}</Letter>
    </Container>
  );
};
