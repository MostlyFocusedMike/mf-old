/*jslint plusplus: true*/
/*jslint white: true*/
/*globals $:false */

/*visibility = window.getComputedStyle(frame).getPropertyValue("display");*/
(function () {

  //set the responsive text size
  function setFontSize(e) {
    var  num = miniScreen.clientWidth; 
      num = num * .04;
      miniScreen.style.fontSize =  num + "px";
  }
  
  //start animation at the beginning 
  function resetFrame(active) {
    var elm = document.getElementById("f-" + active),
      newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
  }
  
  //switches to new frame
  function switchFrame(e, active) {
    var newActive = e.target.id,
      newFrame = document.getElementById("f-" + newActive),
      newInfo = document.getElementById(newActive + "-info"),
      oldActive = active,
      oldFrame = document.getElementById("f-" + oldActive),
      oldInfo = document.getElementById(active + "-info");

    oldFrame.style.display = "none";
    oldInfo.style.display = "none";
    newFrame.style.display = "block";
    newInfo.style.display = "block";
    return newActive;
  }
////////////////////////////////////////////////////////////////////////////////////////////
// MAIN PROGRAM //////////////////////////////////////////////////////////////////////////////
  var miniScreen = document.getElementsByClassName("mini-screen")[0],
    button = document.getElementsByTagName("button"),
    active = "num-0", i;
  
  (function(event) { setFontSize(event) }());
  window.addEventListener("resize", function(e) {
    setFontSize(e); 
  });

  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
      active = switchFrame(e, active);
      resetFrame(active);
    }, false);
  }
  




}());
