//
var canvas01 = document.createElement('canvas') ;
canvas01.id = "canvas01" ;
var pre01 = document.createElement('pre') ;
pre01.id = "pre01" ;
pre01.class = "width: 300px" ;  // the same width as that of the canvas

//
canvas01.width = 300 ;
canvas01.height = 200 ;
//var r = canvas01.getBoundingClientRect() ;
var rects = canvas01.getClientRects() ;
for (var i = 0; i != rects.length; i++)
{
  pre01.innerText = 'INFO: Rect ' + i + ' (' + r.left + ', ' + r.top + '), (' + r.right + ', ' + r.bottom + ')' ;
}


//
document.getElementById('section-main').insertBefore(canvas01, document.getElementById('script-touchpad')) ;
document.getElementById('section-main').insertBefore(pre01, document.getElementById('script-touchpad')) ;
