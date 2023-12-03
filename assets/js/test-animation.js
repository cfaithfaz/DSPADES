const images = document.querySelectorAll('.image');
images.forEach((image) => {
  image.addEventListener('animationend', () => {
    image.classList.remove('zoom-animation');
  }, { once: true });
});