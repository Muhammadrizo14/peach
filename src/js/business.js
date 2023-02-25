let businessItem = document.querySelectorAll('.business__item')
innerWidth = window.innerWidth


if (innerWidth < 788) {

  businessItem.forEach(item => {
    item.style.height = '74px'
    item.addEventListener('click', (currentItem) => {


      let currentWrap;

      if (currentItem.composedPath()[2] === item) {
        currentWrap = item
      } else if (currentItem.composedPath()[3] === item) {
        currentWrap = item
      } else {
        console.log(currentItem.composedPath())
      }


      let arrow = currentWrap.querySelector('img')

      let itemComputedStyle = getComputedStyle(currentWrap)
      let heightOfElem = itemComputedStyle.height
      if (heightOfElem === '74px') {
        console.log(currentWrap)
        console.log(heightOfElem)
        arrow.style.transform = 'rotate(180deg)'
        currentWrap.style.height = `${240}px`
      } else if (heightOfElem === '240px') {
        currentWrap.style.height = '74px'
        arrow.style.transform = 'rotate(0deg)'

      } else {
        console.log(3)
        console.log(heightOfElem)
      }
    })
  })
}