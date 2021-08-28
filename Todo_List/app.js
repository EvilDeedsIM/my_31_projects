const form = document.forms["input-form"];
const addBtn = form.querySelector("button");
const arrOfTasks = [
  {
    _id: "task-1293810298312",
    title: "Task 1",
  },
  {
    _id: "task-1298482298312",
    title: "Task 2",
  },
  {
    _id: "task-1294499298312",
    title: "Task 3",
  },
];

(function (tasks) {
  // << Print saved tasks on load
  const objOfTasks = tasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});
  // Print saved tasks on load >>

  // << Create and print tasks
  function taskTemplate({ _id, title }) {
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.setAttribute("data-task-id", _id);

    const h2 = document.createElement("h2");
    h2.classList.add("task-title");
    h2.textContent = title;

    const btn = document.createElement("button");
    btn.classList.add("task-delete-btn");
    btn.textContent = "Delete";

    li.appendChild(h2);
    li.appendChild(btn);

    return li;
  }

  const fragment = document.createDocumentFragment();

  Object.values(objOfTasks).forEach((task) => {
    const li = taskTemplate(task);
    fragment.appendChild(li);
  });

  const list = document.querySelector(".task-list");
  list.appendChild(fragment);
  // Create and print tasks >>

  // << New Task
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    printNewTask();
  });

  function getInputValue() {
    const input = form.elements["input"];
    if (!input.value) return alert("Input task");
    return input.value;
  }

  function createNewTask() {
    const value = getInputValue();
    if (!value) return;
    const newTask = {
      _id: `task-${Math.random()}`,
      title: value,
    };

    objOfTasks[newTask._id] = newTask;

    return newTask;
  }

  function printNewTask() {
    const task = createNewTask();
    const taskElement = taskTemplate(task);
    list.insertAdjacentElement("afterbegin", taskElement);
    form.reset();
  }
  // New Task >>

  // << Delete task
  list.addEventListener("click", deleteTask);
  function deleteTask({ target }) {
    if (target.tagName !== "BUTTON") return;
    delete objOfTasks[target.parentElement.dataset.taskId];
    target.parentElement.remove();
  }
  // Delete task >>
})(arrOfTasks);
