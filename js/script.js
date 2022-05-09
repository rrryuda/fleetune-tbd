// js
// global
history.scrollRestoration = "manual"
document.oncontextmenu = function () { return false; }

// page load
window.onload = function () {
    $("body").removeClass("loading");
    $("body").addClass("loaded");
};