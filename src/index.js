import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// assets
import './assets/css/normalize.css';
import './assets/css/index.scss';
import Background from './assets/img/bgdog.png'

// components
import {TheTopBar} from './components/TheTopBar'
import {StepOne} from './components/form/StepOne';
import {StepTwo} from './components/form/StepTwo';
import {TheSummary} from './components/form/TheSummary';
import {TheFooter} from './components/TheFooter'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <TheTopBar/>
      <div className="wrapper">
        <main>
          <div className="form">
            <Route exact path="/" component={StepOne} />
            <Route exact path="/step-2" component={StepTwo} />
            <Route exact path="/summary" component={TheSummary} />
          </div>
          <div className="form-picture">
            <img src={Background} alt="" />
          </div>
        </main>
        <TheFooter />
      </div>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
