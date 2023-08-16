autoSize = setInterval(() => {
  document.getElementById("container").style.width = window.innerWidth - 30 + "px";
  if (window.innerHeight < 400) {
    document.getElementById("container").style.width = window.innerHeight + 20 + "px";
  } else {
    document.getElementById("container").style.height = 900 + "px";
  }
}, 10)

const menuItems = document.querySelectorAll(".menu_items")
menuItems.forEach(function (element) {
  element.addEventListener('click', () => {

    for (let i = 0; i < 6; i++) {
      menuItems[i].style.backgroundColor = "#506DF5"
    }
    element.style.backgroundColor = "#8A9DF7"

  })
})
menuItems[0].style.backgroundColor = "#8A9DF7"