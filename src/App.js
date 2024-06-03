

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SurveyForm from './Components/SurveyForm';
import ViewResults from './Components/ViewResults';
import './index.css';

const App = () => {
    return (
        <Router>
          <div className="header">
                <h1 className="header-title">Survey</h1>
            </div>
            <nav style={{ display: 'flex', justifyContent: 'flex-end', padding: '1em' }}>
                <Link to="/filloutsurvey" style= {{ marginRight: '1em' }}>Fill Out Survey</Link>
                <Link to="/viewsurveyresults" style={{ marginRight: '1em' }}>View Survey Results</Link>
            </nav>

            <Switch>
                <Route path="/filloutsurvey" component={SurveyForm} />
                <Route path="/viewsurveyresults" component={ViewResults} />
            </Switch>
        </Router>
    );
};

export default App;
