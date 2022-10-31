import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Divider } from 'antd';

import 'antd/dist/antd.min.css';
import './App.css';

import LibVersion from './components/LibVersion';
import HelloModal from './components/HelloModal';

import MicroApp from './MicroApp'

import Home from './pages/Home';
const About = lazy(() => import('./pages/About'));

const RouteExample = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Divider type="vertical" />
        <Link to="/about">About</Link>
        <Divider type="vertical" />
        <Link to="/vue">vue</Link>
        <Divider type="vertical" />
        <Link to="/vue/about">vue about</Link>
      </nav>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default function App() {
  return (
    <div className="app-main">
      <LibVersion />
      <HelloModal />

      <Divider />

      <RouteExample />

      <MicroApp/>
    </div>
  );
}
