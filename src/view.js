import { handleClickClose } from "./index"; // Добавил импорт функции

export function createView(selector, onClickTodo) {
	const node = document.querySelector(selector);

	return {
		node,
		renderTodos: function ({ todosIds, todosById }) {
			todosIds.forEach((id) => {
				this.addTodo(todosById[id]);
			});
		},

		clearTodos: function () {
			this.node.innerHTML = "";
		},

		// Добавил функцию по нажатию на X
		clearTodosOne: function (id) {
			const itemNode = document.getElementById(id + 1);
			itemNode.style.display = "none";
		},

		addTodo: function (todo) {
			const div = document.createElement("div");
			const input = document.createElement("input");
			const label = document.createElement("label");
			const btn = document.createElement("button"); // Добавил кнопку для удаления todo

			input.setAttribute("type", "checkbox");
			input.setAttribute("id", todo.id);

			input.onclick = () => {
				onClickTodo(todo.id);
			};

			// Добавил действие при нажатии на X
			btn.onclick = () => {
				handleClickClose(todo.id);
			};

			if (todo.done) {
				input.setAttribute("checked", true);
				div.classList.add("cross-line"); // Добавляет класс стиля при формировании
			}

			div.setAttribute("id", todo.id + 1); // Добавляют id+1
			btn.setAttribute("id", todo.id + 1); // Добавляют id+1

			btn.innerText = "×"; // Задал кнопку "X"

			label.innerText = todo.title;
			label.setAttribute("for", todo.id);

			// Изменилб добавил btn
			div.append(input, label, btn);

			this.node.append(div);
		},
	};
}

//  Добавил уменьшение счётчика //////////////////////////////////////
function countMinus() {
	counter = -1;
	counterNode.textContent = counter;
}
