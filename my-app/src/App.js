import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/toggle/Toggle";
import Game from "./components/tictactoe/Game";

function App() {
  const name = "nghianh98";
  return (
    <div className="App">
      <YoutubeList>{name} render using props.children</YoutubeList>
      <Toggle></Toggle>
      <Game></Game>
    </div>
  );
}

export default App;
