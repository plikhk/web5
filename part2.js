// Task 2: change content
const para = document.getElementById("para");
document.getElementById("changeText").addEventListener("click", () => {
  para.textContent = "The text was changed with JavaScript!";
});

// Task 3: change styles
const styleBox = document.getElementById("styleBox");
const colors = ["#ffd9a8", "#d3f2c4", "#f5c6e0", "#fff3b0", "#bfe3ff"];
const sizes = ["20px", "26px", "32px", "16px"];
let colorIndex = 0;
let sizeIndex = 0;
document.getElementById("changeColor").addEventListener("click", () => {
  styleBox.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});
document.getElementById("changeSize").addEventListener("click", () => {
  styleBox.style.fontSize = sizes[sizeIndex];
  sizeIndex = (sizeIndex + 1) % sizes.length;
});

// Task 4: create and remove elements
const list = document.getElementById("list");
document.getElementById("addItem").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Item " + (list.children.length + 1);
  list.appendChild(li);
});
document.getElementById("removeItem").addEventListener("click", () => {
  const last = list.lastElementChild;
  if (last) last.remove();
});
