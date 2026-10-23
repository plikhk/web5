// Task 0: first script
console.log("Name: Alikhan Kadashov");
console.log("Group: SE-2524");
alert("Hello, JavaScript World!");
document.getElementById("alertBtn").addEventListener("click", () => alert("Hello, JavaScript World!"));

// Task 1: variables and operators
const out = document.getElementById("out");
function log(text) {
  console.log(text);
  out.textContent += text + "\n";
}

const firstName = "Alikhan";   // string
const lastName = "Kadashov";   // string
const a = 12;                  // number
const b = 5;                   // number
const isStudent = true;        // boolean

log(`Types: ${typeof firstName}, ${typeof a}, ${typeof isStudent}`);
log(`${a} + ${b} = ${a + b}`);
log(`${a} - ${b} = ${a - b}`);
log(`${a} * ${b} = ${a * b}`);
log(`${a} / ${b} = ${a / b}`);
log(`${a} % ${b} = ${a % b}`);
log(`${a} ** ${b} = ${a ** b}`);
log("Concatenation: " + firstName + " " + lastName);
log(`Template string: ${firstName} ${lastName}, student: ${isStudent}`);
