var onOff = false;

$("#menu_btn").on("click" , () => {
    if (onOff) {
        onOff = false;
        $("#nav_mobile").css("right" , "-46vw");

    }else {
        onOff = true;
        $("#nav_mobile").css("right" , "0");

    }

});

