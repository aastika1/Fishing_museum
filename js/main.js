"use strict";

$(document).ready(function() {
    $("ul>li:first-child").addClass("first");
    $("ul>li:last-child").addClass("last");

    $('#slider').nivoSlider( {
        prevText: '',
        nextText: ''
    });

    $(".thumbs-item a").hover(function() { console.log('test');
        $(this).children(".info").addClass("info-inverse");
    }, function(){
        $(this).children(".info").removeClass("info-inverse");
    });

});


function myFunction(x) {
    x.classList.toggle("change");
}