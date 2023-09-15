const videoElement = document.querySelector('.video-product__container video');

const playVideoWhenVisible = () => {
  const rect = videoElement.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.top >= 0 && rect.bottom <= windowHeight) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
};

window.addEventListener('scroll', playVideoWhenVisible);
window.addEventListener('resize', playVideoWhenVisible);

playVideoWhenVisible();