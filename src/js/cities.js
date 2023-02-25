const officeLinks = document.querySelectorAll('.office__link')
officeWrapper = document.querySelectorAll('.office__wrapper')
DropdownOpen = document.querySelector('.office__header__dropdown__open')
Dropdown = document.querySelector('.office__header__dropdown')

Dropdown.style.display = 'none'

// To delete all active classes
function RemoveAllCities() {
  officeWrapper.forEach(item => {
    item.style.display = 'none'
  })
}


function effect() {
  officeLinks.forEach((officeLink) => {
    officeLink.addEventListener('click', (currentLink) => {
      officeLinks.forEach(officeLink => {
        officeLink.classList.remove('header__link__active')
      })
      currentLink.target.classList.add('header__link__active')
      switch (currentLink.target.textContent) {
        case 'Москва':
          RemoveAllCities()
          officeWrapper[3].style.display = 'block'
          break
        case 'Центр':
          RemoveAllCities()
          officeWrapper[2].style.display = 'block'
          break
        case 'Северо-Запад':
          RemoveAllCities()
          officeWrapper[0].style.display = 'block'
          officeWrapper[1].style.display = 'block'
          break
        case 'Юг':
          RemoveAllCities()
          officeWrapper[5].style.display = 'block'
          break
        case 'Волга':
          RemoveAllCities()
          officeWrapper[4].style.display = 'block'
          break
        case 'Все':
          officeWrapper.forEach(item => {
            item.style.display = 'block'
          })
          break
      }
    })
  })
}

effect()

DropdownOpen.addEventListener('click', () => {
  if (Dropdown.style.display === 'none') {
    Dropdown.style.display = 'block'
    document.querySelector('.office__header__dropdown__open > img').style.transform = 'rotate(180deg)'
    officeLinks.forEach(link => {
      link.classList.add('header__link__disabled')
      effect()
    })
  } else {
    Dropdown.style.display = 'none'
    document.querySelector('.office__header__dropdown__open > img').style.transform = 'rotate(0deg)'
    officeLinks.forEach(link => {
      link.classList.remove('header__link__disabled')
      effect()
    })
  }
})