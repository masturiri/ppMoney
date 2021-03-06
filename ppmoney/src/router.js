import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Homepage from './routes/HomePage/HomePage';
import RegisterHome from './routes/RegisterHome/RegisterHome';
import LonginHome from './routes/LonginHome/LonginHome';
// 我要借款页面
import LoanPage from './routes/LoanPage/LoanPage';
// 我要借出页面
import LendPage from './routes/LendPage/LendPage'
import BrandNews from './routes/BrandNews/BrandNews'
import Sociology from './routes/Sociology/Sociology'
import forumPage from './routes/forumPage/forumPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/registerHome" exact component={RegisterHome} />
        <Route path="/longinHome" exact component={LonginHome} />
        <Route path="/loan" exact component={LoanPage} />
        <Route path="/lend" exact component={LendPage} />
        <Route path="/brand" exact component={BrandNews} />
        <Route path="/sociology" exact component={Sociology} />
        <Route path="/forumPage" exact component={forumPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
