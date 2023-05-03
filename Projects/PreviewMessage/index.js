
const btn = document.querySelector(".submit-btn");
const inpuEle = document.querySelector("input");
const messageEle = document.querySelector(".message");
const errorMsg = document.querySelector(".error-msg");

console.log(inpuEle.value);

btn.addEventListener("click", displayMessage);

function displayMessage() {
  if (inpuEle.value) {
    messageEle.textContent = inpuEle.value;
    inpuEle.textContent = "";
  } else {
    errorMsg.style.display = "block";

    setInterval(() => {
      errorMsg.style.display = "none";
    }, 10000);
  }
}
