import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Contact from './Contact';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            

          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
