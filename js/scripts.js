$(document).ready(function(){
  $('#fortune-form').submit(function(event){
    event.preventDefault();
    var sum = 0;
    $("input:checkbox[name=goodbox]:checked").each(function(){
      sum +=  parseInt($(this).val());
    });
    $("input:checkbox[name=badbox]:checked").each(function(){
      sum +=  parseInt($(this).val());
    });
    if (sum > 0){
      alert("good luck");
    } else if (sum < 0){
      alert("bad luck");
    } else {
      alert("you will find your soul mate next friday.")
    };
  });
});
