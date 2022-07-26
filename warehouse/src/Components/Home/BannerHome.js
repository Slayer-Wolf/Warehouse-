import * as React from "react";
import { useEffect, useState } from "react";
import "../banner.css";
import Searchbar from "./Searchbar";
export default function BannerHome() {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		function handleScroll() {
			setOffset(window.pageYOffset);
		}

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [offset]);

	return (
		<div className="main">
			<section className="hero">
				<img
					src="http://millionsquarefeet.in/wp-content/uploads/2021/10/banner-home.jpg"
					alt="test"
					className="parallax"
					style={{
						transform: `translateY(${offset * 0.5}px)`,
					}}
				/>
				<div className="text-wrapper">
					<h1 className="headline">MILLION WAREHOUSES.</h1>

					<h1 className="headline2">ONE PERFECT WAREHOUSE.</h1>
					<p className="para">
						The search for the most suitable warehouse ends here.
					</p>
					<Searchbar />
				</div>
			</section>
		</div>
	);
}
