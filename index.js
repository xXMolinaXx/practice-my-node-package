import moment from 'moment';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function getCurrentDate() {
    return moment().format('YYYY-MM-DD');
}

export {
    add,
    subtract,
    getCurrentDate
};