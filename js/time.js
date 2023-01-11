// -------------------- have evaluated the code quality by Eslink --------------------
/**
 * Returns current time
 */
function time () {
    // creat a new date object
    const date = new Date();

    // Returns the hour (0 ~ 23) of the date object.
    const hour = date.getHours();

    // Returns the minute (0 ~ 59) of the date object.
    const minutes = date.getMinutes();

    // Returns the number of seconds (0 ~ 59) of the date object.
    const seconds = date.getSeconds();

    // the format of time output
    const str = hour + ':' + minutes + ':' + seconds;

    // link to html
    const div1 = document.getElementById('TIME');

    // return current time
    div1.innerHTML = str;
}

// repeatedly calls time to return current time
setInterval(time);
