import React from "react";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/toggle/Toggle";
import Game from "./components/tictactoe/Game";
import "./App.css";
import GameWithReducer from "./components/tictactoe/GameWithReducer";

function App() {
  const name = "nghianh98";
  return (
    <div className="App">
      <YoutubeList>{name} render using props.children</YoutubeList>
      <Toggle></Toggle>
      <Game></Game>
      <GameWithReducer></GameWithReducer>
    </div>
  );
}

export default App;

