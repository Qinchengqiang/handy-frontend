import React, { Component } from "react";
import "./SideNav.scss";
import { Menu } from "antd";

const categories = [
  { name: "Best Sellers", url: "" },
  { name: "Air Conditioners", url: "" },
  {
    name: "Bedroom",
    url: "",
    children: [
      { name: "Beds", url: "" },
      { name: "Nightstands", url: "" },
      { name: "Dressers", url: "" },
      { name: "Armoires", url: "" }
    ]
  },
  {
    name: "Living Room",
    url: "",
    children: [
      { name: "TV Stands & Mounts", url: "" },
      { name: "Coffee Tables", url: "" },
      { name: "Bookshelves", url: "" }
    ]
  },
  {
    name: "Dining Room",
    url: "",
    children: [
      { name: "Dining Sets", url: "" },
      { name: "Dining Tables", url: "" },
      { name: "Dining Chairs", url: "" }
    ]
  },
  {
    name: "Kitchen",
    url: "",
    children: [
      { name: "Kitchen Islands", url: "" },
      { name: "Bar Stools", url: "" }
    ]
  },
  { name: "Gift Cards", url: "" },
  {
    name: "Office",
    url: "",
    children: [
      { name: "Desks", url: "" },
      { name: "Desk Chairs", url: "" }
    ]
  },
  {
    name: "Wall Decor",
    url: "",
    children: [
      { name: "Mirrors", url: "" },
      { name: "Shelves", url: "" }
    ]
  },
  {
    name: "Lighting",
    url: "",
    children: [
      { name: "Chandeliers", url: "" },
      { name: "Ceiling Fans", url: "" }
    ]
  },
  {
    name: "Outdoor",
    url: "",
    children: [
      { name: "Grills", url: "" },
      { name: "Outdoor Lounge", url: "" },
      { name: "Outdoor Dining", url: "" }
    ]
  },
  {
    name: "Smart Home",
    url: "",
    children: [
      { name: "Hubs", url: "" },
      { name: "Locks", url: "" },
      { name: "Security Cameras", url: "" },
      { name: "Thermostats", url: "" }
    ]
  },
  { name: "Cleaning packs", url: "" }
];

const { SubMenu } = Menu;

export default class SideNav extends Component {
  render() {
    return (
      <div className="sidenav">
          <h1 className="title">All Categories</h1>
          <Menu mode="inline">
            <Menu.Item key="1">Best Sellers</Menu.Item>
            <Menu.Item key="2">Air Conditioners</Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>Bedroom</span>
                </span>
              }
            >
              {categories[2].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <span>Living Room</span>
                </span>
              }
            >
              {categories[3].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu><SubMenu
              key="sub3"
              title={
                <span>
                  <span>Dining Room</span>
                </span>
              }
            >
              {categories[4].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu><SubMenu
              key="sub4"
              title={
                <span>
                  <span>Kitchen</span>
                </span>
              }
            >
              {categories[5].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu>
            <Menu.Item key='3'>Gift Cards</Menu.Item>
            <SubMenu
              key="sub5"
              title={
                <span>
                  <span>Office</span>
                </span>
              }
            >
              {categories[7].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu><SubMenu
              key="sub6"
              title={
                <span>
                  <span>Wall Decor</span>
                </span>
              }
            >
              {categories[8].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu><SubMenu
              key="sub7"
              title={
                <span>
                  <span>Lighting</span>
                </span>
              }
            >
              {categories[9].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu><SubMenu
              key="sub8"
              title={
                <span>
                  <span>Outdoor</span>
                </span>
              }
            >
              {categories[10].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu><SubMenu
              key="sub9"
              title={
                <span>
                  <span>Smart Home</span>
                </span>
              }
            >
              {categories[11].children.map((item, i) => (
                <Menu.Item key={item.name}>{item.name}</Menu.Item>
              ))}
            </SubMenu>
          </Menu>
      </div>
    );
  }
}
