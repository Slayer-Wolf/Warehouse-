import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
//styling

const Counter = (props) => {
	// label of counter
	// number to increment to
	// duration of count in seconds
	const { label, number, duration, pre } = props.data;

	// number displayed by component
	const [count, setCount] = useState("0");

	useEffect(() => {
		let start = 0;
		// first three numbers from props
		const end = parseInt(number.substring(0, 3));
		// if zero, return
		if (start === end) return;

		// find duration per increment
		let totalMilSecDur = parseInt(duration);
		let incrementTime = (totalMilSecDur / end) * 1000;

		// timer increments start counter
		// then updates count
		// ends if start reaches end
		let timer = setInterval(() => {
			start += 1;
			setCount(String(start) + number.substring(3));
			if (start === end) clearInterval(timer);
		}, incrementTime);

		// dependency array
	}, [number, duration]);

	return (
		<>
			<Grid container justifyContent="center">
				<Grid container justifyContent="center" xs={10} spacing={2}>
					<Grid item align="center">
						<Box sx={{ display: "block" }}>
							<Typography
								variant="h3"
								sx={{ fontWeight: "bold" }}
								color="#7a431d"
							>
								{count}
								{pre}
							</Typography>
							<Paper
								sx={{
									borderRadius: "0",
									backgroundColor: "#de9e48",
								}}
								raised
								elevation={0}
							>
								<Typography
									variant="h5"
									sx={{
										fontWeight: "bold",
										textTransform: "uppercase",
										padding: "20px",
									}}
									color="white"
								>
									{label}
								</Typography>
							</Paper>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Counter;
