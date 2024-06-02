const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

setInterval(confetti, 500);

function confetti() {
    jsConfetti.addConfetti()
}