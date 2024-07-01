outDate(); // Старт!
function outDate() {
  document.getElementById("date-now").textContent = new Date().toLocaleTimeString();
  setTimeout(() => outDate(), 1000);
}