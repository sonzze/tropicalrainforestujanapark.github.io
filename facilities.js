let slideIndex = 0; // Start with the first slide
showSlides(); // Call the function to start the slideshow

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide the slide
    slides[i].style.opacity = "0";   // Reset opacity for fade effect
    slides[i].style.transition = "opacity 2s ease"; // Smooth fade effect
  }

  slideIndex++; // Move to the next slide

  // Loop back to the first slide if at the end
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Display the current slide with fade effect
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.opacity = "1";

  // Change slide every 5 seconds
  setTimeout(showSlides, 5000);
}



