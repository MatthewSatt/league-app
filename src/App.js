import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PlayerSearch from "./components/PlayerSearch";
import ChampionSearch from "./components/ChampionSearch";
import NavBar from "./components/NavBar";
import SingleChampion from "./components/SingleChampion";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>

        <Route path="/players">
          <PlayerSearch />
        </Route>

        <Route path="/champions">
          <ChampionSearch />
        </Route>

        <Route path="/champion/:name">
          <SingleChampion />
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
