import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Footer } from "./footer.js";
import { Card } from "./card.js";
import { List } from "./list.js";
import { Form } from "./form.js";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<NavBar />
			<Jumbotron />
			<Form />
			<List />
			<Card />
			<Footer />
		</div>
	);
}
