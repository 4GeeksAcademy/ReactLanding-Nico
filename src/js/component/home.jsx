import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
//create your first component
const Home = () => {
	return (

		<div>
			<Navbar/>
			<Jumbotron/>
		<div className="d-flex">
		
			<Card title="Dog" imgSrc="https://www.elmueble.com/medio/2023/05/03/perro-de-raza-podenco_39e28ed8_230503130255_900x900.jpg"/>
			<Card title="Food" imgSrc="https://www.simplyrecipes.com/thmb/0pVK4YpDJNoXPEAchI_OSDE0UZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Chicago-Deep-Dish-Pizza-LEAD-5-f8c04d3d77b24e479bbb1502758a5ed1.jpg"/>
			<Card title="Nature" imgSrc="https://www.camepe.com/wp-content/uploads/2021/04/quilotoa-3.jpg"/>
			<Card title="Soccer" imgSrc="https://pbs.twimg.com/profile_images/1663361443587149824/gziPB8mg_400x400.jpg"/>
		</div>
		</div>
	);
};

export default Home;

