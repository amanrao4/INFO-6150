document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let index = 0;
    const totalImages = images.length;

    function showSlide(newIndex) {
        if (newIndex >= totalImages) {
            index = 0; // Loop back to first image
        } else if (newIndex < 0) {
            index = totalImages - 1; // Loop back to last image
        } else {
            index = newIndex;
        }
        slider.style.transform = `translateX(${-index * 100}vw)`;
    }

    nextBtn.addEventListener("click", () => showSlide(index + 1));
    prevBtn.addEventListener("click", () => showSlide(index - 1));

    // Auto-slide every 5 seconds
    setInterval(() => showSlide(index + 1), 5000);
});


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const extraInfo = document.getElementById("extra-info");

    button.addEventListener("click", function () {
        if (extraInfo.classList.contains("hidden")) {
            extraInfo.classList.remove("hidden");
            extraInfo.classList.add("visible");
            button.textContent = "Show Less"; // Change button text
        } else {
            extraInfo.classList.remove("visible");
            extraInfo.classList.add("hidden");
            button.textContent = "Show More"; // Revert button text
        }
    });
});

