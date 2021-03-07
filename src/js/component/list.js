import React, { useState } from "react";

//create your first component

let teams = ["RM", "FCB"];
export function List() {
	const [inputValue, fnInputValue] = useState("");
	const [addtoArray, fnAddtoArray] = useState(teams);
	const addTodo = e => {
		if (e.key == "Enter") {
			if (inputValue !== "") {
				const todosnew = addtoArray.concat(inputValue);
				fnAddtoArray(todosnew);
				fnInputValue("");
			} else alert("");
		}
	};
	function removeTodo(task) {
		const todosnew = addtoArray.filter(item => item !== task);
		fnAddtoArray(todosnew);
	}
	const TodoList = () => {
		return (
			<div>
				<ul>
					{addtoArray.map(item => (
						<li className="lista" key={item}>
							{item}

							<i
								id="right"
								className="fas fa-trash-alt"
								onClick={() => removeTodo(item)}></i>
						</li>
					))}
				</ul>
				<p>{addtoArray.length} item left</p>
			</div>
		);
	};

	return (
		<div className="card">
			<h1>todos</h1>
			<div className="cartita">
				<select
					className="form-select"
					aria-label="Default select example">
					<option selected>TEAMS</option>
					<option className="1">{teams[1]}</option>
					<option className="2">{teams[0]}</option>
					<option className="3">{teams[2]}</option>
				</select>
				<input
					type="text"
					placeholder="What do you need?"
					value={inputValue}
					onChange={e => fnInputValue(e.target.value)}
					onKeyUp={addTodo}></input>
				<TodoList />
			</div>
		</div>
	);
}
