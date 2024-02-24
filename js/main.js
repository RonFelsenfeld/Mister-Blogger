'use strict'

function onLinkSelected(elLink) {
  const elLinksBoxes = [...document.querySelectorAll('.main-nav-list li')]

  elLinksBoxes.forEach(linkBok => linkBok.classList.remove('selected'))

  const elBox = elLink.closest('li')
  elBox.classList.add('selected')
}
