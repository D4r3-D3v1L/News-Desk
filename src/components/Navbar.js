import React from "react";
import MenuDrawer from "./MenuDrawer";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
	return (
		<div className="nav-bar">
			<div className="menu-icon">
				<MenuDrawer setCategory={setCategory} />
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
