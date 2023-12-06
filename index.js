function toggleMode() {
  const html = document.documentElement;
  const image = document.querySelector("img");

  if (html.classList.contains("light")) {
    html.classList.remove("light");
    image.setAttribute("src", "./assets/avatar.png");
  } else {
    html.classList.add("light");
    image.setAttribute("src", "./assets/avatar-light.png");
  }
}
