import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tab, Tabs, Grid } from "@mui/material";
import SubCard from "./SubCard";
import { styled } from "@mui/material/styles";
import newData from "../assets/Data";
import ExcelReader from "./ExcelReader";
const CustomTabs = styled((props) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "#fcf1e2",
	},
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		color: "#de9e48",
		padding: "14px 22px",
		fontSize: "15px",
		fontWeight: "bold",

		"&.Mui-selected": {
			color: "white",
			backgroundColor: "#de9e48",
			borderRadius: "8px",
		},
		"&.Mui-focusVisible": {
			backgroundColor: "rgba(100, 95, 228, 0.32)",
		},
	}),
);

const listingData = newData.map((ele) => ele);
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

export default function TabsMenu() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Grid container xs={12} justifyContent="center" sx={{ padding: "20px 0" }}>
			<Box sx={{ borderRadius: "8px", bgcolor: "#fcf1e2", padding: "5px" }}>
				<CustomTabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					centered
				>
					<CustomTab label="Listing" {...a11yProps(0)} />
					<CustomTab label="Leads/Deals" {...a11yProps(1)} />
					<CustomTab label="ExcelReader" {...a11yProps(2)} />
				</CustomTabs>
			</Box>

			<Box sx={{ width: "100%" }}>
				<TabPanel value={value} index={0}>
					<Grid
						xs={12}
						container
						justifyContent="center"
						alignItems="center"
						sx={{ padding: "20px 0" }}
					>
						<Box>
							<Typography
								component={"span"}
								variant="h2"
								sx={{
									fontSize: "24px",
									fontWeight: "700",
								}}
							>
								Benefits Of Listing
							</Typography>
						</Box>
					</Grid>
					<Grid container justifyContent="center">
						<Grid container xs={11}>
							<Grid container justifyContent="flex-start">
								{listingData[0].listing.map((ele, i) => {
									return (
										<Fragment key={i}>
											<Grid item>
												<SubCard data={ele} />
											</Grid>
										</Fragment>
									);
								})}
							</Grid>
						</Grid>
						<Grid container justifyContent="flex-start" xs={10}>
							<Box
								sx={{
									border: "#fff4e5 2px solid",
									borderRadius: "6px",
									padding: "22px 35px",
								}}
							>
								<Typography>
									# Free listings for new email and phone number subscriber
								</Typography>
								<Typography>
									* Lead verification to take 48-72 hours prior to going live.
									Verified tags to only be added post the verification is
									complete.
								</Typography>
								<Typography>^ For more than 5 listings in the year</Typography>
								<Typography>
									<span style={{ fontWeight: "bold", color: "#de9e48" }}>
										Notes:
									</span>
									Susbcription duration is different from the live duration due
									to several factors including lead verification, etc.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Grid
						xs={12}
						container
						justifyContent="center"
						alignItems="center"
						sx={{ padding: "20px 0" }}
					>
						<Box>
							<Typography
							component={'span'} 
								variant="h2"
								sx={{
									fontSize: "24px",
									fontWeight: "700",
								}}
							>
								Benefits For Dealer
							</Typography>
						</Box>
					</Grid>
					<Grid container ustifyContent="flex-start" alignItems="center">
						<Grid container justifyContent="center" direction="row" xs={12}>
							{listingData[1].Leads.map((ele, i) => {
								return (
									<Fragment key={i}>
										<Grid item>
											<SubCard data={ele} />
										</Grid>
									</Fragment>
								);
							})}
						</Grid>
						<Grid container justifyContent="center" xs={10}>
							<Box
								sx={{
									border: "#fff4e5 2px solid",
									borderRadius: "6px",
									padding: "22px 35px",
								}}
							>
								<Typography>
									# Free listings for new email and phone number subscriber
								</Typography>
								<Typography>
									* Post the duration of susbcription, if leads are untilized,
									they will be carried forward when the new plan is activated.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Grid container justifyContent="center" sx={{ margin: "50px 0" }}>
						<Grid container xs={10}>
							<ExcelReader />
						</Grid>
					</Grid>
				</TabPanel>
			</Box>
		</Grid>
	);
}
