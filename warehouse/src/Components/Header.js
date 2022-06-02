import React from "react";
import { Grid, Divider,  styled } from "@mui/material";
import Button from "@mui/material/Button";
// Custom Button
const ColorButton = styled(Button)(({ theme }) => ({
	color: "#fff",
	fontSize: 16,
	fontWeight: "bold",
	padding: "13px 30px",
	backgroundColor: "#de9e48",
	"&:hover": {
		backgroundColor: "black",
	},
}));

// Custom Button
const LinkButton = styled(Button)(({ theme }) => ({
	color: "#555454",
	fontSize: 16,
	fontWeight: "bold",
	"&:hover": {
		color: "#7a431d",
		background: "none",
	},
}));
//

function Header() {
	const but = [
		{ name: "Home", color: "" },
		{ name: "Warehouse", color: "" },
		{ name: "Subscription Plan", color: "#7a431d" },
		{ name: "About Us", color: "" },
		{ name: "Contact us", color: "" },
		{ name: "Login", color: "" },
	];
	return (
		<>
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				style={{
					position: "sticky",
					top: "0",
					height: "100px",
					margin: "20px 0 ",
					padding: "30px 0",
					backgroundColor: "#ffffff",
					zIndex: "1",
				}}
			>
				<Grid container alignItems="center" xs={10}>
					<Grid item xs={4}>
						<img
							src="http://millionsquarefeet.in/wp-content/uploads/2021/10/logo-1.png"
							alt="image"
						/>
					</Grid>
					<Grid container justifyContent="space-between" xs={8}>
						{but.map((ele) => {
							return ele.name === "Login" ? (
								<ColorButton size="large" variant="contained" >
									{ele.name}
								</ColorButton>
							) : (
								<LinkButton
									disableElevation={true}
									sx={{ color: `${ele.color}` }}
									size="large"
								>
									{ele.name}
								</LinkButton>
							);
						})}
					</Grid>
				</Grid>
			</Grid>
			<Divider
				sx={{ padding: ".5px 0", width: "100%", backgroundColor: "#deba9d" }}
			/>
		</>
	);
}

export default Header;