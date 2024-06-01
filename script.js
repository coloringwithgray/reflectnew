document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(e) {
        createTrail(e.clientX, e.clientY);
    });

    function createTrail(x, y) {
        var trail = document.createElement("div");
        trail.className = "trail";
        trail.style.left = x + "px";
        trail.style.top = y + "px";
        document.body.appendChild(trail);

        setTimeout(function() {
            trail.remove();
        }, 1000); // Match this duration with the animation duration in CSS
    }
});
