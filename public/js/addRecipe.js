/*
function readClicked(){
    $.ajax({
      url: "/read",
      type: "GET",
      data: {identifier:$("#identifier").val()},
      success: function(data){
        if (!data)
          alert("bad read");
        else if (data.retVal) {
          $("#name").val(data.retVal.name);

          $("#grade").val(data.retVal.grade);
          $("#age").val(data.retVal.age);
          alert("good read");
        } else
          alert("bad read");
      } ,
      dataType: "json"
    });
  return false;
}
*/
function addClicked(){
    $.ajax({
      url: "/create",
      type: "POST",
      data: {identifier:$("#identifier").val(),dish:$("#dish").val(),category:$("#category").val(),Recipes:$("#Recipes").val(),image:$("#fileStuff").val()},
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
/*
function updateClicked(){
    $.ajax({
      url: "/update",
      type: "PUT",
      data: {identifier:$("#identifier").val(),name:$("#name").val(),age:$("#age").val(),grade:$("#grade").val()},
      success: function(data){
        if (!data)
          alert("bad update");
        else if (data.retVal)
          alert("good update");
        else
          alert("bad update");
      } ,
      dataType: "json"
    });
  return false;
}
function deleteClicked(){
    $.ajax({
      url: "/delete/" + Number($("#identifier").val()),
      type: "DELETE",
      success: function(data) {
        if (!data)
          alert("bad delete");
        else if (data.retVal)
          alert("good delete");
        else
          alert("bad delete");
      } ,
      dataType: "json"
    });
    return false;
}
*/
$(document).ready(function(){
  $("#addRecipe").click(addClicked);
  /*
  $("#createButton").click(createClicked);
  $("#updateButton").click(updateClicked);
  $("#deleteButton").click(deleteClicked);
  */
});
