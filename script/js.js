$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var s = today.getSeconds();
    backgroundThirty(s);
    setTimeout(startTime, 500);
  }

  function backgroundThirty(i){
console.log (i)
    if (i < 28  || i === 3.5) {
         $("#titleblock").css({ "background-color": "rgba(0, 255, 255, 0.75)"});
     } else if (i === 29.5 || i === 3) {
         $("#titleblock").css({"background-color": "rgba(23, 246, 232, 0.75"});
     } else if (i === 30 || i === 2.5) {
         $("#titleblock").css({"background-color": "rgba(46, 236, 209, 0.75"});
     } else if (i === 30.5 || i === 2) {
         $("#titleblock").css({"background-color": "rgba(70, 227, 185, 0.75"});
     } else if (i === 31 || i === 1.5){
         $("#titleblock").css({ "background-color": "rgba(93, 218, 162 0.75)"}); 
     } else if (i === 31.5 || i === 1) {
         $("#titleblock").css({"background-color": "rgba(116, 209, 139, 0.75"});
     } else if (i === 32 || i === .5) {
         $("#titleblock").css({"background-color": "rgba(139, 199, 116, 0.75"});
     } else if (i === 32.5 || i === 0) {
         $("#titleblock").css({"background-color": "rgba(209, 172, 46, 0.75"});
     } else if (i === 33 || i === 59.5){
         $("#titleblock").css({ "background-color": "rgba(232, 162, 23, 0.75)"}); 
     } else if (i > 33 || i === 59){
         $("#titleblock").css({ " background-color": "rgba(255, 153, 0, 0.75"});
     }
    
}


    startTime();
});