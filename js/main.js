window.onload = () => {
  const date = new Date()
  const year = date.getFullYear()

  const yearElement = document.querySelector('#year')
  yearElement.innerHTML = year
}

window.onscroll = () => {
  const menu = document.querySelector('#menu')

  if(window.scrollY < 30)
    menu.classList.remove('menu-scroll')
  else
    menu.classList.add('menu-scroll')
}