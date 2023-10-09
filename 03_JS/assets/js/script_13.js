$("#box1").on("mouseenter", () => {
    console.log("Mouse Enter");
});

$("#box1").on("mouseleave", () => {
    console.log("Mouse Leave");
});

$("#button1").on("mouseup", () => {
    console.log("Mouse Up");
});

$("#button1").on("mousedown", () => {
    console.log("Mouse Down");
});

$("#button1").on("click", () => {
    console.log("Mouse Pressed");
});

$("#box1").on("mouseover", () => {
    console.log("Mouse over");
});


$("#name").on("focus", () => {
    console.log("name focused");
    $("#name").css("background", "green");
});

$("#name").on("blur", () => {
    console.log("name blur");
    $("#name").css("background", "blue");
});

$("#name").on("keyup", () => {
    console.log("name key Up");
});

$("#name").on("keydown", () => {
    console.log("name key Down");
});

$("#name").on("keypress", () => {
    console.log("name key Pressed");
});

$("#name").on("keypress", (event) => {
    console.log(event.which);
});

$("#name").on("keypress", (event) => {
    if (event.which === 13) {
        console.log("Enter Pressed");

    }
});

$(" input[name = 'radioInput']").on("click", (event) => {
    console.log(event.target.value)
});

