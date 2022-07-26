import * as React from "react";

import { Box, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "@mui/icons-material/Facebook";
import { GoogleLogin } from "@react-oauth/google";

// google login

// facebook

const responseFacebook = (response) => {
	console.log(response);
};
const loginFB = (response) => {
	console.log(response);
};

// validation
const validationSchema = yup.object({
	number: yup
		.string("Enter your number")
		.min(10, "number should be of  10 digit")
		.required("number is required"),
	email: yup
		.string("Enter your number")
		.email("Enter a valid email")
		.required("number is required"),
});

const Login = () => {
	// Formik
	const formik = useFormik({
		initialValues: {
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
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						fullWidth
						label="Mobile no."
						name="number"
						id="number"
						onChange={formik.handleChange}
						value={formik.values.number}
						error={formik.touched.number && Boolean(formik.errors.number)}
						helperText={formik.touched.number && formik.errors.number}
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
					<Grid container justifyContent="center" my={1} spacing={2}>
						<Grid item align="center" xs={6}>
							<GoogleLogin
								onSuccess={(credentialResponse) => {
									console.log(credentialResponse);
								}}
								onError={() => {
									console.log("Login Failed");
								}}
								useOneTap
							/>
						</Grid>
						<Grid item align="center" xs={6}>
							<FacebookLogin
								size="medium"
								appId="1254143975414361"
								autoLoad={true}
								fields="name,email,picture"
								callback={responseFacebook}
								onClick={loginFB}
								cssClass="kep-login-facebook kep-login-facebook-[button-size]"
								icon={<FacebookIcon />}
							/>
						</Grid>
					</Grid>
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

export default Login;
