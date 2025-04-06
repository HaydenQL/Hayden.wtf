document.body.addEventListener('click', () => {
  document.getElementById('enterText').style.display = 'none';
  document.getElementById('profile').style.display = 'flex';
  document.body.style.cursor = 'default';
});

function showImagine() {
  document.getElementById('loveModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('loveModal').style.display = 'none';
}
