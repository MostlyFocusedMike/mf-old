/*jslint plusplus: true*/
/*jslint white: true*/
/*globals $:false */

(function () {

  //set the responsive text size
  function setFontSize(event) {
   // var num = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var  num = miniScreen.clientWidth; 
      num = num * .04;
      miniScreen.style.fontSize =  num + "px";
  }
////////////////////////////////////////////////////////////////////////////////////////////
// MAIN PROGRAM //////////////////////////////////////////////////////////////////////////////
  var miniScreen = document.getElementsByClassName("container")[0],
    button = document.getElementsByTagName("button")[0];

  (function(event) { setFontSize(event) }());
  window.addEventListener("resize", function(event) {
    setFontSize(event); 
  });

  button.addEventListener("click", function() {
    window.alert(miniScreen.className);
  }, false);




}());
