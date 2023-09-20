const items = document.querySelectorAll(".degree-line__item"),
  line = document.querySelector(".degree-line"),
  mark = document.querySelector(".degree-line__mark");
let firstPosition = items[0].offsetLeft + items[0].offsetWidth / 2;
mark.style.left = firstPosition + "px";
items.forEach((el) => {
  el.addEventListener("click", function () {
    items.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
    firstPosition = this.offsetLeft + this.offsetWidth / 2;
    mark.style.left = firstPosition + "px";
  });
});
