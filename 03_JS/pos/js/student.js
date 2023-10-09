let tbody = $("tbody");

var row_index =-1;

tbody.on( "click" , "tr" , function () {
    let data_row = $(this).find("td");
    row_index = $(this).index();

    console.log(row_index);

    $("#id").val( $(this).find(".student_id").text() );
    $("#first-name").val( $(this).find(".first_name").text() );
    $("#last-name").val( $(this).find(".last_name").text() );
    $("#address").val( $(this).find(".address").text() );

    let program = $(this).find(".program").text();
    $(`input[ name = 'flexRadioDefault' ][value = ${program} ]`).prop("checked" , true);

    // data_row.each(function (){
    //     console.log($(this).text());
    // });

});

$("#submit-btn").on('click', () => {
    for (let i = 0; i < $("tr > td:first-child ").length; i++) {
        if ($("tr > td:first-child").eq(i).text() == $("#id").val()) {
            alert("duplicate ids");
            return;
        }
    }

    // console.log($("input[name = 'flexRadioDefault']:checked").val());
    // tbody.html(`${tbody.html()}<tr><td>${$("#id").val()}</td><td>${$("#first-name").val()}</td><td>${$("#last-name").val()}</td><td>${$("#address").val()}</td></tr>`);
    tbody.append(`<tr><td class="student_id">${$("#id").val()}</td><td class="first_name">${$("#first-name").val()}</td><td class="last_name">${$("#last-name").val()}</td><td class="address">${$("#address").val()}</td></td><td class="program">${$("input[name = flexRadioDefault]:checked").val()}</td></tr>`);
    clear();

});

$("#update-btn").on('click', () => {
    // for (let i = 0; i < $("tr > td:first-child ").length; i++) {
    //     if ($("tbody > tr > td:first-child").eq(i).text() == $("#id").val()) {
    //         $("tbody > tr ").eq(i).html(`<td>${$("#id").val()}</td><td>${$("#first-name").val()}</td><td>${$("#last-name").val()}</td><td>${$("#address").val()}</td>`);
    //         return;
    //     }
    // }
    // alert("No student found on that id");

    $("tbody > tr ").eq(index).html(`<td>${$("#id").val()}</td><td>${$("#first-name").val()}</td><td>${$("#last-name").val()}</td><td>${$("#address").val()}</td>`)
    row_index=-1;
    clear();

});

$("#delete-btn").on('click', () => {
    // for (let i = 0; i < $("tr > td:first-child ").length; i++) {
    //     if ($("tr > td:first-child").eq(i).text() == $("#id").val()) {
    //         $("tbody > tr ").eq(i).remove();
    //         return;
    //     }
    // }

    $("tbody > tr ").eq(row_index).remove();
    alert("No student found on that id");
});

// $("#reset-btn").on('click', () => {
//     // $("#id").val("");
//     // $("#first-name").val("");
//     // $("#last-name").val("");
//     // $("#address").val("");
//
// });

// $("#reset-btn").on('click' , ()=>{
//     tbody.html("");
// });

const clear = () => {
    $("#reset-btn").click();
}








