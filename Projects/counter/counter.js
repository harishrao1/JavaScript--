let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");
let display = document.getElementById("display");
// let setInitialValueButton = document.querySelector("#set-initial-value");
// let initialValueInput = document.querySelector("#initial-value");

display.innerText = 0;

// setInitialValueButton.addEventListener("click", setInitialValue);
plus.addEventListener("click", counter);
minus.addEventListener("click", counter1);
reset.addEventListener("click", restCounter);

let count = 0;

// function setInitialValue() {
//   count = parseInt(initialValueInput.value);
//   display.innerText = count;
// }
function counter() {
  console.log(count);
  count++;
  display.innerText = count;
}

function counter1() {
  console.log(count);
  count--;
  display.innerText = count;
}

function restCounter() {
  count = 0;
  //   initialValueInput.value = "";
  display.innerText = count;
}
