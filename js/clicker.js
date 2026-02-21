const clickImage = document.getElementById("clickImage");

clickImage.addEventListener("click", function (e) {

    const floatingImg = document.createElement("img");
    floatingImg.src = "assets/images/bubble.png"; // image that floats up
    floatingImg.classList.add("floating");

    // Position where clicked
    floatingImg.style.left = e.clientX - 40 + "px";
    floatingImg.style.top = e.clientY - 40 + "px";

    document.body.appendChild(floatingImg);

    // Remove after animation ends
    setTimeout(() => {
        floatingImg.remove();
    }, 1500);
});