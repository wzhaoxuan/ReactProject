import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    /* 
      This is an jsx syntax, not a html technically.
      jsx uses className instead of class is because class is reserved for html but the className will display as class in inspect.
    */ 
    <Router>
    <div className="App">
      {/* self-closing tag */}
      <Navbar /> 
      <div className="content">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

// Export the component to allow it to be used somewhere outside
export default App;