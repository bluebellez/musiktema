


$(document).ready (function(){



    //jQuery til at åbne burgermenu
    $(".overlayOpen").click(function () {
        $(".overlayMenu").show('100');
    });
    //jQuery til at lukke burgermenu
    $(".overlayClose").click(function () {
        $(".overlayMenu").hide('100');
    });

    // displays lyrics alongside video
    var current_time = 0;
    var my_video = $("#about_video");
    var one = $("#one");
    var two = $("#two");
    var three = $("#three");
    var four = $("#four");
    var five = $("#five");
    var six = $("#six");
    var seven = $("#seven");
    var allAsides = $("aside");

    my_video.on("timeupdate", function () {
        current_time = my_video[0].currentTime;
        current_time = current_time - 5;
        if (current_time > 10) {
            allAsides.hide();
            one.show();
        }
        if (current_time > 23) {
            allAsides.hide();
            two.show();
        }
        if (current_time > 35) {
            allAsides.hide();
            three.show();
        }
        if (current_time > 48) {
            allAsides.hide();
            four.show();
        }
        if (current_time > 69) {
            allAsides.hide();
            five.show();
        }
        if (current_time > 82) {
            allAsides.hide();
            six.show();
        }
        if (current_time > 93) {
            allAsides.hide();
            three.show();
        }
        if (current_time > 106) {
            allAsides.hide();
            four.show();
        }
        if (current_time > 116) {
            allAsides.hide();
            seven.show();
        }
        if (current_time > 140) {
            allAsides.hide();
            three.show();
        }
        if (current_time > 153) {
            allAsides.hide();
            four.show();
        }
    });




});