// -------------------- have evaluated the code quality by Eslink --------------------
/**
 * Returns the position of the mouse
 */
const getCoordInDocumentExample = function () {
    // Treat the entire page as an object
    const coords = document.getElementById('coords');

    coords.onmousemove = function (event) {
        // Horizontal coordinates of the mouse
        const x = event.clientX;

        // Vertical coordinates of the mouse
        const y = event.clientY;

        // link to shop-feed area
        const coord = document.getElementById('coord');
        coord.innerHTML = x + '   /   ' + y;
    };
};

// call the function after the page is loaded
window.onload = function () {
    getCoordInDocumentExample();
};
