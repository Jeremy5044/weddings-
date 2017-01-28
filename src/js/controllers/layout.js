

function LayoutController () {

  $(function() {
     $(".handle").on("click", function(){
       $('nav ul').toggleClass("showing")

     });
        });
        $(function(){
          $("showing").on("click", function(){
            $("li").toggleClass("showing")
          });

        });



}

LayoutController.$inject = [];
export { LayoutController };
