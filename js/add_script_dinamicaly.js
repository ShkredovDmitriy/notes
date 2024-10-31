function addScript( src, callback ) {
    const s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    s.onload=callback;
    document.body.appendChild( s );
}