import React from "react";
import { Grid, Typography, Box, Stack, Paper, Divider } from "@mui/material";

const VeriCard = (props) => {
	const { data } = props;
	return (
		<>
			<Paper
				elevation={3}
				sx={{
					width: "250px",
					height: "400px",
					padding: "20px",
					borderRight: "5px solid #de9e48",
				}}
			>
				<Grid container justifyContent="space-between" xs={10}>
					<Grid item xs={4}>
						<img src={data.img1} alt="sf" style={{ width: "50px" }} />
					</Grid>
					<Grid item xs={4}>
						<img src={data.img2} alt="sf" style={{ width: "70px" }} />
					</Grid>
					<Grid Container justifyContent="flex-start">
						<Grid container justifyContent="flex-start">
							<Typography align="left" variant="h5" sx={{ fontWeight: "bold" }}>
								{data.tag}
							</Typography>
						</Grid>
						<Grid container py={1} justifyContent="flex-start">
							<Grid item xs={12}>
								<Typography variant="body1" color="silver" align="left">
									{data.para}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};
export default VeriCard;
