const form = document.querySelector('form');
const heartsContainer = document.getElementById('hearts');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('number-input').value;

  heartsContainer.innerHTML = '';

  const hearts = '💕'.repeat(input);
  heartsContainer.innerHTML = hearts;
});
