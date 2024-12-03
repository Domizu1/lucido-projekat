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

// document.querySelectorAll('.flip-card').forEach(card => {
//     card.addEventListener('click', () => {
//         const innerCard = card.querySelector('.flip-card-inner');
//         innerCard.classList.toggle('active');
//     });
// });

document.querySelectorAll('.flip-card').forEach(card => {
    const innerCard = card.querySelector('.flip-card-inner');

    // Flip card on click
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        innerCard.classList.toggle('active');
    });
    document.addEventListener('click', (e) => {
        if (!card.contains(e.target)) {
            innerCard.classList.remove('active');
        }
    });
});

