import React, { Suspense, } from 'react';
import ReactDOM from 'react-dom';
import { Grommet, } from 'grommet';
import { Router, View, } from 'react-navi';
import './index.css';
// import theme from 'config/theme';
import * as serviceWorker from './serviceWorker';

import routes from './views/routes';
import Layout from './components/templates/Layout';

ReactDOM.render(
  <Grommet full>
    <Router routes={routes}>
      <Layout>
        <Suspense fallback={null}>
          <View />
        </Suspense>
      </Layout>
    </Router>
  </Grommet>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
