import { TODOS_STORAGE_KEY } from "./constants";
import { createTodosModel } from "./model";
import { createStorage } from "./storage";
import { createView } from "./view";

const inputNode = document.querySelector(".js-input");
const btnNode = document.querySelector(".js-btn");
const outputNode = document.querySelector(".js-output"); // div всего списка
const btnClearNode = document.querySelector(".js-clear-btn");
const counterNode = document.querySelector(".js-counter"); // добавил span счётчика
const upNode = document.querySelector(".js-btn-up"); // добавил кнопку вверх
const downNode = document.querySelector(".js-btn-down"); // добавил кнопку вниз
const formNode = document.querySelector(".js-form"); // добавил input с кнопкой
const footerNode = document.querySelector(".js-footer_container"); // добавил footer

const initialTodos = [];
const model = createTodosModel(initialTodos);
const view = createView(".js-output", handleClickTodo);
const storage = createStorage(TODOS_STORAGE_KEY);
const heightFormRender = formNode.offsetTop; // Расстояние до form при старте
const heightPageRender = pageHeight(); // Высота страницы при старте
let counter = 0; // Счётчик Todos

storage.pull().then((todos) => {
	model.setTodos(todos);

	view.renderTodos(model.getTodos());

	// count
	count("render");

	// fixedFooter
	fixedFooter();

	// arrowDown
	arrowDown();
});

// Добавил действия по нажатии Enter
inputNode.addEventListener("keydown", function (event) {
	const value = event.target.value;

	if (event.key === "Enter" && value.length > 0) {
		event.preventDefault();

		btnNode.click();

		// fixedFooter
		fixedFooter();
	} else if (event.key === "Enter" && value.length <= 0) {
		event.preventDefault();
	}
});

// Изменил, добавил if для проверки наличия в текста в input
btnNode.addEventListener("click", function () {
	const todoTitle = inputNode.value;

	if (todoTitle) {
		const todo = model.addTodo({
			title: todoTitle,
		});

		view.addTodo(todo);

		storage.push(todo);

		// count
		count("+");

		// fixedFooter
		fixedFooter();

		// отправляют в конец страницы
		window.scrollTo(0, pageHeight());
	}
});

// Добавил действия по скроллу для form
window.addEventListener("scroll", function () {
	let userScroll = pageYOffset;

	fixedForm(heightFormRender, userScroll);

	// arrowDown
	arrowDown();

	// arrowUp
	arrowUp();
});

btnClearNode.addEventListener("click", function () {
	storage.delete(model.getTodos());

	model.setTodos([]);

	view.clearTodos();

	// count
	count("0");

	// fixedFooter
	fixedFooter();
});

// Добавил скролл вверх по кнопке
upNode.addEventListener("click", function () {
	window.scrollTo(0, heightFormRender);
});

// Добавил скролл вниз по кнопке
downNode.addEventListener("click", function () {
	window.scrollTo(0, pageHeight());
});

function handleClickTodo(id) {
	model.toggleTodo(id);

	storage.update(model.getTodo(id));

	// метод переключения класса стиля для зачёркивания
	document.getElementById(id + 1).classList.toggle("cross-line");
}

// Добавил действия при взаимодействии с кнопкой X
export function handleClickClose(id) {
	storage.deleteOne(id);

	view.clearTodosOne(id);

	// count
	count("-");

	// fixedFooter
	fixedFooter();
}

//  Добавил счётчик todos
function count(operation) {
	switch (operation) {
		case "+":
			counter = counter + 1;
			break;
		case "-":
			counter = counter - 1;
			break;
		case "0":
			counter = 0;
			console.log(operation, counter);
			break;
		case "render":
			counter = outputNode.children.length;
			break;
	}
	counterNode.innerText = counter;
}

// Функция вычисляет максимальную длину сайта
function pageHeight() {
	let max = Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	);
	return max;
}

// Функция фиксирует form при скролле И проявляет кнопку
function fixedForm(heightFormRender, userScroll) {
	if (heightFormRender <= userScroll) {
		formNode.style.position = "fixed";
		formNode.style.top = "0";
	} else if (heightFormRender > userScroll) {
		formNode.style.position = "static";
	}
}

// Функция фиксирует footer при скролле
function fixedFooter() {
	if (pageHeight() > heightPageRender) {
		footerNode.style.position = "fixed";
		footerNode.style.bottom = "0";
	} else {
		footerNode.style.position = "static";
	}
}

// Функция дает команду на прозрачность кнопке arrowUp
function arrowUp() {
	let userScroll = pageYOffset;
	if (userScroll >= heightFormRender + 82) {
		btnScrollOpacity("up", 1);
	} else if (userScroll < heightFormRender + 82) {
		btnScrollOpacity("up", 0);
	}
}

// Функция дает команду на прозрачность кнопке arrowDown
function arrowDown() {
	let userScroll = pageYOffset;
	if (pageHeight() > heightPageRender + userScroll) {
		btnScrollOpacity("down", 1);
	} else if (pageHeight() == heightPageRender + userScroll) {
		btnScrollOpacity("down", 0);
	}
}

// Функция меняет прозрачность кнопок
function btnScrollOpacity(btn, opacity) {
	if (btn === "up") {
		if (opacity === 1) {
			upNode.style.opacity = ".6";
			upNode.style.cursor = "pointer";
		} else if (opacity === 0) {
			upNode.style.opacity = "0";
			upNode.style.cursor = "default";
		}
	}

	if (btn === "down") {
		if (opacity === 1) {
			downNode.style.opacity = ".6";
			upNode.style.cursor = "pointer";
		} else if (opacity === 0) {
			downNode.style.opacity = "0";
			upNode.style.cursor = "default";
		}
	}
}
