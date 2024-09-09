
window.onscroll = function() {
    document.getElementsByClassName("wkynavigation")[0].style.top = window.pageYOffset > 100 ? "0" : "-60px";
}