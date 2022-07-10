export const cardStyles = [
  // As
  `div {
    grid-column: 2;
    grid-row: 4 / span 2;
    transform: scale(2.5);
  }`,
  // 2
  `div {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
  div:nth-child(2) {
    grid-row: 7 / span 2;
  }`,
  // 3
  `div {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
  div:nth-child(2) {
    grid-row: 4 / span 2;
  }
  div:nth-child(3) {
    grid-row: 7 / span 2;
  }`,
  // 4
  `div:nth-child(2n + 1) {
    grid-column: 1;
  }
  div:nth-child(2n) {
    grid-column: 3;
  }
  div:nth-child(n + 3) {
    grid-row: 7 / span 2;
  }`,
  // 5
  `div:nth-child(-n+2) {
    grid-column: 1;
  }
  div:nth-child(2),
  div:last-child {
    grid-row: 7 / span 2;
  }
  div:nth-child(3) {
    grid-row: 4 / span 2;
    grid-column: 2;
  }
  div:nth-child(n+4) {
    grid-column: 3;
  }`,
  // 6
  `div:nth-child(2n + 1) {
    grid-column: 1;
  }
  div:nth-child(2n) {
    grid-column: 3;
  }
  div:nth-child(n + 3) {
    grid-row: 4 / span 2;
  }
  div:nth-child(n + 5) {
    grid-row: 7 / span 2;
  }`,
  // 7
  `div:nth-child(-n+2) {
    grid-column: 1;
  }
  div:nth-child(2),
  div:nth-child(6) {
    grid-row: 4 / span 2;
  }
  div:nth-child(3),
  div:nth-child(7) {
    grid-row: 7 / span 2;
  }
  div:nth-child(4) {
    grid-column: 2;
    grid-row: 2 / span 3;
  }
  div:nth-last-child(-n + 3) {
    grid-column: 3;
  }`,
  // 8
  `div:nth-child(-n+2) {
    grid-column: 1;
  }
  div:nth-child(2),
  div:nth-child(6) {
    grid-row: 4 / span 2;
  }
  div:nth-child(3),
  div:nth-child(7) {
    grid-row: 7 / span 2;
  }
  div:nth-child(4) {
    grid-column: 2;
    grid-row: 2 / span 3;
  }
  div:nth-last-child(-n + 3) {
    grid-column: 3;
  }
  div:nth-child(5) {
    grid-column: 2;
    grid-row: 5 / span 3;
  }`,
  // 9
  `div:nth-child(5) {
    grid-row: 4 / 6;
  }
  div:nth-child(n+6) {
    grid-column: 3;
  }`,
  // 10
  `div:nth-child(5) {
    grid-row: 2 / 4;
  }
  div:nth-child(6) {
    grid-row: 6 / 8;
  }
  div:nth-child(n+7) {
    grid-column: 3;
  }`
];
