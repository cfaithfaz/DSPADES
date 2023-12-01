const btnGroups = document.querySelectorAll('.btn-group');

btnGroups.forEach((btnGroup) => {
  const radioButtons = btnGroup.querySelectorAll('input[type="radio"]');
  const images = btnGroup.querySelectorAll('.form-label img');

  radioButtons.forEach((button, btnIndex) => {
    button.addEventListener('click', () => {
      // Reset all images in the same group to grayscale
      images.forEach((image) => {
        image.style.filter = 'grayscale(100%)';
      });

      // Remove grayscale effect from the clicked image
      images[btnIndex].style.filter = 'grayscale(0%)';
    });
  });
});
