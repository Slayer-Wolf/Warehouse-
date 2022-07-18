import React from "react";
import Banner from "../Components/Banner";
import { Box, Grid, TextField, Button, Typography, Stack } from "@mui/material";
import VeriCard from "../Components/verification/VeriCard";
import Girl from "../assets/aboutus.jpg";
import Veri from "../assets/Veri";
import Count from "../assets/Count";
import Counter from "../Components/verification/Counter";
const data = {
	url: "https://millionsquarefeet.in/wp-content/uploads/2021/10/Verification-Philosophy.jpg",
	title: "Verification Philosophy",
};

const Philosophy = () => {
	return (
		<>
			<Banner data={data} />
			<Grid container justifyContent="center" xs={12} py={5}>
				<Grid container xs={10} justifyContent="space-around">
					<Grid item xs={7}>
						<Typography variant="h3" sx={{ fontWeight: "bold" }}>
							Why is verification so important?
						</Typography>
						<Box sx={{ padding: "5px" }}>
							<Typography variant="subtitle1" color="#808080">
								Before finalising a warehouse, it is important to do background
								research and assess other vital information to make sure that
								there is a systematic flow of work. Right from finalising a
								perfect storage space to tedious paperwork and legal
								verification, we are completely invested so that your can
								experience be quick and hassle-free.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={5}>
						<img
							style={{
								width: "50%",
							}}
							src={Girl}
							alt="girl "
						/>
					</Grid>
				</Grid>
			</Grid>
			{/* verification Process */}
			<Grid container justifyContent="center" py={5}>
				<Grid container justifyContent="center" xs={12}>
					<Grid container justifyContent="center" xs={10} py={3}>
						<Typography variant="h3" sx={{ fontWeight: "bold" }}>
							Our Verification Proces
						</Typography>
					</Grid>
					<Grid container justifyContent="center" spacing={3}>
						{Veri.map((item) => {
							return (
								<Grid align="center" item>
									<VeriCard data={item} />
								</Grid>
							);
						})}
					</Grid>
				</Grid>
			</Grid>
			{/* Counter */}
			<Grid container justifyContent="center" py={4} xs={12}>
				<Grid
					container
					justifyContent="center"
					xs={10}
					spacing={2}
					py={4}
					bgcolor="red"
				>
					{Count.map((item) => {
						return (
							<>
								<Grid item align="center">
									<Counter data={item} />
								</Grid>
							</>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
};

export default Philosophy;
