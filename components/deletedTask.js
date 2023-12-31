const DeleteButton = () => {
    const deleteButton = document.createElement('button');

    deleteButton.classList.add('delete-button');
    deleteButton.innerText = 'deletar';

    deleteButton.addEventListener('click', deleteTask);

    return deleteButton
}

const deleteTask = (event) => {
    const deleteButton = event.target;

    const doneTask = deleteButton.parentElement;

    doneTask.remove();

    return deleteButton
}

export default DeleteButton;