export default function scrollSuave() {

  const itemsMenu = document.querySelectorAll('.item-menu-inside')
console.log(itemsMenu)
  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const top = section.offsetTop - 140;

    window.scrollTo({
      top: top,
      behavior: "smooth"
    })

    
  }

  console.log(itemsMenu)

  itemsMenu.forEach((link) => {
    link.addEventListener("click", scrollToSection)
  })
}
