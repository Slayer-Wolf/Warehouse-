import React, { Fragment } from "react";
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
					borderRadius: "8px",
					margin: "20px 15px",
				}}
			>
				{data.header ? (
					<Grid container justifyContent="center" alignItems="center">
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
					</Grid>
				) : (
					""
				)}
				<CardContent>
					<Grid container>
						<Grid container xs={11} sx={{ padding: "10px" }}>
							<Grid item>
								<Typography
									component={"span"}
									sx={{ fontWeight: "bold", color: "0d0d0d" }}
									variant="h4"
								>
									{data.name}
								</Typography>
								<Typography
									sx={{
										color: "#7a431d",
										fontSize: "17px",
									}}
								>
									{data.title}
								</Typography>
							</Grid>
							<Divider sx={{ width: "100%", padding: "10px 0" }} />
							<Grid item sx={{ padding: "15px 0" }}>
								<Typography
									variant="h3"
									sx={{
										color: "#7a431d",
										fontSize: "40px",
										fontWeight: "bold",
									}}
								>
									{data.rate}
								</Typography>
								<Typography
									component={"span"}
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
										{data.listItem.map((item, i) => {
											return (
												<ListItem
													key={i}
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
																component={"span"}
																variant="body2"
																sx={{
																	opacity: `${item.opacity}`,
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
							padding: "20px 60px",
							margin: "20px 0",
							"&:hover": {
								background: "#de9e48",
							},
						}}
						size="large"
					>
						<Typography
							sx={{
								fontWeight: "bold",
								color: "black",
								fontSize: "20px",
								"&:hover": {
									color: "white",
									backgroundColor: "none",
								},
							}}
						>
							{data.Button}
						</Typography>
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default SubCard;
