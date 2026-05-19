const toggle = document.querySelector(".theme-toggle");
const label = document.querySelector(".toggle-label");
const preferredTheme = localStorage.getItem("portfolio-theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  label.textContent = isDark ? "Light" : "Dark";
  localStorage.setItem("portfolio-theme", theme);
}

setTheme(preferredTheme || (systemPrefersDark ? "dark" : "light"));

toggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("dark") ? "light" : "dark");
});
