type Value =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K"
  | "A";

type Suit = "clubs" | "diamonds" | "hearts" | "spades";

type Card = {
  suit: Suit;
  value: Value;
};
