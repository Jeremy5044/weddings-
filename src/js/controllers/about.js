


function AboutController () {
  console.log("About CONTROLLER IS ALIVE");



var images = ["images/slide1.jpg","images/slide2.jpg", "images/slide3.jpg"];
var caption = ["caption for slide1","caption for slide2","caption for slide3"];

var imgNumber = 0;
var imgLength = images.length - 1;

  function switchImage(x) {
    imgNumber += x;
    // if you reached an array start over//

     if (imgNumber > imgLength){
       imgNumber = 0;
     }
     if (imgNumber < 0){
       imgNumber = imgLength;
     }
  }

document.getElementById('slidshow').src = images[imgNumber];
document.getElementById('caption').innerHTML = caption[imgNumber];

return false;
}



AboutController.$inject = [];
export { AboutController };
