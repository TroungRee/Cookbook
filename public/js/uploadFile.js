$(document).ready(function() {
    $("form").submit(function(event) {
        console.log("here i am");
        console.log($("#imageStuff").val());

        if ($("#imageStuff").val() == "")
          return false;

    });
});
