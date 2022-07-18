import React from "react";
import {
	Typography,
	Paper,
	Stack,
	Card,
	CardMedia,
	CardContent,
} from "@mui/material";

const DataCard = (props) => {
	const { data } = props;
	return (
		<>
			<Paper
				elevation={1}
				sx={{
					padding: "15px",
					position: "relative",
					width: "100px",
					height: "100px",
					left: "25px",
					top: "25px",
				}}
			>
				<img
					src={data.img}
					style={{
						width: "70px",
						height: "70px",
					}}
				/>
			</Paper>

			<Card
				raised={true}
				sx={{
					maxWidth: 400,
					width: "350px",
					height: "300px",
					backgroundColor: "#fcf1e2",
					padding: "20px",
					boxShadow: "#0000001a 0 0 14px",
				}}
			>
				<CardContent>
					<Typography
						py={2}
						variant="h6"
						sx={{ color: "#7a431d", fontWeight: "bold" }}
					>
						{data.title}
					</Typography>
					<Typography py={4} variant="subtitle1" color="#808080">
						{data.detail}
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};

export default DataCard;
