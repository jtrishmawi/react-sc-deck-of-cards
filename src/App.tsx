import { GlobalStyles } from "./styles/GlobalStyles";
import { Layout } from "./components/Layout";
import { Deck } from "./components/Deck";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
  padding-block: 1rem;
  font-family: "Cinzel";
`;

export default function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Header>React & Styled components deck of cards</Header>
      <Deck />
    </Layout>
  );
}
