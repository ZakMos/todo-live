// External deps
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Modules
import {getRandomFromArray} from './modules/helpers';
import {FILTERS} from './modules/constants';

// Views
import Home from './views/Home';
import NotFound from './views/NotFound';
import Help from './views/Help';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TodoHeader from './components/TodoHeader';

/**
 * A class to represent our main app content
 * @extends Component
 */
class App extends Component {

  randomTagline = getRandomFromArray([
    'This could be your wish list',
    'What do you want to do today?',
    'Get stuff done!',
    'Just do it!'
  ]);

  /**
   * A mothod called whenever a component is added or changed in the DOM
   * @return {Object} An object representing the html to render
   */
  render(){
    const filterOptions = Object.values(FILTERS).join('|');
    return (
      <Router>
        <Fragment>
          <Header />
          <article className="container">
            <TodoHeader tagline={this.randomTagline} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path={`/:filter(${filterOptions})`} component={Home} />
              <Route exact path="/help" component={Help} />
              <Route component={NotFound} />
            </Switch>
          </article>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
