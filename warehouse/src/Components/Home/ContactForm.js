import React from "react";
import {
	Grid,
	Typography,
	Box,
	TextField,
	Button,
	MenuItem,
	Select,
	FormControl,
	InputLabel,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// validation
const validationSchema = yup.object({
	number: yup
		.number("Enter a valid number")
		.required("number is required")
		.min(10, "Mobile number must be 10 Digit"),
	name: yup.string("Enter your name").required("name is required"),
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	warehouse: yup.string().required("Type is not selected"),
});

export default function ContactForm() {
	// Formik
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			number: "",
			warehouse: null,
		},
		validationSchema: validationSchema,

		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<>
			<Grid
				container
				justifyContent="center"
				sx={{ position: "relative", top: "50px" }}
			>
				<Grid container justifyContent="center" xs={9} bgcolor="#fff4e5">
					<Grid align="center" py={5} item xs={10}>
						<Typography variant="h4" sx={{ fontWeight: "bold" }}>
							Get firsthand details on the warehousing industry.
						</Typography>
						<Typography variant="body2" py={3}>
							Please drop in the below-mentioned information to stay up-to-date
							with every piece of news related to warehousing.
						</Typography>
						<Grid item align="left" xs={12}>
							<Box
								sx={{
									"& .MuiTextField-root": {
										m: 1,
										width: "25ch",
										backgroundColor: "white",
									},
									"& .MuiFormControl-root": { backgroundColor: "white" },
									"& .MuiButton-root": {
										m: 2,
										width: "25%",
										px: 2,
										py: 1,
										backgroundColor: "#de9e48",
										"&:hover": {
											backgroundColor: "#7a431d",
										},
									},
								}}
							>
								<form onSubmit={formik.handleSubmit}>
									<TextField
										label="name"
										name="name"
										id="name"
										type="string"
										onChange={formik.handleChange}
										value={formik.values.name}
										error={formik.touched.name && Boolean(formik.errors.name)}
										helperText={formik.touched.name && formik.errors.name}
									/>
									<TextField
										id="email"
										name="email"
										label="Email"
										value={formik.values.email}
										onChange={formik.handleChange}
										error={formik.touched.email && Boolean(formik.errors.email)}
										helperText={formik.touched.email && formik.errors.email}
									/>

									<TextField
										inputProps={{
											inputMode: "numeric",
											pattern: "[0-9]*",
											maxLength: 10,
										}}
										label="Mobile no."
										name="number"
										id="number"
										onChange={formik.handleChange}
										value={formik.values.number}
										error={
											formik.touched.number && Boolean(formik.errors.number)
										}
										helperText={formik.touched.number && formik.errors.number}
									/>
									<FormControl sx={{ width: "60%", m: 1 }}>
										<InputLabel id="demo-simple-select-label">
											Warehouse Type
										</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="warehouse"
											value={formik.values.warehouse}
											label="Warehouse-Type"
											onChange={formik.handleChange("warehouse")}
											error={
												formik.touched.warehouse &&
												Boolean(formik.errors.warehouse)
											}
											helperText={
												formik.touched.warehouse && formik.errors.warehouse
											}
										>
											<MenuItem value="Type1">Type 1</MenuItem>
											<MenuItem value="Type2">Type 2</MenuItem>
										</Select>
									</FormControl>

									<Button
										sx={{}}
										type="submit"
										variant="contained"
										size="large"
									>
										Continue
									</Button>
								</form>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
