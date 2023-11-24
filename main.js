const list = document.querySelectorAll(".list");
console.log(list);
function activeLink() {
  list.forEach((item) =>
    // console.log(item);
    item.classList.remove("active")
  );
  this.classList.add("active");
}

list.forEach((item) => {
  item.addEventListener("click", activeLink);
});