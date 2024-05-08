// PRODUCT-1



var p = 5000;
var r=10;
var y=3;

var v=(p*r*y)/100;
var p=(100*v)/(r*y);
var r=(100*v)/(p*y);
var y=(100*v)/(p*r);
var v=p+v;
var t=v-p;


 
document.querySelector(".Amount").innerHTML = p;
document.querySelector(".Rate").innerHTML = r;
document.querySelector(".years").innerHTML = y;
document.querySelector(".Interest").innerHTML = t;
document.querySelector(".Total").innerHTML = v;

