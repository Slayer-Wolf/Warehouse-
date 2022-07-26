import React from "react";
import {
	Paper,
	Grid,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// validation
const validationSchema = yup.object({
	city: yup.string().required("number is required"),
	warehouse: yup.string().required("option is required"),
});

const ForSale = () => {
	// Formik
	const formik = useFormik({
		initialValues: {
			city: "",
			warehouse: "",
		},
		validationSchema: validationSchema,

		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<>
			<Paper sx={{ width: "100%", heigth: "100%", padding: "10px" }}>
				<form onSubmit={formik.handleSubmit}>
					<Grid container justifyContent="space-between" xs={12} spacing={1}>
						<Grid item xs={3}>
							<FormControl sx={{ width: "100%" }}>
								<InputLabel id="demo-simple-select-label">city</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="city"
									value={formik.values.warehouse}
									label="Warehouse-Type"
									onChange={formik.handleChange("city")}
									error={formik.touched.city && Boolean(formik.errors.city)}
									helperText={formik.touched.city && formik.errors.city}
								>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={6}>
							<FormControl sx={{ width: "100%" }}>
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
										formik.touched.warehouse && Boolean(formik.errors.warehouse)
									}
									helperText={
										formik.touched.warehouse && formik.errors.warehouse
									}
								>
									<MenuItem value="Type1">Type 1</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
									<MenuItem value="Type2">Type 2</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={3} align="center">
							<Button
								sx={{
									width: "100%",
									padding: "auto",
									backgroundColor: "#de9e48",
									"&:hover": { backgroundColor: "#de9efe" },
								}}
								type="submit"
								variant="contained"
								size="large"
							>
								Search
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</>
	);
};

export default ForSale;
