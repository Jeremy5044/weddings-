
function HomeController () {
  console.log("LAYOUT CONTROLLER IS ALIVE");

  $(function() {
     $(".rslides").responsiveSlides();

   });

     $(".rslides2").responsiveSlides({
       auto: true,             // Boolean: Animate automatically, true or false
       speed: 500,            // Integer: Speed of the transition, in milliseconds
       timeout: 8000,          // Integer: Time between slide transitions, in milliseconds
       pager: false,           // Boolean: Show pager, true or false
       nav: false,             // Boolean: Show navigation, true or false
       random: false,          // Boolean: Randomize the order of the slides, true or false
       pause: false,           // Boolean: Pause on hover, true or false
       pauseControls: true,    // Boolean: Pause when hovering controls, true or false
       prevText: "Previous",   // String: Text for the "previous" button
       nextText: "Next",       // String: Text for the "next" button
       maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
       navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
       manualControls: "",     // Selector: Declare custom pager navigation
       namespace: "rslides",   // String: Change the default namespace used
       before: function(){},   // Function: Before callback
       after: function(){}     // Function: After callback
     });

//
//   // let vm = this;
//   //
//   // vm.message = 'Hello from LayoutController!';
//   // vm.clickMe = clickMe;
//
//   function countdown(){
//   var now = new Date();
//   var eventDate = new Date(2017, 11, 21);
//
//   var currentTime = now.getTime();
//   var eventTimee = eventDate.getTime();
//
//   var remTime = eventTimee - currentTime;
//
//   var s = Math.floor(remTime / 1000);
//   var m = Math.floor(s /60);
//   var h = Math.floor(m /60);
//   var d = Math.floor(h /24);
//
// h %= 24;
// m %= 60;
// s %= 60;
//
// h = (h < 10) ? "0" + h : h;
// m = (m < 10) ? "0" + m : m;
// s = (s < 10) ? "0" + s : s;
//
// // document.getElementsByClassName('days').textContent = d;
// // document.getElementsByClassName('days').innerText = d;
// //
// // document.getElementsByClassName('hours').innerText = h;
// // document.getElementsByClassName('minutes').innerText = m;
// // document.getElementsByClassName('secounds').innerText = s;
//
// setTimeout(countdown, 1000);
// console.log(m, h, s)
// }
// countdown()
}







HomeController.$inject = [];
export { HomeController };
