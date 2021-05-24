window.addEventListener('scroll', () => {
    let first = document.getElementById('button-one')
    let second = document.getElementById('button-two')
    let third = document.getElementById('button-three')
    let fourth = document.getElementById('button-four')
    if (window.scrollY < 1780) {
        first.classList.add('active-button')
    }
    else {
        first.classList.remove('active-button')
    }
    if (window.scrollY > 1781 && window.scrollY < 2812) {
        second.classList.add('active-button')
    }
    else {
        second.classList.remove('active-button')
    }
    if (window.scrollY > 2813 && window.scrollY < 6837) {
        third.classList.add('active-button')
    }
    else {
        third.classList.remove('active-button')
    }
    if (window.scrollY > 6838 && window.scrollY < 7421) {
        fourth.classList.add('active-button')
    }
    else {
        fourth.classList.remove('active-button')
    }

})
const virusMove = (e) => {
    const bigVirus = document.getElementById('bigVirus');
    const smallVirus = document.getElementById('smallVirus');

    bigVirus.style.transform = `translateX(${e.x / 50}px) translateY(${e.y / 50}px)`;
    smallVirus.style.transform = `translateX(${-e.x / 50}px) translateY(${-e.y / 50}px)`;

}
