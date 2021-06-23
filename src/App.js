import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {StepOne} from './components/steps/StepOne';
import {StepTwo} from './components/steps/StepTwo';
import {TheSummary} from './components/steps/TheSummary';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={StepOne} />
      <Route exact path="/step-2" component={StepTwo} />
      <Route exact path="/summary" component={TheSummary} />
    </Router>
  );
}

export default App;
