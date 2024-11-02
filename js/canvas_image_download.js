const dataURL = canvas.toDataURL("image/jpeg");
var link = document.createElement("a");
link.download = "filename.png";
link.href = dataURL;
link.click();