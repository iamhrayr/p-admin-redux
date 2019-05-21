import * as React from "react";
import { useState } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const Header = () => {
  const [collapsed, setCollapse] = useState(false);

  return (
    <Layout.Header style={{ background: "#fff", padding: 0 }}>
      {/* <Icon
        className="trigger"
        type={collapsed ? "menu-unfold" : "menu-fold"}
        // onClick={this.toggle}
      /> */}
    </Layout.Header>
  );
};


export default Header;