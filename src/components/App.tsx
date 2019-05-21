import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route } from 'react-router';
import { Layout, Breadcrumb } from 'antd';

import Header from './Header';
import Sidebar from './Sidebar';

import history from 'Utils/history';

// pages
import Home from 'Views/Home';
import Skills from 'Views/Skills';
import Pages from 'Views/Pages';
import WorkList from 'Views/Work/List';
import NewWork from 'Views/Work/New';
import EditWork from 'Views/Work/Edit';

const layoutStyles = {
  margin: '24px 16px',
  maxHeight: '100%',
  overflow: 'auto',
  padding: 24,
  background: '#fff',
  minHeight: 280,
};

const App: React.FC = () => {
  // const a: number = 18;

  return (
    <Router history={history}>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
        <Layout>
          <Header />
          <Layout.Content style={layoutStyles}>
            <>
              <Route path="/" exact component={Home} />
              <Route path="/skills" component={Skills} />
              <Route path="/pages" component={Pages} />
              <Route path="/works" exact component={WorkList} />
              <Route path="/works/edit/:id" component={EditWork} />
              <Route path="/works/new-work" component={NewWork} />
            </>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default hot(App);
