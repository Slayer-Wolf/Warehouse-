import React, { Fragment, useState } from "react";
import { Grid, Divider, styled, Modal, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import LoginTab from "./LoginTab";

//modal styling

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	border: "2px solid #de9e48",
	p: 2,
};

// Custom Button
const ColorButton = styled(Button)(({ theme }) => ({
	color: "#fff",
	fontSize: 13,
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
	fontSize: 13,
	textDecoration: "none",
	fontWeight: "bold",
	"&:hover": {
		color: "#7a431d",
		background: "none",
	},
}));
//

// Navlinks
const navLinkStyles = ({ isActive }) => {
	return isActive
		? {
				fontWeight: "bold",
				textDecoration: "none",
				color: "#de9e48",
		  }
		: {
				fontWeight: "bold",
				textDecoration: "none",
				color: "#555454",
				"&:hover": {
					color: "#de9e48",
				},
		  };
};
//

function Header() {
	// modal
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const but = [
		{ name: "Home", Links: "/" },
		{ name: "Warehouse", Links: "Warehouse" },
		{ name: "Subscription Plan", Links: "Subs" },
		{ name: "About Us", Links: "Aboutus" },
		{ name: "Contact us", Links: "Contact us" },
		{ name: "Login" },
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
					margin: "15px 0 ",
					padding: "20px 0",
					backgroundColor: "#ffffff",
					zIndex: "1",
				}}
			>
				<Grid container alignItems="center" xs={11}>
					<Grid item={true} xs={4}>
						<img
							src="http://millionsquarefeet.in/wp-content/uploads/2021/10/logo-1.png"
							alt="logo"
						/>
					</Grid>
					<Grid
						container
						alignItems="center"
						justifyContent="space-evenly"
						xs={8}
					>
						{but.map((ele, i) => {
							return ele.name === "Login" ? (
								<Fragment key={i}>
									<ColorButton
										onClick={handleOpen}
										size="large"
										variant="contained"
									>
										{ele.name}
									</ColorButton>
									<Modal
										open={open}
										aria-labelledby="modal-modal-title"
										aria-describedby="modal-modal-description"
									>
										<Box sx={style}>
											<Grid container justifyContent="flex-end">
												<Button onClick={handleClose}>
													<CloseIcon />
												</Button>
												<Grid container justifyContent="center">
													<LoginTab />
												</Grid>
											</Grid>
										</Box>
									</Modal>
								</Fragment>
							) : (
								<Fragment key={i}>
									<LinkButton disableElevation={true} size="large">
										<NavLink style={navLinkStyles} to={ele.Links}>
											{ele.name}
										</NavLink>
									</LinkButton>
								</Fragment>
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
