let tbody = $("tbody");

$("#submit-btn").on('click' , ()=>{
    for (let i =1;i < $("tr > td:first-child ").length; i++){
        if($("tr > td:first-child").eq(i).text() == $("#id").val()){
            alert("duplicate ids");
            return;
        }
    }
    tbody.html(`${tbody.html()}<tr><td>${$("#id").val()}</td><td>${$("#first-name").val()}</td><td>${$("#last-name").val()}</td><td>${$("#address").val()}</td></tr>`);

});

$("#update-btn").on('click' , ()=>{
    for (let i =1;i < $("tr > td:first-child ").length; i++){
        if($("tr > td:first-child").eq(i).text() == $("#id").val()){
            $("tr").eq(i+1).html(`<td>${$("#id").val()}</td><td>${$("#first-name").val()}</td><td>${$("#last-name").val()}</td><td>${$("#address").val()}</td>`)
            return;
        }
    }
    alert("No student found on that id");
});

$("#delete-btn").on('click' , ()=>{
    for (let i =1;i < $("tr > td:first-child ").length; i++){
        if($("tr > td:first-child").eq(i).text() == $("#id").val()){
            $("tr").eq(i+1).html("");
            return;
        }
    }
    alert("No student found on that id");
});

$("#reset-btn").on('click' , ()=>{
    $("#id").val("");
    $("#first-name").val("");
    $("#last-name").val("");
    $("#address").val("");

});

// $("#reset-btn").on('click' , ()=>{
//     tbody.html("");
// });










