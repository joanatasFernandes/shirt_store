
function startImageRotation(container) {
    const images = container.querySelectorAll("img");
    let index = 0;

    images.forEach(img => img.classList.remove("active"));
    images[0].classList.add("active");

    container._currentIndex = 0;

    if (container._intervalId) return;

    container._intervalId = setInterval(() => {
        images[container._currentIndex].classList.remove("active");
        container._currentIndex = (container._currentIndex + 1) % images.length;
        images[container._currentIndex].classList.add("active");
    }, 1000);
}

function stopImageRotation(container) {
    const images = container.querySelectorAll("img");

    clearInterval(container._intervalId);
    container._intervalId = null;

    images.forEach(img => img.classList.remove("active"));
    if (images.length > 0) {
        images[0].classList.add("active");
        container._currentIndex = 0;
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}