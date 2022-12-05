'use strict';

window.addEventListener('DOMContentLoaded', function () {
   
const tabs = require('./modules/tabs'),
    modal = require('./modules/modal'),
    timer = require('./modules/timer'),
    cards = require('./modules/cards'),
    cals = require('./modules/calc'),
    forms = require('./modules/forms'),
    slider = require('./modules/slider');

    tabs();
    modal();
    timer();
    cards();
    cals();
    forms();
    slider();
});