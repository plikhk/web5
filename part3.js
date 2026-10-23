// Task 5: mouse events
const hoverBox = document.getElementById("hoverBox");
const originalColor = "#9fd8d8";
hoverBox.addEventListener("mouseover", () => { hoverBox.style.backgroundColor = "#f5b041"; });
hoverBox.addEventListener("mouseout", () => { hoverBox.style.backgroundColor = originalColor; });

// Task 6: keyboard events
const typed = document.getElementById("typed");
const typedOut = document.getElementById("typedOut");
typed.addEventListener("keyup", () => { typedOut.textContent = typed.value; });

// Task 7: calculator
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(op) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Enter two valid numbers.";
    return;
  }
  let r;
  switch (op) {
    case "+": r = a + b; break;
    case "-": r = a - b; break;
    case "*": r = a * b; break;
    case "/":
      if (b === 0) {
        result.textContent = "Cannot divide by zero.";
        return;
      }
      r = a / b;
      break;
  }
  result.textContent = `${a} ${op} ${b} = ${+r.toFixed(10)}`;
}

document.querySelectorAll("[data-op]").forEach((btn) => {
  btn.addEventListener("click", () => calculate(btn.dataset.op));
});
