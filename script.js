const audio = document.querySelector('.audio');
const card = document.querySelector('.card');

document.addEventListener('click', () => {
    audio.play();
    cardanimation();
});

function cardanimation() {
    card.style.animation = `colorhard 3s alternate infinite`;
}
