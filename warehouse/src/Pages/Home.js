import React, { Fragment } from "react";
import BannerHome from "../Components/Home/BannerHome";
import HomeImage from "../assets/home.jpg";
import {
	Box,
	Grid,
	TextField,
	Button,
	Typography,
	Stack,
	Divider,
	Paper,
	Card,
	CardContent,
	CardMedia,
} from "@mui/material";
import CardDetail from "../assets/CardDetail";
import WarehouseData from "../assets/WarehouseData";
import DataCard from "../Components/Home/DataCard";
import TestimonyCard from "../Components/Home/TestimonyCard";
import WarehouseCard from "../Components/Home/WarehouseCard";
import Testimony from "../assets/Testimony";
import ContactForm from "../Components/Home/ContactForm";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// responsive carousel
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const Home = () => {
	return (
		<>
			<BannerHome />
			<Grid container justifyContent="center" xs={12} py={5}>
				<Grid container justifyContent="center" xs={10}>
					<Grid item xs={7}>
						<Typography variant="h3" sx={{ fontWeight: "bold" }}>
							Everything about Million Square Feet
						</Typography>
						<Box sx={{ padding: "5px" }}>
							<Typography variant="subtitle1" color="#808080">
								One of the most important aspects of supply chains is a
								warehouse, and we at Million Square Feet understand that. We are
								also aware that every company is unique and has a different set
								of requirements. Our team is here to offer you a host of options
								that are significantly different from one another. Ranging from
								general warehouses to temperature-controlled one, fulfilment
								centres to sensitive spaces for storing hazardous material, you
								can choose, compare and customise at your convenience.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={5}>
						<img
							style={{
								backgroundSize: "contain ",
								backgroundPosition: "center",
								width: "580px",
							}}
							src={HomeImage}
							alt="home "
						/>
					</Grid>
				</Grid>
			</Grid>

			<Grid container justifyContent="center" xs={12}>
				<Grid container xs={10}>
					<Typography variant="h3" sx={{ fontWeight: "bold" }}>
						Haven’t seen a million warehousing options so far? See now.
					</Typography>
					<Typography variant="subtitle1" color="#808080">
						Don’t stop scrolling. We’ve recently added new warehouses that you’d
						like for your business.
					</Typography>
				</Grid>
			</Grid>
			<Stack justifyContent="center" textAlign="center" xs={10} py={5}>
				<Carousel
					additionalTransfrom={100 * 5}
					draggable={false}
					infinite={true}
					responsive={responsive}
					autoPlay={true}
					autoPlaySpeed={10000}
					keyBoardControl={true}
					containerClass="carousel-container"
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-100px"
				>
					{WarehouseData.map((item) => {
						return (
							<>
								<Card
									raised
									sx={{
										width: "350px",
									}}
								>
									<CardMedia
										component="img"
										height="300"
										image={item.img}
										alt="green iguana"
									/>
									<CardContent
										sx={{ paddingTop: "30px", paddingBottom: "30px" }}
									>
										{Object.entries(item)
											.slice(2)
											.map(([key, val]) => (
												<Grid container justifyContent="space-between" xs={12}>
													<Grid container justifyContent="space-betweem" xs={5}>
														<Typography key={key}> {key} </Typography>
													</Grid>
													<Grid container justifyContent="space-between" xs={2}>
														<Typography> : </Typography>
													</Grid>
													<Grid container justifyContent="flex-start" xs={5}>
														<Typography align="left"> {val} </Typography>
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
											"&:hover": {
												backgroundColor: "#7a431d",
											},
										}}
									>
										VIEW DETAILS
									</Button>
								</Card>
							</>
						);
					})}
				</Carousel>
			</Stack>
			{/* end */}

			{/* another warehouse Carousel */}
			<Box bgcolor="#f8f8f8" py={5} sx={{ width: "100%" }}>
				<Grid container justifyContent="center" xs={12}>
					<Grid container xs={10}>
						<Typography variant="h3" sx={{ fontWeight: "bold" }}>
							What a million others are viewing currently.
						</Typography>
						<Typography py={3} variant="subtitle1" color="#808080">
							People saw and selected one out of these. Here’s a list of the
							recently featured warehouses on our platform that you’d like to
							browse through.
						</Typography>
					</Grid>
				</Grid>
				<Stack justifyContent="center" textAlign="center" xs={10}>
					<Carousel
						additionalTransfrom={100 * 5}
						draggable={false}
						infinite={true}
						responsive={responsive}
						autoPlay={true}
						autoPlaySpeed={10000}
						keyBoardControl={true}
						containerClass="carousel-container"
						dotListClass="custom-dot-list-style"
					>
						{WarehouseData.map((item) => {
							return (
								<>
									<Card
										raised
										sx={{
											width: "350px",
										}}
									>
										<CardMedia
											component="img"
											height="300"
											image={item.img}
											alt="green iguana"
										/>
										<CardContent
											sx={{ paddingTop: "30px", paddingBottom: "30px" }}
										>
											{Object.entries(item)
												.slice(2)
												.map(([key, val]) => (
													<Grid
														container
														justifyContent="space-between"
														xs={12}
													>
														<Grid
															container
															justifyContent="space-betweem"
															xs={5}
														>
															<Typography key={key}> {key} </Typography>
														</Grid>
														<Grid
															container
															justifyContent="space-between"
															xs={2}
														>
															<Typography> : </Typography>
														</Grid>
														<Grid container justifyContent="flex-start" xs={5}>
															<Typography align="left"> {val} </Typography>
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
												"&:hover": {
													backgroundColor: "#7a431d",
												},
											}}
										>
											VIEW DETAILS
										</Button>
									</Card>
								</>
							);
						})}
					</Carousel>
				</Stack>
			</Box>
			{/* end */}

			{/* Section  part 2*/}
			<Grid container justifyContent="center" py={3} xs={12}>
				<Grid container xs={10}>
					<Typography variant="h3" sx={{ fontWeight: "bold" }}>
						End-to-end assistance
					</Typography>
					<Typography py={5} variant="subtitle1" color="#808080">
						We make sure you have a smooth and hassle free experience right from
						the beginning to the end. Here’s how we do it.
					</Typography>

					<Grid container py={5} justifyContent="space-between">
						{CardDetail.map((item) => {
							return (
								<>
									<Grid xs={4} item>
										<DataCard data={item} />
									</Grid>
								</>
							);
						})}
					</Grid>
				</Grid>
			</Grid>

			{/* section - 3 */}
			<Grid container justifyContent="space-between" py={3}>
				<Grid item xs={5}>
					<img
						src="https://millionsquarefeet.in/wp-content/uploads/2022/01/image-e1641934376704.jpg"
						alt="warehouse image"
						style={{ width: "100%", height: "100%" }}
					/>
				</Grid>
				<Grid item align="left" p={8} xs={7} bgcolor="#f8f8f8">
					<Typography py={3} variant="h4" sx={{ fontWeight: "bold" }}>
						We are giving you a million reasons to choose us.
					</Typography>
					<Grid container justifyContent="space-between" xs={9} spacing={3}>
						<Grid item align="left" xs={6}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold", color: "#7a431d" }}
							>
								All verified property leads
							</Typography>
							<Typography py={2} variant="subtitle1" color="#808080">
								We look into the minutest of the details personally to offer the
								best bespoke options available in the market.
							</Typography>
						</Grid>
						<Grid item align="left" xs={6}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold", color: "#7a431d" }}
							>
								Extensive property details to create accurate proposals{" "}
							</Typography>
							<Typography py={2} variant="subtitle1" color="#808080">
								We source out meaningful details that tend to have financial
								implications.
							</Typography>
						</Grid>
						<Grid align="left" item xs={6}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold", color: "#7a431d" }}
							>
								Virtual property tours (on request)
							</Typography>
							<Typography py={2} variant="subtitle1" color="#808080">
								To save your time, we take you through a virtual tour of the
								property upon request.
							</Typography>
						</Grid>
						<Grid align="left" item xs={6}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold", color: "#7a431d" }}
							>
								Efficient subscription plans
							</Typography>
							<Typography py={2} variant="subtitle1" color="#808080">
								To make the most out of the platform created for you. We help
								you customise your subscription suited to your requirement.
							</Typography>
						</Grid>
						<Grid align="left" item xs={6}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold", color: "#7a431d" }}
							>
								Best offers
							</Typography>
							<Typography py={2} variant="subtitle1" color="#808080">
								We try to get the best offer on the table for both the buyer and
								the seller to attain optimum customer satisfaction. All
								transactions during this process are absolutely transparent.
							</Typography>
						</Grid>
						<Grid align="left" item xs={6}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold", color: "#7a431d" }}
							>
								Expert Transaction support available during the process
							</Typography>{" "}
							<Typography py={2} variant="subtitle1" color="#808080">
								Expert Transaction support available during the process
							</Typography>{" "}
						</Grid>
						<Grid align="left" item xs={6}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold", color: "#7a431d" }}
							>
								24/7 Support
							</Typography>
							<Typography py={2} variant="subtitle1" color="#808080">
								We understand if you have any concerns and queries at any given
								point in time. We offer 24/7 support to all our clients.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* Testimonials */}
			<Grid container justifyContent="center" xs={12}>
				<Grid container xs={10}>
					<Typography variant="h3" sx={{ fontWeight: "bold" }}>
						The people we are associated with. They are all one in a million.
					</Typography>
					<Typography py={2} variant="subtitle1" color="#808080">
						Here’s what our esteemed clients have to say about us.
					</Typography>
				</Grid>
			</Grid>
			<Stack justifyContent="center" textAlign="center">
				<Carousel
					additionalTransfrom={100 * 5}
					draggable={false}
					infinite={true}
					responsive={responsive}
					autoPlay={true}
					autoPlaySpeed={10000}
					keyBoardControl={true}
					showDots={true}
					containerClass="carousel-container"
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-60-px"
				>
					{Testimony.map((item) => {
						return (
							<>
								<Box px={10}>
									<TestimonyCard data={item} />
								</Box>
							</>
						);
					})}
				</Carousel>
			</Stack>

			{/* UseFul Information for Stakeholders */}

			<Grid container justifyContent="center" py={5}>
				<Grid container xs={10} justifyContent="flex-start">
					<Typography py={3} variant="body2" sx={{ fontWeight: "bold" }}>
						A little something for our stakeholders. And it’s for free!
					</Typography>
					<ul style={{ paddingTop: "5px", color: "#7a431d" }}>
						<li>
							Introductory courses for intermediaries will be available where
							one can register and read through to understand the platform and
							market nuances.
						</li>
						<li>
							A 3D walkthrough of the warehouse to know the technicalities of
							the storage space.
						</li>
						<li>
							Regular webinars will be conducted to keep the stakeholders up to
							date with the warehousing industry and the current market trends
							and norms.
						</li>
						<li>
							Q&A sessions and modules will be held online as well as offline to
							provide more insights into the entire process.
						</li>
					</ul>
				</Grid>
			</Grid>
			{/* Clients Logo */}
			<Grid container justifyContent="center">
				<Grid container justifyContent="space-between" xs={10}>
					<Paper square sx={{ width: "100%", padding: "20px" }}>
						<Grid
							container
							justifyContent="space-between"
							spacing={0}
							alignItems="center"
						>
							<Grid item align="center">
								<Typography
									variant="h5"
									align="center"
									sx={{ fontWeight: "bold" }}
								>
									Our Clients
								</Typography>
							</Grid>

							<Divider
								orientation="vertical"
								sx={{ height: "100px" }}
								light
								variant="fullWidth"
							/>

							<Grid item align="center">
								<img
									src="https://millionsquarefeet.in/wp-content/uploads/2021/12/pepperfry-logo-1024x369-1024x369-1.png"
									alt="logo"
									style={{ width: "90px" }}
								/>
							</Grid>
							<Grid item align="center">
								<img
									src="https://millionsquarefeet.in/wp-content/uploads/2021/12/Flipkart_logo-1024x270.png"
									alt="logo"
									style={{ width: "90px" }}
								/>
							</Grid>
							<Grid item align="center">
								<img
									src="https://millionsquarefeet.in/wp-content/uploads/2021/12/cult-fit-1024x587.jpg"
									alt="logo"
									style={{ width: "90px" }}
								/>
							</Grid>
							<Grid item align="center">
								<img
									src="https://millionsquarefeet.in/wp-content/uploads/2021/12/logos-3.jpg"
									alt="logo"
									style={{ width: "90px" }}
								/>
							</Grid>
							<Grid item align="center">
								<img
									src="https://millionsquarefeet.in/wp-content/uploads/2021/12/furlenco-1.png"
									alt="logo"
									style={{ width: "90px" }}
								/>
							</Grid>
							<Grid item align="center">
								<img
									src="https://millionsquarefeet.in/wp-content/uploads/2021/12/cmimgopt-b3392e59-5599-49c9-addb-c2e52fd2c3fe.webp"
									alt="logo"
									style={{ width: "90px" }}
								/>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
			{/* Contact Form */}
			<ContactForm />
		</>
	);
};

export default Home;
