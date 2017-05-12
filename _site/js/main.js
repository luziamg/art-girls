$(document).ready(function () {
// Our Code Goes Here

  $(".menubutton").click(function(){
    $(".menu").fadeToggle();
    $(".stage-right").toggleClass("enter-stage-right");
    $(".stage-left").toggleClass("enter-stage-left");
    $(".stage-bottom").toggleClass('enter-stage-bottom');
    $(".navigation").toggleClass("menubackground");
    $(".menubutton span").toggleClass("hidden");
    $(".topicons a").toggleClass("lighttext");

    })

 });
