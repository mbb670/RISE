$( document ).ready(function() {

var type1 = $('#vert-type');
var test = $('#test');

TweenMax.set(type1, {y:-460, x:180, rotation:-90, transformOrigin:"center center"});
TweenMax.set(test, {alpha:50});
TweenMax.to(test, 500, {x:10000});
});
