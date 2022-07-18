import React from "react";
import Banner from "../Components/Banner";
const data = {
	url: "https://millionsquarefeet.in/wp-content/uploads/2021/11/warehouse-img.jpg",
	title: "FIND THE PERFECT WAREHOUSE",
};

const Warehouse = (props) => {
	return (
		<>
			<Banner data={data} />
		</>
	);
};

export default Warehouse;
