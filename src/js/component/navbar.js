import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function NavBar() {
	return (
		<div className="text-center mt-5">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand" href="#">
					Navbar
				</a>

				<div
					className="collapse navbar-collapse"
					id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Link
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								Disabled
							</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							classNameName="btn btn-outline-success my-2 my-sm-0"
							type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
}
