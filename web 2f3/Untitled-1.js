const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

video1.onmouseover = function() {
    video2.pause();
};
video1.onmouseleave = function() {
    video2.play();
};

video2.onmouseover = function() {
    video1.pause();
};
video2.onmouseleave = function() {
    video1.play();
};