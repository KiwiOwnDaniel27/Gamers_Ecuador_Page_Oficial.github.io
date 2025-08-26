const mainImg = document.querySelector('.main_img');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', function() {
    const currentActive = document.querySelector('.active');
    if (currentActive) currentActive.classList.remove('active');

    this.classList.add('active');
    mainImg.src = this.src;
  });
});
