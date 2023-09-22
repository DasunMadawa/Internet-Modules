let button1 = document.getElementsByTagName("button")[0];
let button2 = document.getElementsByTagName("button")[1];
let h1 = document.getElementsByTagName("h1")[0];

button1.addEventListener('click', function () {
    h1.innerText++;
});

button2.addEventListener('click', function () {
    h1.innerText = "0";
});


///////////////////////////////////////////////////////////////////////////////
let button3 = document.getElementsByTagName("button")[2];
let div1 = document.getElementsByTagName("div")[0];

let stylesNormal = "border-radius: 50%; width: 100px; height:100px; margin: 50px; border: 2px solid black;";
let stylesON = "border-radius: 50%; width: 100px; height:100px; margin: 50px; border: 2px solid black; background-color: yellow; box-shadow: yellow 0px 7px 29px 0px;";

div1.style.cssText = stylesNormal;

button3.addEventListener('click', () => {
    if (button3.innerText == "ON") {
        button3.innerText = "OFF";
        div1.style.cssText = stylesON;
    } else {
        button3.innerText = "ON";
        div1.style.cssText = stylesNormal;
    }
});

///////////////////////////////////////////////////////////
let h1Input = document.getElementsByTagName("h1")[1];
let inputText = document.getElementsByTagName("input")[0];

inputText.addEventListener('input', (event) => {
    h1Input.innerText = event.target.value;

});

///////////////////////////////////////////////////////////
let h1Input2 = document.getElementsByTagName("h1")[2];
let inputText2 = document.getElementsByTagName("input")[1];
let button4 = document.getElementsByTagName("button")[3];

button4.addEventListener('click', () => {
    h1Input2.innerText = inputText2.value;

});
////////////////////////////////////////////////////////////////////

let passwordField = document.getElementById("password-field");
let passwordShowBtn = document.getElementById("password-show-btn");

passwordShowBtn.addEventListener('click', () => {
    if (passwordField.getAttribute("type") == "password") {
        passwordField.setAttribute("type", "text");
        passwordShowBtn.innerText="Hide"
    }else {
        passwordField.setAttribute("type", "password");
        passwordShowBtn.innerText = "Show";
    }

});


// button1.addEventListener('dblclick' , function (){
//     h1.innerText++;
//     h1.innerText++;
// });