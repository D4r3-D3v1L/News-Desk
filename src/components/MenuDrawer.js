import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import categories from "../content/Category";

export default function TemporaryDrawer({ setCategory }) {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const handleCategory = (event, text) => {
		event.preventDefault();
		setCategory(text);
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem>Categories</ListItem>
			</List>
			<Divider />
			<List>
				{categories.map((text, index) => (
					<ListItem
						button
						key={text + index}
						onClick={(e) => {
							handleCategory(e, text);
						}}
					>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<React.Fragment key={"left"}>
				<Button onClick={toggleDrawer("left", true)}>
					<MenuOpenIcon />
				</Button>
				<Drawer
					anchor={"left"}
					open={state["left"]}
					onClose={toggleDrawer("left", false)}
				>
					{list("left")}
				</Drawer>
			</React.Fragment>
		</div>
	);
}
