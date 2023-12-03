// Get the image element by its class name
const imgElement = document.querySelector('.img2-guide1');

// Apply the initial style to hide the image (opacity: 0)
imgElement.style.opacity = '0';

// Function to perform fade-in animation
function fadeIn(element, duration) {
    let opacity = 0;
    const intervalTime = 16; // Interval time for smoother animation (approximately 60 FPS)
    const increment = intervalTime / duration;

    const interval = setInterval(function() {
        opacity += increment;

        // Limit opacity to 1 once it reaches 1
        if (opacity >= 1) {
            clearInterval(interval);
            opacity = 1;
        }

        element.style.opacity = opacity;
    }, intervalTime);
}

// Call the fadeIn function on the image element with a duration of 1000ms (1 second)
fadeIn(imgElement, 1000);
