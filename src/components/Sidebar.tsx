import * as React from 'react';
import { History } from 'history';
import { useState, useEffect } from 'react';
import { withRouter } from 'react-router';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

type Props = {
  history: History,
}

const Sidebar: React.FC<Props> = ({ history }) => {
  const [collabsed, setCollabsed] = useState(false);

  return (
    <Layout.Sider collapsible collapsed={collabsed} onCollapse={() => setCollabsed(!collabsed)}>
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        onClick={({ item, key }) => history.push(key)}
      >
        <Menu.Item key="/">
          <Icon type="home" />
          <span>Home</span>
        </Menu.Item>
        <Menu.Item key="/skills">
          <Icon type="thunderbolt" />
          <span>Skills</span>
        </Menu.Item>
        <Menu.Item key="/pages">
          <Icon type="switcher" />
          <span>Pages</span>
        </Menu.Item>
        <Menu.Item key="/works">
          <Icon type="folder-open" />
          <span>Works</span>
        </Menu.Item>
        <Menu.Item key="/about">
          <Icon type="info-circle" />
          <span>About</span>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Icon type="mail" />
          <span>Contact</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default withRouter(Sidebar);
