$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var s = today.getSeconds();
    backgroundThirty(s);
    setTimeout(startTime, 500);
  }

  function backgroundThirty(i){
console.log (i)
     if (i < 30) {
         $("#titleblock").css({ "background-color": "rgba(0, 255, 255, 0.75)"}); 
     } else if (i > 30){
         $("#titleblock").css({ "background-color": "rgba(255, 153, 0, 0.75)"}); 
     }
    }

    startTime();
});