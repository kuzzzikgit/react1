import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Layout from './components/layout/Layout';
import Form from './app/registaration/Form';

import './index.scss';

ReactDOM.render(
    <BrowserRouter>
        <Layout>
            <Route exact path='/' component={Form}/>
        </Layout>
    </BrowserRouter>,
    document.getElementById('root')
);