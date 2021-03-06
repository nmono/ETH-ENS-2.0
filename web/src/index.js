import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './style/style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Web3Provider } from 'react-web3';
import { Redirect } from 'react-router';


import {
  Route,
  Router
} from 'react-router-dom'


import styles from './components/Styles.jsx'
import history from './components/history'


import TopBar from './components/TopBar'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import FAQ from './components/FAQ'
import Sell from './components/Sell'
import Search from './components/Search'





var injectTapEventPlugin = require("react-tap-event-plugin")
injectTapEventPlugin()

//require('roboto-fontface/css/roboto/roboto-fontface.css');

const PageRoute = ({ component: Component, path, sitePath, ...rest }) => (
  <Route {...rest} path={path} render={props => {
    return (
      <div className="inner-content">
        <TopBar />
          <div>
            <Component {...props} />
        </div>
      </div>
    );
  }}/>
)

  ReactDOM.render(
    <MuiThemeProvider  muiTheme={getMuiTheme(styles)}>
  {/*    <Web3Provider>*/}
      <Router history={history}>
        <Switch>
          <PageRoute sitePath="/list" path="/list" component={Search} />
          <PageRoute sitePath="/sell" path="/sell" component={Sell} />
          <PageRoute sitePath="/faq" path="/faq" component={FAQ} />
          <PageRoute sitePath="/" path="/" component={Search} />
          <Route component={() => (<Redirect to="/"/>)} />
       </Switch>
      </Router>
{/*    </Web3Provider>**/}
  </MuiThemeProvider>
  , document.getElementById('root'))
  registerServiceWorker()
