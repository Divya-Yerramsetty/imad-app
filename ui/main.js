console.log('Loaded!');

var element = document.getElementById ('main-text');
element.innerHTML = "This is a new app";

var img = document.getElementById ('img');
img.onclick = function() {
    img.style.marginleft = '100px';
};