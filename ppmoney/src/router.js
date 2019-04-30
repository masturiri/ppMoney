import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
// 我要借款页面
import LoanPage from './routes/LoanPage/LoanPage';
// 我要借出页面
import LendPage from './routes/LendPage/LendPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/loan" exact component={LoanPage} />
        <Route path="/lend" exact component={LendPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
