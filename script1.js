const uk = document.getElementById("btn");

uk.addEventListener("mouseenter", () => {
  uk.textContent = "Yes";
});

uk.addEventListener("mouseleave", () => {
  uk.textContent = "Want to know more about me?";
});
