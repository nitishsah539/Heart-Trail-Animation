const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
    const span = document.createElement("span");

    span.style.left = event.pageX + "px";
    span.style.top = event.pageY + "px";

    // Random size
    const size = Math.random() * 50 + 30; // size between 30px to 80px
    span.style.width = size + "px";
    span.style.height = size + "px";

    body.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 4000); // remove after animation ends
});
