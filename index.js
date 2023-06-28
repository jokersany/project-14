'use strict';
let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
if (images.length === 0) {
    console.log('Folder images empty');
} else {
    let randomImage = images[Math.floor(Math.random() * images.length)];
    console.log(randomImage);
}