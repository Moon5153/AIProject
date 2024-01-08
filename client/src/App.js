import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home"
import Results from "./components/Result"
import About from "./components/About"
import Help from './components/Help';
import RiskAssessment from './components/RiskAssessment';
import Error from "./components/Error"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/riskassess" exact component={RiskAssessment} />
        <Route path="/result" component={Results} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
