{
    let tasks = [];
    let hideDoneTasks = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

    const removeTask = (index) => {
        tasks = [...tasks.slice(0, index),
        ...tasks.slice(index + 1)];

        render();
    };

    const toggleTaskDone = (index) => {
        tasks = [...tasks.slice(0, index),
        {
            ...tasks[index],
            done: !tasks[index].done,
        },
        ...tasks.slice(index + 1),
        ];
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                removeTask(index);
            })
        });
    };

    const bindDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            })
        });
    };

    const renderTasks = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
        <li class="list__item">
        <button class="task__button js-done">${task.done ? "✔" : ""}</button>
        <span class="task__list ${task.done ? "task__list--done" : ""}">${task.content}</span>
        <button class="task__button--remove js-remove">🗑</button>
        </li>
        `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    const renderButtons = () => {

    };

    const bindButtonsEvents = () => {

    };

    const render = () => {
        renderTasks();
        renderButtons();
        bindEvents();
        bindDoneEvents();
        bindButtonsEvents();
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        const cleanForm = document.querySelector(".js-newTask");

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            cleanForm.value = "";
        }
        cleanForm.focus();
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();

}