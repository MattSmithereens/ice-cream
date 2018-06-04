$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = "";
    var blanks = ["cream1", "cream2",  "cream3"];
    blanks.forEach(function(blank) {
      userInput = $("input#" + blank).val();
      $("#favoriteflavors").append("<li>" + userInput + "</li>");
      console.log(userInput);
    });


    // $("#formOne").click(function() {
    //   $("ul#formOne").append("<li>")
    // }

    $("#favoriteflavors").show();

    event.preventDefault();
  });
});
