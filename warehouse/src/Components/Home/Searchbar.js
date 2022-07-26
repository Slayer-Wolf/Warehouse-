import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, Grid, Typography, Box, Paper, styled } from "@mui/material";
import ForSale from "./ForSale";
import ForLease from "./ForLease";

// Tabs
const CustomTabs = styled((props) => <Tabs {...props} />)({
	"& .MuiTabs-indicator": {
		display: "none",
		padding: "0",
	},
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		color: "white",
		fontSize: "15px",

		"&.Mui-selected": {
			color: "black",
			backgroundColor: "white",
			borderRadius: "8px",
		},
		"&.Mui-focusVisible": {
			backgroundColor: "rgba(100, 95, 228, 0.32)",
		},
	}),
);

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
				<Box>
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

function Searchbar() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Grid container justifyContent="center" py={3}>
				<Grid item xs={12}>
					<Box
						sx={{
							borderBottom: 1,
							borderRadius: "8px",
							borderRight: 1,
							width: "50%",
							borderColor: "divider",
							"&.MuiBox-root": {
								padding: "0",
							},
						}}
					>
						<CustomTabs
							sx={{
								background: "Transparent",
								color: "white",
								fontWeight: "bold",
							}}
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<CustomTab label="For Sale" {...a11yProps(0)} />
							<CustomTab label="To Lease" {...a11yProps(1)} />
						</CustomTabs>
					</Box>
					<TabPanel value={value} index={0}>
						<ForSale />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<ForLease />
					</TabPanel>
				</Grid>
			</Grid>
		</>
	);
}

export default Searchbar;
