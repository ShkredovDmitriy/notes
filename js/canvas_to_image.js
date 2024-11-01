// Uploading as Data URL String
// The data URL of the canvas image can be retrieved using the toDataURL() method.

// <canvas id="canvas"></canvas>
// PNG data url
let image_data_url_1 = document.querySelector("#canvas").toDataURL();

// JPEG data url
let image_data_url_2 = document.querySelector("#canvas").toDataURL('image/jpeg');

// This data URL string can then be sent to the server. The server will need to process this string, and save data as an image file.
//
//     For example, in PHP :
//     <?php
//
// // data url string that was uploaded
// $data_url = 'data:image/jpeg;base64,/9j/4AAQSkZJRgKL93W5//Z';
//
// list($type, $data) = explode(';', $data_url);
// list(, $data)      = explode(',', $data);
// $data = base64_decode($data);
//
// file_put_contents('test.jpg', $data);
// ?>

// Uploading as Base64 String
// The base64 data of the canvas image can be retrieved by first using toDataURL() to get the data URL string, and then stripping off the starting characters from it.

// <canvas id="canvas"></canvas>
// PNG base64
let image_base64_1 = document.querySelector("#canvas").toDataURL().replace(/^data:image\/png;base64,/, "");

// JPEG base64
let image_base64_2 = document.querySelector("#canvas").toDataURL('image/jpeg').replace(/^data:image\/jpeg;base64,/, "");

//
// This base64 string can be sent to the server where it can be processed and saved as an image file.
//
// <?php
//
// // base64 string that was uploaded
// $base64 = '/9j/4AAQSkZJRgKL93W5//Z';
// $data = base64_decode($base64);
//
// file_put_contents('test.jpg', $data);
//
//     ?>
// Uploading as File

// The canvas image can be converted to a blob using toBlob() method. The blob can then be converted to a file.

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