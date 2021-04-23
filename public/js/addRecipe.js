
function createClicked(){

    $.ajax({
      url: "/clientCreate",
      type: "POST",
      data: {dish:$("#dish").val(),ingredients:$("#ingredients").val(),
             directions:$("#directions").val(),category:$("#category").val(),
             image:$("#imageStuff").val().substring(12), index:0},
      success: function(data){
        if (!data)
          alert("bad create");
        else if (data.retVal)
          alert("good create");
        else
          alert("bad create");
        } ,
      dataType: "json"
    });
  return false;
}


$(document).ready(function(){
  $("#addRecipe").click(createClicked);
});
