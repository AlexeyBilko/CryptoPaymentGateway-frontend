import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './Pages/AuthPage/LoginPage';
import RegisterPage from './Pages/AuthPage/RegisterPage';
import Dashboard from './Pages/Dashboard';
import PublicPaymentPage from './Pages/PublicAccess/PublicPaymentPage';
import EarningsOverview from './Pages/Earnings/EarningsOverview';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/earnings" component={EarningsOverview} />
        <Route path="/paymentpage" component={PublicPaymentPage} />
        <Route path="/" exact component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
