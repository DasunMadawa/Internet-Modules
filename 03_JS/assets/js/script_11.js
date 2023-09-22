// var styles = {
//     background: "yellow" ,
//     color: "blue"
// };
//
// $("#topic").css(styles);


$("button").first().on('click', () => {
    $("#topic").text(Number.parseInt($("#topic").text()) + 1);
})

$("button").eq(1).on('click', () => {
    $("#topic").text(0);
})


/////////////////////////////////////////////
var stylesNormal = {
    width: "100px",
    height: "100px",
    border: "2px solid black",
    borderRadius: "50%",
    backgroundColor: "transparent",
    boxShadow: "transparent 0px 7px 29px 0px"


};

var stylesOn = {
    width: "100px",
    height: "100px",
    border: "2px solid black",
    borderRadius: "50%" ,
    backgroundColor: "yellow" ,
    boxShadow: "yellow 0px 7px 29px 0px"

};

let div = $("div");
let buttonOnOff = $("button").eq(2);

div.css(stylesNormal);

buttonOnOff.on('click', () => {
    if (buttonOnOff.text() == "OFF") {
        div.css(stylesOn);
        buttonOnOff.text("ON");
    }else {
        div.css(stylesNormal);
        buttonOnOff.text("OFF");
    }
})

/////////////////////////////////////////////////////////////////
let textField = $("input").first();
let headerLbl = $("h1").eq(1);
let btn4 = $("button").eq(3);

btn4.on('click' , () => {
    headerLbl.text(textField.val());
})
