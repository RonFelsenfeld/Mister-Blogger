'use strict'

function onLinkSelected(elLink) {
  const elLinksBoxes = [...document.querySelectorAll('.main-nav-list li')]

  elLinksBoxes.forEach(linkBok => linkBok.classList.remove('selected'))

  const elBox = elLink.closest('li')
  elBox.classList.add('selected')
}

function onToggleMenu() {
  document.body.classList.toggle('menu-open')

  const elMenuBtn = document.querySelector('.btn-menu')
  const str = document.body.classList.contains('menu-open') ? 'X' : '☰'
  elMenuBtn.innerText = str
}
