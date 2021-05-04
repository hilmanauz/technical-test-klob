import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/navbar'
import Home from './pages/home'
import GroupList from './pages/group-list'
import GroupDetail from './pages/group-detail'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/detail/:title/:id">
          <GroupDetail />
        </Route>
        <Route path="/:title">
          <GroupList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
