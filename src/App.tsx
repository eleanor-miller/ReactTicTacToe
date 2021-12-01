import React, { useState } from 'react'

export function App() {
  const [game, setGame] = useState({
    board: [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ],
    id: 42,
    winner: 'X',
  })

  function handleClickCell(row: number, column: number) {
    // console.log(`You clicked on row ${row} and column ${column}.`)
    // alternate for using an object to debug
    // console.log ({variable 1, variable 2, etc.})
    console.log({ row, column })
  }

  return (
    <div>
      <h1>
        Tic Tac Toe - <button>New</button>
      </h1>
      <ul>
        <li
          onClick={() => {
            handleClickCell(0, 0)
          }}
        >
          {game.board[0][0]}
        </li>
        <li
          onClick={() => {
            handleClickCell(0, 1)
          }}
        >
          {game.board[0][1]}
        </li>
        <li
          onClick={() => {
            handleClickCell(0, 2)
          }}
        >
          {game.board[0][2]}
        </li>
        <li
          onClick={() => {
            handleClickCell(1, 0)
          }}
        >
          {game.board[1][0]}
        </li>
        <li
          onClick={() => {
            handleClickCell(1, 1)
          }}
        >
          {game.board[1][1]}
        </li>
        <li
          onClick={() => {
            handleClickCell(1, 2)
          }}
        >
          {game.board[1][2]}
        </li>
        <li
          onClick={() => {
            handleClickCell(2, 0)
          }}
        >
          {game.board[2][0]}
        </li>
        <li
          onClick={() => {
            handleClickCell(2, 1)
          }}
        >
          {game.board[2][1]}
        </li>
        <li
          onClick={() => {
            handleClickCell(2, 2)
          }}
        >
          {game.board[2][2]}
        </li>
      </ul>
    </div>
  )
}
