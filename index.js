/*
var x = document.getElementsByClassName("p");
var defaultVal = x.defaultValue;
var currentVal = x.value;
console.log(defaultVal);
console.log(currentVal);


 $(elem).find("p.releasedate").html(movie.releasedate);


$( "input[type=radio][name=gender]:checked" ).val();
console.log(defaultVal);

*/
/*
$(document).ready(function(){
  $("input").keyup(function() {
    var value = $( this ).val();
    $( ".search" ).text( value );
  })
  .keyup(event); 
})

$(document).ready(function(){
  $("input").keyup(function() {
    var value = $( this ).val();
    $( ".tel" ).text( value );
  })
  .keyup(event); 
})
*/

$(document).ready(function(){
  $("input").change(function() {
    var value = $( this ).val();
    $( ".tel" ).text( value );
  })
  .change(event); 
})

$(document).ready(function(){
  $("input").change(function() {
    var value = $( this ).val();
    $( ".search" ).text( value );
  })
  .change(event); 
})
/*
$(document).ready(function(){
     alert($("input:text").val());
    console.log(value)
    });

function showInput() {
    
}
$(document).ready(function(){
*/