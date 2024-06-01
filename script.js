document.addEventListener("DOMContentLoaded", function() {
    var cursorTrail = document.getElementById("cursor-trail");

    document.addEventListener("mousemove", function(e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorTrail.style.left = x + "px";
        cursorTrail.style.top = y + "px";
    });
});
