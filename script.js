const ldButton = document.querySelector(".ld_mode_btn");

const toggleLd = function () {
  const element = document.querySelector("body");

  element.classList.toggle("dark");
};

ldButton.addEventListener("click", function () {
  toggleLd();
});


 // JavaScript for lightbox functionality
 document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', function() {
    document.getElementById('lightbox-img').src = this.src;
    window.location.href = '#lightbox';  // Show lightbox
  });
});

// Close lightbox on clicking the close button or outside the image
document.querySelector('.lightbox').addEventListener('click', function(e) {
  if (e.target !== document.querySelector('.lightbox img')) {
    window.location.href = '#';
  }
});

 // JavaScript for burger toggle
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('nav');

 burger.addEventListener('click', () => {
   nav.classList.toggle('active');
 });