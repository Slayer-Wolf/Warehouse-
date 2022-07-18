import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Subs from "./Pages/Subs";
import Warehouse from "./Pages/Warehouse";
import Aboutus from "./Pages/Aboutus";
import Philosophy from "./Pages/Philosophy";
import Services from "./Pages/Services";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
	return (
		<>
			<BrowserRouter>
				<GoogleOAuthProvider clientId="497126543281-lc6dnb6je9njpdumih0mnqo57fed7cko.apps.googleusercontent.com">
					<Header />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/Subs" element={<Subs />} />
						<Route exact path="/Aboutus" element={<Aboutus />} />
						<Route exact path="/Warehouse" element={<Warehouse />} />
						<Route exact path="/Philosophy" element={<Philosophy />} />
						<Route exact path="/Services" element={<Services />} />
					</Routes>
					<Footer />
				</GoogleOAuthProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
