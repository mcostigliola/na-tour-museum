var list_items = document.querySelectorAll('#hamb_menu>ul>li');

for (var i = 0; i < list_items.length; i++) {
  list_items[i].addEventListener("click", toggle);
}

function toggle() {
  this.classList.toggle("#hamb_menu");
}





