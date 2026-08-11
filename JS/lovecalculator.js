const form = document.querySelector("form");    
form.addEventListener("submit", (e) => {
    e.preventDefault();
const boyName = document.getElementById("boy").value.length;
const girlName = document.getElementById("girl").value.length;

const result=Math.pow((boyName+girlName),3)%101;
document.querySelector("h2").textContent = `Your love percentage is ${result}%`;
})