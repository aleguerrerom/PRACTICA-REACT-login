import React, { useState } from "react";

//create your first component

let user = ["admin", "prueba"];
let pass = ["admin", "prueba"];

export function Form() {
	const [inputUser, fninputUser] = useState("");
	const [inputPass, fninputPass] = useState("");
	//const [addtoArray, fnAddtoArray] = useState(user);

	const validateUser = () => {
		if (inputUser !== "" && inputPass !== "") {
			for (let i = 0; i < user.length; i++) {
				for (let j = 0; j < pass.length; j++) {
					if (inputUser === user[i] && inputPass === pass[j]) {
						alert("correcto");
					} else alert("favor revisar");
				}
			}
		} else alert("esta vacio o es incorrecto");
	};

	return (
		<form>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					value={inputUser}
					type="text"
					onChange={e => fninputUser(e.target.value)}
					placeholder="Ingrese Usuario"
					className="form-control"
					aria-describedby="emailHelp"
				/>
				<div id="emailHelp" className="form-text">
					Well never share your email with anyone else.
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					type="text"
					value={inputPass}
					onChange={e => fninputPass(e.target.value)}
					placeholder="Ingrese clave"
					className="form-control"
					id="exampleInputPassword1"
				/>
			</div>
			<div className="mb-3 form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="exampleCheck1"
				/>
				<label className="form-check-label" htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button
				type="submit"
				className="btn btn-primary"
				onClick={validateUser}>
				Submit
			</button>
		</form>
	);
}
