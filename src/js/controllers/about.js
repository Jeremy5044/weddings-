


function AboutController () {
  console.log("About CONTROLLER IS ALIVE");

  $(".rslides3").responsiveSlides({
    auto: false,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: false,           // Boolean: Show pager, true or false
    nav: true,             // Boolean: Show navigation, true or false
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





// var images = ["images/slide1.jpg","images/slide2.jpg", "images/slide3.jpg"];
// var caption = ["caption for slide1","caption for slide2","caption for slide3"];
//
// var imgNumber = 0;
// var imgLength = images.length - 1;
//
//   function switchImage(x) {
//     imgNumber += x;
//     // if you reached an array start over//
//
//      if (imgNumber > imgLength){
//        imgNumber = 0;
//      }
//      if (imgNumber < 0){
//        imgNumber = imgLength;
//      }
//   }
//
// document.getElementById('slidshow').src = images[imgNumber];
// document.getElementById('caption').innerHTML = caption[imgNumber];
//
// return false;
}



AboutController.$inject = [];
export { AboutController };
