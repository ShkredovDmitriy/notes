
// <canvas id="canvas"></canvas>
// PNG file
let file_1 = null;
let blob_1 = document.querySelector("#canvas").toBlob(function(blob) {
    file_1 = new File([blob], 'test.png', { type: 'image/png' });
}, 'image/png');

// JPEG file
let file_2 = null;
let blob_2 = document.querySelector("#canvas").toBlob(function(blob) {
    file_2 = new File([blob], 'test.jpg', { type: 'image/jpeg' });
}, 'image/jpeg');

//
// This file can then be uploaded to the server as a file attachment.
//
// <?php
//
// move_uploaded_file($_FILES['file']['tmp_name'], 'test.jpg');
//
// ?>