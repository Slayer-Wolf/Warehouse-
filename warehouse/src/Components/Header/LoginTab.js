import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography, Grid } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}
export default function LoginTab() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					centered
				>
					<Tab label="Login" {...a11yProps(0)} />
					<Tab label="Register" {...a11yProps(1)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Grid container justifyContent="center">
					<Login />
				</Grid>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Grid container justifyContent="center">
					<Register />
				</Grid>
			</TabPanel>
		</Box>
	);
}
