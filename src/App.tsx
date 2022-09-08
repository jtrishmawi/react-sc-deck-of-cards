import { Layout } from "./components/Layout";
import { Deck } from "./components/Deck";
import styled from "styled-components";
import { useState } from "react";

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  background: white;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Header = styled.h1`
  text-align: center;
  padding-block: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  flex-grow: 1;
`;

export default function App() {
  const [isShuffled, setIsShuffled] = useState(false);
  return (
    <Layout>
      <Navbar>
        <Header>React & Styled components deck of cards</Header>
        <label htmlFor="shuffle">
          <input
            type="checkbox"
            id="shuffle"
            checked={isShuffled}
            onChange={(e) => setIsShuffled(e.currentTarget.checked)}
          />
          Shuffled Game
        </label>
      </Navbar>
      <Deck isShuffled={isShuffled} />
    </Layout>
  );
}
