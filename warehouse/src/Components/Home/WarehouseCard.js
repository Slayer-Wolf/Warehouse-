import * as React from "react";
import {
	Card,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Grid,
} from "@mui/material";
import WarehouseData from "../../assets/WarehouseData";
export default function WarehouseCard(props) {
	const { data } = props;
	console.log(data, "data");
	return (
		<>
			{WarehouseData.map((ele) => {
				return (
					<>
						<Card p={5} sx={{ maxWidth: 400, width: "300px" }}>
							<CardMedia
								component="img"
								height="140"
								image={ele.img}
								alt="green iguana"
							/>
							<CardContent>
								{Object.entries(ele)
									.slice(2)
									.map(([key, val]) => (
										<Grid container justifyContent="center" xs={12}>
											<Grid container justifyContent="space-between" xs={5}>
												<Typography key={key}> {key} </Typography>
											</Grid>
											<Grid container justifyContent="space-between" xs={3}>
												<Typography> : </Typography>
											</Grid>
											<Grid container justifyContent="space-between" xs={4}>
												<Typography> {val} </Typography>
											</Grid>
										</Grid>
									))}
							</CardContent>

							<Button
								size="large"
								sx={{
									width: "100%",
									color: "white",
									backgroundColor: "#de9e48",
								}}
							>
								Share
							</Button>
						</Card>
					</>
				);
			})}
		</>
	);
}
