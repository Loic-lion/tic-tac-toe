import { useState } from "react";

export default function Square({ value, onSquareClick }) {
  return (
    <button className="game__board__row__square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
