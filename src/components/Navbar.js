import React from "react";
import MenuDrawer from "./MenuDrawer";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="nav-bar">
			<div className="menu-icon">
				<MenuDrawer />
			</div>
			<div className="name_title">
				<h1>
					News Desk <span>By d4r3d3v1l</span>
				</h1>
			</div>
		</div>
	);
};

export default Navbar;
