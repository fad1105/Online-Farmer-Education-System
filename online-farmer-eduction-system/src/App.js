
import './App.css';
import AdminHome from './components/Admin/AdminHome';
import Home from './components/Farmer/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";    

function App() {
  return (
    <div>
      <Router>
        <div>
        <Switch>
          <Route path="/admin/">
            <AdminHome/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </div>
      </Router>

    </div>
  );
}
export default App;
