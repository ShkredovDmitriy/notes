let canVibrate = false;
if('vibrate' in navigator) {
    canVibrate = true;
}

if (canVibrate) {
    navigator.vibrate(300);
}