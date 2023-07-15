const ConcludeButton = () => {
    const concludeButton  = document.createElement('button');

    concludeButton.classList.add('check-button');
    concludeButton.innerText = 'concluir';

    concludeButton.addEventListener('click', concludeTask);

    return concludeButton;
}

const concludeTask = (event) => {
    const concludeButton = event.target;

    const doneTask = concludeButton.parentElement;

    doneTask.classList.toggle('done');
}

export default ConcludeButton;