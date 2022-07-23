import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PlayerSearch from "./components/PlayerSearch";
import ChampionSearch from "./components/ChampionSearch";
import NavBar from "./components/NavBar";
import SingleChampion from "./components/SingleChampion";
import OrderBy from "./components/OrderBy";
import ThemeProvider from "./components/Context";

function App() {
  return (
    <ThemeProvider>
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

          <Route path="/ranking">
            <OrderBy />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
