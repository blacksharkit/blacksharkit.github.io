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


// menu scrolling animated
const scrollTo = (scrollY) => {
  const body = $('html, body')
  body.stop().animate({ scrollTop: scrollY }, 600, 'swing');
}

const about = $('#sobre')
const service = $('#servicos')
const contact = $('#contato')
$('.menu-home').click(() => scrollTo(0))
$('.menu-about').click(() => scrollTo(about.offset().top))
$('.menu-service').click(() => scrollTo(service.offset().top))
$('.menu-contact').click(() => scrollTo(contact.offset().top))