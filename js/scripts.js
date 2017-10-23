$(document).ready(function() {

  var lists = [];

  $("#input").submit(function(event) {
    event.preventDefault();
    var items = ["item1"];

    items.forEach(function(item) {
      var userInput = $("#" + item).val();
      lists.push(userInput);
    })

    lists.sort();
    var upperCase = lists.map(function(list) {
      return list.toUpperCase();
    })

    $(".list").empty();

    upperCase.forEach(function(item) {
      $(".list").append("<li>" + item + "</li>");
    });

  });

});
