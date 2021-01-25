const menu = document.getElementById('M');
const cross = document.getElementById('C');
const menu__items = document.getElementById('menu_items');

menu.addEventListener('click',() => {
  menu.classList.add('remove-menu');
  cross.classList.add("show-cross");
  menu__items.classList.add('show');
})

cross.addEventListener('click',() => {
  menu.classList.remove('remove-menu');
  cross.classList.remove("show-cross");
  menu__items.classList.remove('show');
})

