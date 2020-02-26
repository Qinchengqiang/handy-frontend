import React from "react";
import {Layout, Menu, Icon} from "antd";
import "./CleaningIndex.css";
import './CleaningLanding';
import CleaningLanding from "./CleaningLanding";

const { Header, Content, Footer } = Layout;

const CleaningIndex = function() {
  return (
    <Layout>
      <Header style={{ background: "white" }}>
        <div className="logo">
          <svg height="100%" viewBox="0 0 32 23">
            <path
              d="        M22.472 6.592l-2.365 0.503v6.82l2.356-0.501c1.969-0.419
        3.285-1.996 3.285-4.104-0-2.106-1.316-3.134-3.276-2.718zM24.229
        9.633c0 1.367-0.819 2.147-1.822 2.36l-0.847 0.18-0-3.954
        0.847-0.18c1.003-0.213 1.822 0.228 1.822 1.594zM14.59 8.268l-1.443
        0.307 0 6.82 1.443-0.307v-4.329l2.819 3.73 1.444-0.307v-6.82l-1.444
        0.307v4.33l-2.819-3.731zM6.252 13.445c0 2.106 1.316 3.135 3.276
        2.718l2.365-0.503v-6.82l-2.356 0.501c-1.969 0.419-3.285 1.998-3.285
        4.104zM9.593 10.764l0.847-0.181v3.954l-0.847 0.18c-1.003
        0.213-1.822-0.228-1.822-1.594s0.819-2.146 1.822-2.359zM30.547 9.029c-0
        0.904-0.483 1.459-1.238 1.62s-1.238-0.19-1.238-1.094v-4.153l-1.453
        0.309v4.22c0 1.783 1.197 2.469 2.691 2.152 0.447-0.095 0.867-0.271
        1.238-0.516 0 0 0 1.143 0 1.525v0c0 0.913-0.592 1.779-1.581
        1.989l-28.965 6.157v1.519l29.378-6.244c1.64-0.349 2.621-1.784
        2.621-3.297v-8.647l-1.453 0.309 0 4.153zM1.453 13.727c0-0.904
        0.483-1.459 1.237-1.62s1.238 0.189 1.238
        1.094v4.153l1.453-0.309v-4.22c0-1.782-1.197-2.469-2.691-2.151-0.447
        0.096-0.867 0.271-1.237 0.516 0 0 0-1.145 0-1.526 0-0.913 0.592-1.778
        1.581-1.989l28.965-6.157-0-1.519-29.378 6.245c-1.64 0.348-2.621
        1.784-2.621 3.297v8.647l1.453-0.309v-4.153z
"
              fill="#00cded"
            />
          </svg>
        </div>
        <Menu
          mode="horizontal"
          selectedKeys="aboutus"
          style={{ lineHeight: "64px" }}
        >
          <Menu.SubMenu
            title={
              <span className="submenu-title-wrapper">
                All Services
                <Icon type="down" />
              </span>
            }
          >
            <Menu.ItemGroup title="Cleaning">
              <Menu.Item key="homecleaning">Home Cleaning</Menu.Item>
              <Menu.Item key="moveoutcleaning">Move Out Cleaning</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Handyman">
              <Menu.Item key="genhandyman">General Handyman</Menu.Item>
              <Menu.Item key="genplumbing">General Plumbing</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
          <Menu.Item key="aboutus">About Us</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div style={{ background: "white", padding: 0, minHeight: 500 }}>
            <CleaningLanding/>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Handy App ©2020 JR Academy{" "}
      </Footer>
    </Layout>
  );
};

export default CleaningIndex;
