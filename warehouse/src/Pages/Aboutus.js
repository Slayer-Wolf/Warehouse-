import React from "react";
import Banner from "../Components/Banner";
import Contactus from "../Components/Contactus";
import { Box, Grid, TextField, Button, Typography, Stack } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import Girl from "../assets/aboutus.jpg";
const items = [
	"Customer-centric",
	"Transparent transactions",
	"Seamless flow of work",
	"Hassle-free experience",
];

const data = {
	url: "https://millionsquarefeet.in/wp-content/uploads/2021/10/about-banner.jpg",
	title: "About US",
};

const Aboutus = () => {
	return (
		<>
			<Banner data={data} />
			<Grid container justifyContent="center" xs={12} py={5}>
				<Grid container xs={10} justifyContent="space-around">
					<Grid item xs={7}>
						<Typography variant="h3" sx={{ fontWeight: "bold" }}>
							Everything about Million Square Feet
						</Typography>
						<Box sx={{ padding: "5px" }}>
							<Typography variant="subtitle1" color="#808080">
								Founded in September 2021, Million Square Feet is the brainchild
								of a duo who felt the need to start a credible platform once
								they found a loophole in the existing market. After doing
								extensive research, they started to build a highly concentrated
								warehouse database. Million Square feet was designed to find
								solutions for customers who have to deal with the unorganised
								and highly fragmented warehouse sector, time and again.
							</Typography>
						</Box>
						<Box sx={{ padding: "10px" }}>
							<Typography variant="subtitle1" color="#808080">
								Those who have worked in this particular sector would be aware
								of the challenges that come along with it. Inconsistent quality
								standards, delays in processes and deal closures, and
								insufficient (read: false) information regarding the concerned
								warehouse are just a few things that can cause turmoil in the
								functioning of a business. We also noticed that less than 20% of
								the leads were verified on other listing platforms. This endless
								loop of inaccurate data and lack of transparency inevitably
								hampers the growth of the customer’s business, and we wanted to
								change that.
							</Typography>
						</Box>
						<Box sx={{ padding: "10px" }}>
							<Typography variant="subtitle1" color="#808080">
								This is where Million Square Feet steps in. A platform that can
								potentially help simplify this complex procedure. A place where
								we don’t just focus on building listing volumes but also target
								on segregating and verifying the information provided to us
								before we list it out. We are here to provide complete
								warehousing solutions ranging from leasing, selling and buying,
								2PL/3PL, warehouse construction and management, and so much
								more. We help our clients make informed decisions by providing
								them with verified data points that may lead to efficient
								transactions.
							</Typography>
						</Box>
						<Box sx={{ padding: "10px" }}>
							<Typography variant="subtitle1" color="#808080">
								Honest conversations. Hassle-free experience. Timely
								transactions. You’ll experience this and much more when you
								associate yourself with Millionsquarefeet.in
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
							src={Girl}
							alt="girl "
						/>
					</Grid>
				</Grid>
			</Grid>
			<section>
				<Grid container justifyContent="center" bgcolor="#f3f3f3" my={10}>
					<Grid
						container
						justifyContent="space-around"
						bgcolor="#e4e4e4"
						lg={10}
						py={10}
					>
						<Grid item xs={4}>
							<Box p={2}>
								<Typography variant="h4">Our vision</Typography>
								<Typography variant="body2">
									Our vision is to be the market leader and aid a higher
									percentage (read 80%) of all warehouse transactions in the
									market. We strive to have a successful run to transact one
									million square feet of warehouses every quarter.
								</Typography>
							</Box>
						</Grid>
						<Grid xs={4} item>
							<Box bgcolor="#e4e4e4" p={2}>
								<Typography variant="h4">Our Mission</Typography>
								<Typography variant="body2">
									We aim to provide a smooth journey throughout to all
									intermediaries, warehouse development institutions, warehouse
									end-users, and potential investors associated with us. Million
									Square Feet is a real-time platform that intends to initiate
									and conclude warehouse transactions timely and efficiently.
								</Typography>
							</Box>
						</Grid>
						<Grid container alignItems="center" alingSelf="center" xs={4} item>
							<Box bgcolor="#e4e4e4" p={2}>
								<Typography variant="h4">Our Values</Typography>
								{items.map((ele) => {
									return (
										<>
											<Stack direction="row" alignItems="center" gap={1}>
												<DoneIcon />
												<Typography variant="body1">{ele}</Typography>
											</Stack>
										</>
									);
								})}
							</Box>
						</Grid>
					</Grid>
				</Grid>
				{/* Reach us  */}
				<Grid container jusitfyContent="space-between" xs={12}>
					<Grid container justifyContent="center" xs={10}>
						<Grid container justifyContent="space-between" xs={10}>
							<Grid item align="left" xs={6} p={5}>
								<Typography variant="h3" sx={{ fontWeight: "bold" }}>
									Reach Us
								</Typography>
								<Grid container justifyContent="flex-start" spacing={5}>
									<Grid item align="left">
										<Typography
											py={1}
											variant="h4"
											sx={{ color: "#7A431D", fontWeight: "bold" }}
										>
											Address
										</Typography>
										<Typography variant="body1" color="#808080">
											Manyata NXT Tower-1, Level 5, Embassy Manyata Business
											Park, Nagavara, Bangalore 560 045, Karnataka, India
										</Typography>
									</Grid>
									<Grid item align="left">
										<Typography
											py={1}
											variant="h4"
											sx={{ color: "#7A431D", fontWeight: "bold" }}
										>
											PHONE
										</Typography>
										<Typography variant="body1" color="#808080">
											+91 123 456 7890 | +91 123 456 7890
										</Typography>
									</Grid>
									<Grid item align="left">
										<Typography
											py={1}
											variant="h4"
											sx={{ color: "#7A431D", fontWeight: "bold" }}
										>
											EMAIL
										</Typography>
										<Typography variant="body1" color="#808080">
											info@millionsquarefeet.com warehouse@millionsquarefeet.com
											ship@millionsquarefeet.com
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid item align="right" xs={6} p={5}>
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1155.5535542987284!2d77.62207602086426!3d13.048184838011284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae176ddc662065%3A0x57b2874f9023bb8!2sEmbassy%20Manyata%20Business%20Park!5e0!3m2!1sen!2sin!4v1657639707583!5m2!1sen!2sin"
									style={{ width: "600px", height: "100%" }}
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Grid container justifyContent="center" xs={12} py={3}>
					<Grid container justifyContent="center" xs={12}>
						<Contactus />
					</Grid>
				</Grid>
			</section>
		</>
	);
};

export default Aboutus;
