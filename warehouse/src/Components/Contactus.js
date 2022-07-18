import React from "react";
import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// validation
const validationSchema = yup.object({
	number: yup
		.number("Enter a valid number")
		.required("number is required")
		.min(10, "Mobile number must be 10 Digit"),
	name: yup.string("Enter your name").required("name is required"),
	lastname: yup
		.string("Enter your  Last name")
		.required(" Last name is required"),
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	message: yup
		.string("Enter your message")
		.required("Message is required to send"),
});

const Contactus = () => {
	// Formik
	const formik = useFormik({
		initialValues: {
			name: "",
			lastname: "",
			email: "",
			number: "",
			message: "",
		},
		validationSchema: validationSchema,

		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<>
			<Grid container justifyContent="center" xs={12}>
				<Grid container justifyContent="space-between" xs={10}>
					<Grid item xs={6}>
						<img
							style={{ width: "100%", height: "100%" }}
							src="https://millionsquarefeet.in/wp-content/uploads/2022/01/contact.jpg"
							alr="construction image"
						/>{" "}
					</Grid>
					<Grid item xs={6} bgcolor="#7a431d">
						<Grid container justifyContent="center" xs={12}>
							<Box
								sx={{
									"& .MuiTextField-root": { my: 1 },
								}}
								px={5}
								py={2}
							>
								<Typography
									variant="h3"
									sx={{ color: "white", fontWeight: "bold" }}
								>
									Get In Touch With Us
								</Typography>
								<form onSubmit={formik.handleSubmit}>
									<TextField
										name="name"
										id="name"
										type="string"
										label="Name"
										variant="filled"
										fullWidth
										onChange={formik.handleChange}
										value={formik.values.name}
										error={formik.touched.name && Boolean(formik.errors.name)}
										helperText={formik.touched.name && formik.errors.name}
										sx={{ backgroundColor: "white" }}
									/>
									<TextField
										name="lastname"
										id="lastname"
										type="string"
										variant="filled"
										fullWidth
										label=" Last Name"
										onChange={formik.handleChange}
										value={formik.values.lastname}
										error={
											formik.touched.lastname && Boolean(formik.errors.lastname)
										}
										helperText={
											formik.touched.lastname && formik.errors.lastname
										}
										sx={{ backgroundColor: "white" }}
									/>
									<TextField
										name="email"
										id="email"
										type="email"
										variant="filled"
										fullWidth
										label="Email"
										onChange={formik.handleChange}
										value={formik.values.email}
										error={formik.touched.email && Boolean(formik.errors.email)}
										helperText={formik.touched.email && formik.errors.email}
										sx={{ backgroundColor: "white" }}
									/>
									<TextField
										name="number"
										id="number"
										type="number"
										variant="filled"
										fullWidth
										label="Phone"
										onChange={formik.handleChange}
										value={formik.values.number}
										error={
											formik.touched.number && Boolean(formik.errors.number)
										}
										helperText={formik.touched.number && formik.errors.number}
										sx={{ backgroundColor: "white" }}
									/>
									<TextField
										name="message"
										id="message"
										type="string"
										label="Message"
										variant="filled"
										fullWidth
										multiline
										rows={4}
										onChange={formik.handleChange}
										value={formik.values.message}
										error={
											formik.touched.message && Boolean(formik.errors.message)
										}
										helperText={formik.touched.message && formik.errors.message}
										sx={{ backgroundColor: "white" }}
									/>
									<Grid container justifyContent="center">
										<Button
											type="submit"
											variant="contained"
											size="large"
											sx={{ width: "100%", backgroundColor: "#DE9E48" }}
										>
											Contact Us
										</Button>
									</Grid>
								</form>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Contactus;
