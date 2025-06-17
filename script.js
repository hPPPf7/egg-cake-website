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

// 行動版漢堡選單切換
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navMenu").classList.toggle("open");
});
