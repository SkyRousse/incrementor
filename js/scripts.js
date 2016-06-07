
$(function() {
	$("form#calc").submit(function(event) {
  event.preventDefault();

    var total = 0;
    var limit = Math.abs(parseInt($("input#limit").val()));
    var increment = Math.abs(parseInt($("input#increment").val()));
    for (var currentNumber = increment; currentNumber <= limit; currentNumber += increment) {
      total += increment;
      $("ul#output").append("<li>" + "Total is: " + total + "</li>");
    };

   });
});
