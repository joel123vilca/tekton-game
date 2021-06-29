
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConfigGame from './components/configuration/configGame';
import GameBoard from './components/game/game';
import History from './components/history/history';
import {NavBar} from './components/navBar/NavBar';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/" component={ConfigGame} exact />
            <Route path="/game-board" component={GameBoard} exact />
            <Route path="/history-plays" component={History} exact />
          </Switch>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  );
}
export default App;
