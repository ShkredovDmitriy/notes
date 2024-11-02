// ADD ANY SCRIPT
function addScript( src, callback ) {
    const s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    s.onload=callback;
    document.body.appendChild( s );
}

// ADD TELEGRAM API
const script = document.createElement( 'script' );
script.setAttribute( 'src', "https://telegram.org/js/telegram-web-app.js" );
script.onload = () => {
    if(window && window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.expand();
        setTimeout(() => { tg.expand() }, 500);
        tg.disableVerticalSwipes();
        tg.allow_vertical_swipe = false;
        console.log("TG VERSION", tg.version);
    }
};
document.body.appendChild(script);