import * as React from "react";
import { useEffect, useState } from "react";
import "./banner.css";

export default function Banner(props) {
	const { data } = props;
	console.log(data, "data");
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
					src={data.url}
					alt="test"
					className="parallax"
					style={{
						transform: `translateY(${offset * 0.5}px)`,
					}}
				/>
				<div className="text-wrapper">
					<h1 className="headline">{data.title}</h1>
				</div>
			</section>
		</div>
	);
}
