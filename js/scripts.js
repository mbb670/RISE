$( document ).ready(function() {

    var $burger = $("#burger-container");
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



var $topLine = $('#topLine');
var $middleLine = $('#middleLine');
var $bottomLine = $('#bottomLine');
var $burgerContainer = $('#burger-container');
var animationSpeed = 0.25;
var ifClicked = false;

function burgerClick(){
    console.log("clicks");
    if(ifClicked === false){
        TweenMax.to($topLine,animationSpeed,{rotation:45, y:14, transformOrigin: "50%, 50%"});
        TweenMax.to($middleLine,animationSpeed,{alpha:0, scaleX:0, transformOrigin: "50%, 50%"});
        TweenMax.to($bottomLine,animationSpeed,{rotation:-45, y:-14, transformOrigin: "50%, 50%"});
        ifClicked = true;
    }else{
        TweenMax.to($topLine,animationSpeed,{rotation:0, y:0});
        TweenMax.to($middleLine,animationSpeed,{alpha:1, scaleX:1});
        TweenMax.to($bottomLine,animationSpeed,{rotation:0, y:0});
        ifClicked = false;
    }
}

$burgerContainer.on("click", burgerClick);


// var type1 = $('#vert-type');
// var test = $('#test');
//
// TweenMax.set(type1, {y:-460, x:180, rotation:-90, transformOrigin:"center center"});
// TweenMax.set(test, {alpha:50});
// TweenMax.to(test, 500, {x:10000});
});
