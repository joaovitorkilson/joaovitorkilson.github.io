
export default function RotateCardTecnology() {

  function handleRotateCard(event) {

    event.target.style.transform = `perspective(1000px) rotateX(${((event.offsetY/10) - 10) * 2}deg) rotateY(${(((event.offsetX*1.33)/10) - 10) * 2}deg) scale3d(1, 1, 1) scale(1.1)`;
    event.target.style.transition = '.1s';

    this.addEventListener('mouseleave', onMouseLeave);
    

  }

  function onMouseLeave(event) {
    event.target.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    event.target.removeEventListener('mouseleave', onMouseLeave);


  }


  const cards = document.querySelectorAll('[data-animation]');


  cards.forEach(item => {
    item.addEventListener('mousemove', handleRotateCard);

  })





}


