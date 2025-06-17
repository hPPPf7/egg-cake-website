const scrollBtn = document.getElementById("scrollToMenu");
if (scrollBtn) {
  scrollBtn.addEventListener("click", function () {
    document
      .getElementById("menuSection")
      .scrollIntoView({ behavior: "smooth" });
  });
}

const toggleBtn = document.getElementById("toggleFlavors");
if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    const allFlavors = document.getElementById("allFlavors");
    if (allFlavors.style.display === "flex") {
      allFlavors.style.display = "none";
      this.textContent = "查看全部口味";
    } else {
      allFlavors.style.display = "flex";
      this.textContent = "收起口味列表";
    }
  });
}

// 行動版漢堡選單切換
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
if (hamburger && navMenu) {
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    const expanded = navMenu.classList.contains("open");
    hamburger.setAttribute("aria-expanded", expanded);
  });
}
