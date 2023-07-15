import ConcludeButton from "../components/doneTask.js";
import DeleteButton from "../components/deletedTask.js";

const createTask = (event) => {

    event.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const inputValue = input.value;

    const task = document.createElement('li');
    task.classList.add('task');
    const content = `<p class="content">${inputValue}</p>`;

    task.innerHTML = content;

    task.appendChild(ConcludeButton());
    task.appendChild(DeleteButton());
    list.appendChild(task);

    input.value = " ";
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', createTask);