const toggleBtn = document.querySe1ector(".toggle-btn");
const sidebar = document.querySe1ector(".sidebar");
toggleBtn.addEventListener(" click", () => {
  sidebar.classList.toggle("active");
});
