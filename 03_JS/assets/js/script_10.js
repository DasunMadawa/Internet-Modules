console.log($("h1").eq(1).text("HI  !!!!!"));
console.log($("h1").last().text("1234"));


// console.log($("section").eq(0).text());
console.log($("section").text()); // ekkenai nisa eq() one na

$("section").eq(0).html("<h1>Hello World</h1>");