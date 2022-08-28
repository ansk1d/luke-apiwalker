import './App.css';
import Survey from './components/Survey';
import People from './components/People';
import Starships from './components/Starships';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/people/:id">
              <Survey/>
              <People />
            </Route>
          <Route  path="/planets/:id">
            <Survey/>
            <Planets />
          </Route>
          <Route  path="/starships/:id">
            <Survey/>
            <Starships />
          </Route>
          <Route exact path="/">
            <Survey />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
