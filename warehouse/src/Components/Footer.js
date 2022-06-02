import React, { Fragment } from "react";
import {
	// Box,
	// Button,
	Grid,
	Typography,
	Divider,
	List,
	ListItemButton,
	ListItemText,
	ListItem,
} from "@mui/material";
import "./Footer.css";
import { styled } from "@mui/material/styles";

// custom Component

const NewList = styled(List)(({ theme }) => ({
	"& .MuiListItemText-primary": {
		"&:hover": {
			color: "#de9e48",
			background: "none",
		},
	},
}));

function Footer() {
	const but = [
		"Quick Links",
		"Home",
		"Warehouse",
		"Subscription Plan",
		"AboutUs",
		"Contact-us",
		"Login",
	];
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			style={{ backgroundColor: "#7A431D" }}
		>
			<Grid container xs={10} style={{ padding: "50px 0" }}>
				<Grid item xs={5}>
					<img
						src="http://millionsquarefeet.in/wp-content/uploads/2021/10/footerlogo.png"
						alt="banner"
					/>
					<Grid sx={{ padding: "30px 0" }}>
						<Typography variant="p" sx={{ color: "white", padding: "10px 0" }}>
							Find the perfect warehouse that fits your unique requirements.
						</Typography>
					</Grid>
				</Grid>
				<Grid xs={3}>
					{but.map((ele, i) => {
						return (
							<Fragment key={i}>
								<NewList>
									<ListItem disablePadding>
										<ListItemButton
											sx={{
												"&:hover": {
													background: "none",
												},
											}}
										>
											{ele === "Quick Links" ? (
												<ListItemText
													primary={
														<Typography
															style={{
																fontSize: "15px",
																color: "white",
																fontWeight: "bold",
																textTransform: "uppercase",
															}}
														>
															{ele}
														</Typography>
													}
												/>
											) : (
												<ListItemText
													primary={ele}
													primaryTypographyProps={{
														textTransform: "uppercase",
														fontSize: 15,
														fontWeight: "bold",
														color: "white",
													}}
												/>
											)}
										</ListItemButton>
									</ListItem>
								</NewList>
							</Fragment>
						);
					})}
				</Grid>
				<Grid item xs={4} sx={{}}>
					<Typography sx={{ color: "white", fontSize: "15px" }}>
						Manyata NXT Tower-1, Level 5, Embassy Manyata Business Park,
						<br />
						Nagavara, Bangalore 560 045, Karnataka, India <br /> +91 123 456
						7890  |  +91 123 456 7890 <br /> info@millionsquarefeet.in
					</Typography>
				</Grid>
			</Grid>

			<Grid
				container
				justifyContent="space-between"
				xs={10}
				sx={{ padding: "20px 0" }}
			>
				<Divider sx={{ padding: "5px 0", width: "100%" }} />
				<Grid container sx={{ padding: "30px 0" }}>
					<Grid item xs={8}>
						<Typography sx={{ color: "white" }}>
							© 2022 MILLION SQUARE FEET. ALL RIGHTS RESERVED.
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Typography sx={{ color: "white" }}>
							PRIVACY POLICY  |  TERMS & CONDITIONS
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Footer;
