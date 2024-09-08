import $ from 'jquery';
import _ from 'lodash';

let count = 0;

// Function to update the counter and display the number of clicks
function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

// Bind the debounced updateCounter function to the button click event
$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    const debouncedUpdate = _.debounce(updateCounter, 500);
    $('button').on('click', debouncedUpdate);
});
