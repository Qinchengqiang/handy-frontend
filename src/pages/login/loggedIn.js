import { Menu, Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const menu = (
	<Menu>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="">
				My Account
			</a>
		</Menu.Item>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="">
				My service
			</a>
		</Menu.Item>
		<Menu.Item>
			<Link to="/login">Logout</Link>
		</Menu.Item>
	</Menu>
);

const loggedIn = () => {
	const user = localStorage.getItem("localuser");
	return (
		<Dropdown overlay={menu}>
			<a
				className="ant-dropdown-link"
				onClick={e => e.preventDefault()}
				style={{ fontSize: "20px", color: "darkblue" }}
			>
				{user}
			</a>
		</Dropdown>
	);
};

export default loggedIn;
