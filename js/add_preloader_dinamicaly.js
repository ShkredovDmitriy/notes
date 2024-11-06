document.body.style.backgroundImage = "url('./images/bg_body.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";

const style = document.createElement('style');
style.type = 'text/css';
const keyFrames = '\
@-webkit-keyframes spinLoader {\
    100% {\
        -webkit-transform: rotate(360deg);\
    }\
}\
@-moz-keyframes spinLoader {\
    100% {\
        -webkit-transform: rotate(360deg);\
    }\
}';
style.innerHTML = keyFrames;
document.getElementsByTagName('head')[0].appendChild(style);

const loader = document.createElement("div");
loader.style.width = "80px";
loader.style.height = "80px";
loader.style.position = "absolute";
loader.style.top = "calc(50% - 40px)";
loader.style.left = "calc(50% - 40px)";
loader.style.backgroundImage = "url('./images/img_preloader.png')";
loader.style.backgroundSize = "contain";
loader.style.backgroundRepeat = "no-repeat";
loader.style.backgroundPosition = "center";
loader.style.animationName = "spinLoader";
loader.style.animationDuration = "5s";
loader.style.animationTimingFunction = "linear";
loader.style.animationIterationCount = "infinite";

document.body.prepend(loader);