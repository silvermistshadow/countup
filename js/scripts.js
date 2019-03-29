//Backend logic

var countUp = function(countTo, countBy) {
  if ((countTo > countBy) && (countBy > 0)) {
    for (var counting = 0; counting <= countTo; counting += countBy) {
      $("#output").append(counting + " ");
    }
  }
  else if ((countTo < countBy) && (countTo > 0)) {
    $("#outputErrorOne").show();
  }
  else if ((countTo < 0) || (countBy < 0)) {
    $("#outputErrorNeg").show();
  }
  else if ((countTo === 0) || (countBy === 0)) {
    $("#outputErrorZero").show();
  }
  else if ((Number.isNaN(countTo)) || (Number.isNaN(countBy))) {
    $("#outputErrorNaN").show();
  }

};









//User Interface begins here
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    $("#output").empty();
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());
    countUp(countTo, countBy);


  })



});
