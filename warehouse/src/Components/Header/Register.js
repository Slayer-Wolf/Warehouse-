import * as React from "react";

import { Box, Grid, TextField, Button } from "@mui/material";
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
	password: yup
		.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

const Register = () => {
	// Formik
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			number: "",
		},
		validationSchema: validationSchema,

		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<>
			<Box
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
			>
				<form onSubmit={formik.handleSubmit}>
					<TextField
						fullWidth
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
						fullWidth
						id="email"
						name="email"
						label="Email"
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						fullWidth
						label="Password"
						name="password"
						id="password"
						type="password"
						onChange={formik.handleChange}
						value={formik.values.password}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<TextField
						fullWidth
						label="Mobile no."
						name="number"
						id="number"
						type="number"
						onChange={formik.handleChange}
						value={formik.values.number}
						error={formik.touched.number && Boolean(formik.errors.number)}
						helperText={formik.touched.number && formik.errors.number}
					/>
					<Grid container justifyContent="center">
						<Button type="submit" variant="contained" size="large">
							Continue
						</Button>
					</Grid>
				</form>
			</Box>
		</>
	);
};

export default Register;
