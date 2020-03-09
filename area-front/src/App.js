import React from 'react';
import PropTypes from "prop-types";
import { CookiesProvider } from 'react-cookie';
import { Router, Route, Switch } from 'react-router-dom';
import { withCookies } from 'react-cookie';

import history from './history';
import Authentification from './authentification';
import Account from './account';
import Params from './params';
import Dashboard from './dashboard';


class App extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: [],
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = value => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked : newChecked,
    })
    this.props.cookies.set("params", newChecked.toString());
  };


  render() {

    return (
        <CookiesProvider>
          <Router history={history}>
            <Switch>
            <Route
              path='/account'
              render={(props) => <Account {...props} />}
            />
            <Route
              exact path='/'
              render={(props) => <Authentification {...props} />}
            />
            <Route
              path='/params'
              render={(props) => <Params {...props}handleToggle={this.handleToggle} state={this.state} cookies={this.props.cookies}/>}
            />
            <Route
              path='/dashboard'
              render={(props) => <Dashboard {...props} state={this.state} cookies={this.props.cookies}/>}
            />
            </Switch>
          </Router>
        </CookiesProvider>
      );
    }
}

export default withCookies(App);