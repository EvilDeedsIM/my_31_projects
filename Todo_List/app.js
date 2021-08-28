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
  const objOfTasks = tasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  // Event Listeners
  addBtn.addEventListener("click", createNewTask);

  // <- Create and print tasks
  function taksTemplate({ _id, title }) {
    const li = document.createElement("li");
    li.classList.add("task-item");

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
    const li = taksTemplate(task);
    fragment.appendChild(li);
  });

  const list = document.querySelector(".task-list");
  list.appendChild(fragment);
  // Create and print tasks ->

  console.log(form);
  function getInputValue() {
    const input = form.elements["input"];
    if (!input.value) return alert("Input task");
    return input.value;
  }

  function createNewTask(e) {
    e.preventDefault();
    const value = getInputValue();
    if (!value) return;
    const newTask = {
      _id: `task-${Math.random()}`,
      title: value,
    };

    objOfTasks[newTask._id] = newTask;

    console.log(objOfTasks);
  }
})(arrOfTasks);
