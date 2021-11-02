const themeSwitch = document.getElementById('changeColor');

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});