$(document).ready(function(){
 $("input").change(function() {
     if ($(this).attr('name') == 'gender') {
    var input_id = $(this).attr("name");
    var input_name = input_id.split("-")[0];
    var output_id = input_name + "-output";
    var value = $( this ).val();
    $("#" + output_id).text( value );   
     } else {
    var input_id = $(this).attr("id");
    var input_name = input_id.split("-")[0];
    var output_id = input_name + "-output";
    var value = $( this ).val();
    $("#" + output_id).text( value );   
     }
  });
})

