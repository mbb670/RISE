$( document ).ready(function() {

    var $burger = $("#burger-icon");
    var $nav = $('nav[data-nav]');
    var $navA = $('nav[data-nav] a');
    var isVisible = false;

    function mouseClick(){

        console.log("click");
        if(isVisible === false){
            $nav.show();
            isVisible = true;
        }
        else{
            $nav.hide();
            isVisible = false;
        }
    }

    $burger.on( "click", mouseClick);
    // close the mobile menu when menu link is clicked
    $navA.on( "click", mouseClick);



    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });


var type1 = $('#vert-type');
var test = $('#test');

TweenMax.set(type1, {y:-460, x:180, rotation:-90, transformOrigin:"center center"});
TweenMax.set(test, {alpha:50});
TweenMax.to(test, 500, {x:10000});
});
