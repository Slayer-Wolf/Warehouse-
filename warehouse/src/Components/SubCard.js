import React from "react";
import {
	Button,
	CardContent,
	CardActions,
	Card,
	Divider,
	Grid,
	Typography,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SubCard = (props) => {
	const { data } = props;

	return (
		<>
			<Card
				sx={{
					backgroundColor: "#fff4e5",
					width: "350px",
					heigth: "468px",
					padding: "5px 0",
					borderRadius: "8px",
					margin: "20px 15px",
				}}
			>
			{data.header? <Grid xs={12} container justifyContent="center" alignItems="center">
					<Box
						sx={{
							borderRadius: " 0 0 5px 5px",
							backgroundColor: "#de9e48",
							padding: "5px 25px",
						}}
					>
						<Typography
							sx={{
								color: "white",
								fontWeight: "bold",
								textTransform: "uppercase",
							}}
						>
							{data.header}
						</Typography>
					</Box>
				</Grid>: "" }	
				<CardContent>
					<Grid container>
						<Grid container xs={10}>
							<Grid item>
								<Typography variant="h3">{data.name}</Typography>
								<p>{data.title}</p>
								<Divider sx={{ width: "100%" }} />
							</Grid>
							<Grid item sx={{ padding: "15px 0" }}>
								<Typography
									variant="h4"
									sx={{
										color: "#7a431d",
										fontSize: "40px",
										fontWeight: "bold",
									}}
								>
									{data.rate}
								</Typography>
								<Typography
									variant="h5"
									sx={{
										fontFamily: "Montserrat, sans-serif",
										color: "#7a431d",
										fontSize: "20px",
										fontWeight: "bold",
									}}
								>
									{data.tax}
								</Typography>
								<Grid
									container
									justifyContent="center"
									sx={{ padding: "5px 0 ", width: "100%" }}
								>
									<List>
										{data.listItem.map((item) => {
											return (
												<ListItem
													disablePadding
													sx={{ display: "-webkit-box" }}
												>
													<ListItemIcon sx={{ minWidth: "40px" }}>
														<CheckCircleIcon
															sx={{
																opacity: `${item.opacity}`,
																color: "#de9e48",
																fontSize: "25px",
															}}
														/>
													</ListItemIcon>
													<ListItemText
														primary={
															<Typography
																variant="body2"
																sx={{
																	fontSize: "16px",
																	fontWeight: "bold",
																}}
															>
																{item.title}
															</Typography>
														}
													/>
												</ListItem>
											);
										})}
									</List>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions sx={{ justifyContent: "center" }}>
					<Button
						sx={{
							background: "#de9e48",
							color: "black",
							padding: "20px 60px",
						}}
						size="large"
					>
						{data.Button}
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default SubCard;
