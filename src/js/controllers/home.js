
function HomeController () {
  console.log("LAYOUT CONTROLLER IS ALIVE");

  // let vm = this;
  //
  // vm.message = 'Hello from LayoutController!';
  // vm.clickMe = clickMe;

  function countdown(){
  var now = new Date();
  var eventDate = new Date(2017, 11, 21);

  var currentTime = now.getTime();
  var eventTimee = eventDate.getTime();

  var remTime = eventTimee - currentTime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s /60);
  var h = Math.floor(m /60);
  var d = Math.floor(h /24);

h %= 24;
m %= 60;
s %= 60;

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

// return h;
// return m;
// return s;
// console.log(h, "hours");
// console.log(m, "minutes");
// console.log(s, "seconds");
console.log(h+":"+m+":"+s);

setTimeout(countdown, 1000);
}
countdown();
}







HomeController.$inject = [];
export { HomeController };
