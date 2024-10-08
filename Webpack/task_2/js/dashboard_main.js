import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import the CSS file

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    $('body').prepend('<div id="logo"></div>'); // Add logo at the top
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    const debouncedUpdate = _.debounce(updateCounter, 500);
    $('button').on('click', debouncedUpdate);
});
