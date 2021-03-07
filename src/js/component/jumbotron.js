import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Jumbotron() {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classNamees for typography and spacing to
					space content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
}
