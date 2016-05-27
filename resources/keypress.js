$(document).ready(presskey);

function pressA() {
    $('item').keydown();
};

function presskey() {
    var e = $.Event('keypress');
    e.which = 65;
    $('item').trigger(e);
    console.log(e);

};

setTimeout(presskey, 4000);
