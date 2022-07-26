import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import { Grid, Typography } from "@mui/material";
import ContactForm from "../Components/Home/ContactForm";
const data = {
	url: "https://millionsquarefeet.in/wp-content/uploads/2021/10/service-banner.jpg",
	title: "Providing A Big Space For A Big Future.",
};
const Services = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Banner data={data} />
			{/* What we do */}
			<Grid container justifyContent="center">
				<Grid container justifyContent="center" xs={10}>
					<Grid container justifyContent="center" xs={10}>
						<Typography variant="h4" sx={{ fontWeight: "bold" }}>
							What we do
						</Typography>
					</Grid>
					<Grid container justifyContent="center" xs={10}>
						<Typography variant="body1" align="center">
							Million Square Feet is here to change the way you look at
							warehouse leasing. A platform that is here to lend you a helping
							hand when you are looking to lease a warehouse, expand your
							warehousing services, and also widen your leasing footprint. A
							Million Square Feet opens up the opportunity to service potential
							clients more efficiently through better market and client
							know-how.
							<br />
							<br /> We are here to vet through multiple filters to quickly
							narrow down the appropriate options that the users of this
							platform would be interested in. For us, what matters is that we
							can be of help to our clients across cities and give them what
							they want, effectively and efficiently.
						</Typography>
					</Grid>
					<Grid container justifyContent="space-between" xs={12} py={10}>
						<Grid item xs={6}>
							<Grid container justifyContent="flex-start" xs={10} py={1}>
								<Typography
									color="#7a431d"
									variant="h4"
									sx={{ fontWeight: "bold" }}
								>
									Buy/lease
								</Typography>
							</Grid>
							<Grid container justifyContent="flex-start" xs={10}>
								<Typography variant="body1">
									We will help you reach a wider, more relevant audience and
									enable higher visibility on the platform where we will push
									and promote your requirement and work.
								</Typography>
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<img
								src="https://millionsquarefeet.in/wp-content/uploads/2021/10/service-1.jpg"
								alt="warehouse"
								style={{ width: "80%" }}
							/>
						</Grid>
					</Grid>
					<Grid container justifyContent="space-between" xs={12} py={5}>
						<Grid item xs={6}>
							<img
								src="https://millionsquarefeet.in/wp-content/uploads/2022/01/report.jpg"
								alt="warehouse"
								style={{ width: "80%" }}
							/>
						</Grid>
						<Grid item xs={6}>
							<Grid container justifyContent="flex-start" xs={10} py={1}>
								<Typography
									color="#7a431d"
									variant="h4"
									sx={{ fontWeight: "bold" }}
								>
									Data report
								</Typography>
							</Grid>
							<Grid container justifyContent="flex-start" xs={10}>
								<Typography variant="body1">
									We will formulate and organise a proper data report of each of
									the warehouses listed with us. We will source all the
									information regarding the same for you to make an informed
									decision.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid container justifyContent="space-between" xs={12} py={5}>
						<Grid item xs={6}>
							<Grid container justifyContent="flex-start" xs={10} py={1}>
								<Typography
									color="#7a431d"
									variant="h4"
									sx={{ fontWeight: "bold" }}
								>
									Consultancy/advice
								</Typography>
							</Grid>
							<Grid container justifyContent="flex-start" xs={10}>
								<Typography variant="body1">
									We will help you in the process of buying, selling and
									leasing. We will arrange all the paperwork and negotiate on
									your behalf to get you the best possible quotation.
								</Typography>
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<img
								src="https://millionsquarefeet.in/wp-content/uploads/2022/01/advice.jpg"
								alt="warehouse"
								style={{ width: "80%" }}
							/>
						</Grid>
					</Grid>
					<Grid container justifyContent="space-between" xs={12} py={5}>
						<Grid item xs={6}>
							<img
								src="https://millionsquarefeet.in/wp-content/uploads/2022/01/dm.jpg"
								alt="warehouse"
								style={{ width: "80%" }}
							/>
						</Grid>
						<Grid item xs={6}>
							<Grid container justifyContent="flex-start" xs={10} py={1}>
								<Typography
									color="#7a431d"
									variant="h4"
									sx={{ fontWeight: "bold" }}
								>
									Digital marketing consultation
								</Typography>
							</Grid>
							<Grid container justifyContent="flex-start" xs={10}>
								<Typography variant="body1">
									We will provide you with a proper selling plan, and take care
									of your digital marketing requirements to propagate your
									warehouse listings.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* ContactForm */}
			<ContactForm />
		</>
	);
};

export default Services;
