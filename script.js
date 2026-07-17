/*
   This is a scaffold JavaScript file for the image carousel project.
   You'll need to implement the functionality of the carousel here.
   Consider the following steps:

   1. Define an array of image URLs for your carousel
   2. Keep track of the current image index
   3. Select and store references to your HTML elements (image container, prev/next buttons)
   4. Implement a function to update the displayed image
   5. Add event listeners to the prev/next buttons to change the current image
   6. Initialize the carousel with the first image

   Remember to use appropriate variable names and comments to make your code readable.
   Feel free to add any additional features or improvements to enhance the user experience!
*/


// 1. Define an array of image URLs
const images = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg"
];

// 2. Keep track of current index
let currentIndex = 0;

// 3. Select DOM elements
const carouselImage = document.getElementById('carouselImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// 4. Function to update image
function updateImage() {
    carouselImage.src = images[currentIndex];
}

// 5. Event Listeners
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Wrap around forward
    updateImage();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around backward
    updateImage();
});

// 6. Initialize
updateImage();