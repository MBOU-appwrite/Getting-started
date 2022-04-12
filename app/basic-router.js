const $_GET = {};
if (document.location.toString().indexOf('?') !== -1) {
    const query = document.location
        .toString()
        // Get the query string
        .replace(/^.*?\?/, '')
        // And remove any existing hash string.
        .replace(/#.*$/, '')
        .split('&');

    let index = 0;
    const l = query.length;
    for (; index < l; index++) {
        const aux = decodeURIComponent(query[index]).split('=');
        $_GET[aux[0]] = aux[1];
    }
}

function route() {
    if ($_GET['p'] === undefined) return includePage('src/landing_page.html'); // If no path is set show the landing_page.

    const path = $_GET['p'];
    let _path = 'src/' + path;

    switch (path) {
        default:
            // If no special stuff is asked, try to find the page normally. and return 404 if no page is found.
            includePage(_path);
            break;
    }

}

function includePage(path) {
    const app_div = document.querySelector('#app'); // Select the app div.

    fetch(path, function() {
    }).then(response => {
        if (response.status >= 200 && response.status <= 299) { // Checks if the response status is 200 (OK).
            return response.text();
        } else {
            pageNotFound(path); // If the status is anything else show error.
        }
    }).then(body => {
        if (body.length <= 0) return pageNotFound(path); // Return error when page is empty.
        app_div.innerHTML = body.toString(); // Puts the content of requested page in the div APP.
    });
}

function pageNotFound(path) {
    let __path = '';
    let _path = path.split('/');

    _path.reverse().pop(); // Removes last element "src" from the string to not display it in the error message.

    _path.toString()
        .split(',') // Splits the string to become an array again.
        .reverse() // Reverse array back to normal direction.
        .forEach((string, index) => {
            __path += '/' + string; // Generate a nice looking string to show the url.
        });
    throw Error(`Page ${__path} not found!`); // Throw an error with the path.
}

route(); // Start the router.
