// Task 8: to-do app. Tasks live in an array only (no localStorage).
const input = document.getElementById("taskInput");
const list = document.getElementById("list");
const empty = document.getElementById("empty");
const tasks = [];

function render() {
  list.innerHTML = "";
  tasks.forEach((task, i) => {
    const li = document.createElement("li");

    const label = document.createElement("label");
    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = task.done;
    box.addEventListener("change", () => { task.done = box.checked; render(); });
    const text = document.createElement("span");
    text.textContent = task.text;
    if (task.done) text.classList.add("done");
    label.append(box, text);

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => { tasks.splice(i, 1); render(); });

    li.append(label, del);
    list.appendChild(li);
  });
  empty.hidden = tasks.length > 0;
}

function addTask() {
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  tasks.push({ text, done: false });
  input.value = "";
  render();
  input.focus();
}

document.getElementById("addTask").addEventListener("click", addTask);
input.addEventListener("keydown", (e) => { if (e.key === "Enter") addTask(); });
render();
