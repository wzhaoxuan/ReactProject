import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    /* 
      This is an jsx syntax, not a html technically.
      jsx uses className instead of class is because class is reserved for html but the className will display as class in inspect.

      "exact" is a prop that will only render the component if the path is exactly the same as the path specified in the Route component.
    */ 
    <Router>
    <div className="App">
      {/* self-closing tag */}
      <Navbar /> 
      <div className="content">
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

// Export the component to allow it to be used somewhere outside
export default App;