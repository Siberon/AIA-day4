document.addEventListener("DOMContentLoaded", () => {
	let tasks = [];

	const form = document.getElementById("task-form");
	const descriptionInput = document.getElementById("description");
	const statusSelect = document.getElementById("status");
	// const tableBody = document.getElementById("task-table-body");
	// const row = document.getElementById("tr");
	const table = document.getElementById("table");
	// const descriptionCell = document.getElementById("td");
	// const statusCell = document.getElementById("td");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		console.log(event.target["description"].value);
		addTask(event.target["description"].value, event.target["status"].value);
		descriptionInput.value = "";
		statusSelect.value = "Active";
	});
	function addTask(description, status) {
		console.log("add task");
		const objectData = {
			description,
			status,
		};
		tasks.push(objectData);
		console.log(tasks);
		updateTaskTable();
	}

	function updateTaskTable() {
		console.log("updateTaskTable", tasks);
		table.innerHTML = `<tr>
		<th>Description</th>
		<th>Status</th>
		</tr>`;
		const rows = tasks.map((task) => {
			console.log(task, "===");
			console.log(task.description, "description");

			return (table.innerHTML += `
				<tr>
					<td>${task.description}</td>
					<td>${task.status}</td>
				</tr>
				`);
			// statusCell.innerHTML = ``;

			// table.appendChild(table);
			// row.appendChild(statusCell);

			return;
		});
		return rows;
		// tableBody.append(...rows);
	}
});
