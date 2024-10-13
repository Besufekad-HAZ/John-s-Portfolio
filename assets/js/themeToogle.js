const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

// Function to set the theme
function setTheme(theme) {
  if (theme === "dark") {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeIcon.classList.remove("ri-moon-line");
    themeIcon.classList.add("ri-sun-line");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeIcon.classList.remove("ri-sun-line");
    themeIcon.classList.add("ri-moon-line");
  }
  localStorage.setItem("theme", theme);
}

// Check for saved theme preference or use device preference
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
  console.log("Setting saved theme:", savedTheme);
  setTheme(savedTheme);
} else {
  console.log("Setting preferred theme:", prefersDark ? "dark" : "light");
  setTheme(prefersDark ? "dark" : "light");
}

// Toggle theme when button is clicked
themeToggle.addEventListener("click", () => {
  console.log("Button clicked");
  const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

// Listen for changes in the color scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });
