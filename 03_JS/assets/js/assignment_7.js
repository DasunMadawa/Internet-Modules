var current_div = 0;
let direction = true;

// var lightOn = {
//     backgroundColor: "red" ,
//     boxShadow: "0 0 10px 2px red"
// }

const updateLightPanel = () => {
    if (direction) {
        if (current_div == 5) {
            direction = false;
        }
        // $("body > div:first-child > div").css("background", "white");
        $("body > div:first-child > div").eq(current_div - 1).css("background", "white");
        $("body > div:first-child > div").eq(current_div).css("background", "#ff6969");
        $("body > div:first-child > div").eq(++current_div).css("background", "red");
    } else {

        // $("body > div:first-child > div").css("background", "white");
        $("body > div:first-child > div").eq(current_div + 1).css("background", "white");
        $("body > div:first-child > div").eq(current_div).css("background", "#ff6969");
        $("body > div:first-child > div").eq(--current_div).css("background", "red");
        if (current_div == 0) {
            direction = true;
        }

    }
}

let intervalId = null;

$("#start").on('click', () => {
    if (intervalId == null) {
        intervalId = setInterval(updateLightPanel, 200);
        $("#audio")[0].play();
    }

});

$("#stop").on('click', () => {
    clearInterval(intervalId);
    $("#audio")[0].pause();
    intervalId = null;
});




