const burgerIcon = document.querySelector('.burger-icon');
const burgerNav = document.querySelector('.burger-nav');

burgerIcon.addEventListener('click', () => {
    burgerNav.classList.toggle('active');
    burgerIcon.classList.toggle('open');
});

function scrollToProduct() {
    document.querySelector("#product").scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        const innerCard = card.querySelector('.flip-card-inner');
        innerCard.classList.toggle('active');
    });
});

