import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const TestimonyCard = (props) => {
	const { data } = props;
	return (
		<>
			<Box sx={{ width: "250px", heigth: "400px" }}>
				<Grid container py={3}>
					<Typography variant="body" color="#808080" align="left">
						{data.details}
					</Typography>
					<Grid py={3} item xs={4} align="left">
						<img src={data.logo} alt="new" style={{ width: "80px" }} />
					</Grid>
					<Grid py={3} item xs={8}>
						<Typography variant="body2" color="#808080">
							By
							<span
								style={{ fontWeight: "bold", color: "#855330", padding: "5px" }}
							>
								{data.writer}
							</span>
						</Typography>
						<Typography variant="body2" color="#808080" align="left">
							{data.position}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default TestimonyCard;
