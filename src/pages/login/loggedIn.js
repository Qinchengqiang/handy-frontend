import { Menu, Dropdown } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {Icon} from 'antd'
import Avatar from "./account_icon.svg";

const menu = (
	<Menu>
		<Menu.Item>
			<Link to="/users/services">My Services</Link>
		</Menu.Item>
		<Menu.Item>
			<Link to="/users/edit">My Account</Link>
		</Menu.Item>
		<Menu.Item>
			<Link to="/users/orders">My orders</Link>
		</Menu.Item>
		<Menu.Item>
			<Link to="/login">Logout</Link>
		</Menu.Item>
	</Menu>
);

const loggedIn = () => {
	const [nickname, setNickname] = useState("");
	const asyncLocalStorage = {
		setItem: function (key, value) {
			return Promise.resolve().then(function () {
				localStorage.setItem(key, value);
			});
		},
		getItem: function (key) {
			return Promise.resolve().then(function () {
				return localStorage.getItem(key);
			});
		},
	};
	asyncLocalStorage.getItem("localuser").then((value) => {
		// console.log(value);
		// return value;
		setNickname(value);
	});

	return (
		<>
			<Dropdown
				overlay={menu}
				style={{
					display: "inline-flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<a
					className="ant-dropdown-link"
					onClick={(e) => e.preventDefault()}
					style={{ fontSize: "20px", color: "navyblue" }}
				>
					{nickname.split(" ").reverse()[0]}
					{/* <Icon type="user" className="assembly-form_prefix" style={{ color: "#BABBBD" , verticalAlign: 'middle'}}/> */}
					<img
						src={Avatar}
						style={{ marginLeft: "3px", marginRight: "20px" }}
					/>
				</a>
			</Dropdown>
		</>
	);
};

export default loggedIn;
