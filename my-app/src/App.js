import "./App.css";
import YoutubeList from "./components/Youtube/YoutubeList";
import Toggle from "./components/state/Toggle";

function App() {
  const name = "nghianh98";
  return (
    <div className="App">
      <YoutubeList>{name} render using props.children</YoutubeList>
      <Toggle></Toggle>
    </div>
  );
}

export default App;
