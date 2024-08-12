const navbar = document.getElementById('navbar');

function changeNavbarColorOnScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-backgrandcolor');
    } else {
        navbar.classList.remove('navbar-backgrandcolor');
    }
}

window.addEventListener('scroll', changeNavbarColorOnScroll);


const options = {
    threshold: 0.5
};

function handleCardClick(event) {
    const target = event.currentTarget.getAttribute('data-target');
    window.location.href = target;
    // console.log(target);
}

document.addEventListener('DOMContentLoaded', function () {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', handleCardClick);
        // console.log(cards);
    }
});

