

// mobile menu 
const filterOpen = document.querySelector('#filter-open')
const filterWrapper = document.querySelector('#filter-wrapper')
const filterClose = document.querySelector('#filter-close')

let isFilterOpen = false

filterOpen.addEventListener('click', function () {
    if (isFilterOpen === true) {
        filterWrapper.classList.remove('filter')
        isFilterOpen = false
    } else {
        filterWrapper.classList.add('filter')
        isFilterOpen = true
    }

})

filterClose.addEventListener('click', function () {
    filterWrapper.classList.remove('filter')
    isFilterOpen = false
})
// mobile menu end

// mobile menu item
const accTitles = document.getElementsByClassName('acc-title')
const accContents = document.getElementsByClassName('acc-content')
const arrowIcons = document.getElementsByClassName('arrow-icon')

for (let title of accTitles) {
  title.addEventListener('click', function () {
    if (this.nextElementSibling.classList.contains('acctive')) {
      closeAll()
      this.nextElementSibling.classList.remove('acctive')
      this.querySelector('.arrow-icon').classList.add('rotate')
    } else {
      closeAll()
    }

  })
}

function closeAll() {
  for (let content of accContents) {
    content.classList.add('acctive')
  }

  for (let arrow of arrowIcons) {
    arrow.classList.remove('rotate')
  }
}
// mobile menu item end

// preloader
window.addEventListener('load', (event) => {
    let preloader = document.querySelector('.preloader')
    setTimeout(() => {
        preloader.classList.add('transition-all')
        preloader.classList.add('duration-500')
        preloader.classList.add('invisible')
        preloader.classList.add('!opacity-0')
    }, 100)
  });
  // preloader end

