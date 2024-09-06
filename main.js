function toggleTheme() {
  //Logic for toggle the theme

  console.log("Theme button clicked");

  let htmlElement = document.querySelector("html");

  console.log(htmlElement.dataset.theme);

  let currentTheme = htmlElement.dataset.theme;

  if (currentTheme === "dark") {
    htmlElement.dataset.theme = "light";
  } else {
    htmlElement.dataset.theme = "dark";
  }
}

// Find the butten that should trigger the fuction

// Find the HTML element

// Read the current data-theme value

// ===dark = light

let themeButten = document.getElementById("toggle-theme");

themeButten.addEventListener("click", toggleTheme);
