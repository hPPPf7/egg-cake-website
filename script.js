document.getElementById("scrollToMenu").addEventListener("click", function () {
  document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("toggleFlavors").addEventListener("click", function () {
  const allFlavors = document.getElementById("allFlavors");
  if (allFlavors.style.display === "flex") {
    allFlavors.style.display = "none";
    this.textContent = "查看全部口味";
  } else {
    allFlavors.style.display = "flex";
    this.textContent = "收起口味列表";
  }
});

// Mobile menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});
