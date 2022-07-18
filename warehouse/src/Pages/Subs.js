import React from "react";

import Banner from "../Components/Banner";
import TabsMenu from "../Components/Subs/TabsMenu";
const data = {
	url: "https://millionsquarefeet.in/wp-content/uploads/2021/10/pricing-banner.jpg",
	title: "Subscription Plan",
};
const Subs = () => {
	return (
		<>
			<Banner data={data} />
			<TabsMenu />
		</>
	);
};

export default Subs;
