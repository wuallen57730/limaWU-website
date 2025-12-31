document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = toggleButton.querySelector("i");

  // 若 localStorage 尚未設定，預設為深色模式
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }

  // 根據 localStorage 設定主題
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    body.classList.remove("dark-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }

  // 切換主題
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun"); // 切到太陽，表示回淺色
    } else {
      localStorage.setItem("theme", "light");
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
});
