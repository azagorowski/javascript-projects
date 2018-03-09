var images = [
    'https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098_960_720.jpg', 
    'https://cdn.pixabay.com/photo/2017/02/07/09/45/city-2045453_960_720.jpg', 
    'https://cdn.pixabay.com/photo/2018/03/07/04/58/snow-3205262_960_720.jpg', 
    'https://cdn.pixabay.com/photo/2017/08/27/12/38/landscape-2685875_960_720.jpg', 
    'https://cdn.pixabay.com/photo/2017/12/11/20/04/bridge-3013133_960_720.jpg'
];
var n = 0;
function nextImg() {
    var slider = document.getElementById('slider');
    n++;
    if(n >= images.length) {
        n = 0;
    }
    slider.src = images[n];
}
function prevImg() {
    var slider = document.getElementById('slider');
    n--;
    if(n < 0) {
        n = images.length-1;
    }
    slider.src = images[n];
}

// Based on SoloLearn JavaScript course.
