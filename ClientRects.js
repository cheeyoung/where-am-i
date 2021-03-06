//
var canvas01 = document.createElement('canvas') ;
canvas01.id = "canvas01" ;
var pre01 = document.createElement('pre') ;
pre01.id = "pre01" ;
pre01.class = "width: 300px" ;  // the same width as that of the canvas

//
document.getElementById('section-main').insertBefore(canvas01, document.getElementById('script-touchpad')) ;
document.getElementById('section-main').insertBefore(pre01, document.getElementById('script-touchpad')) ;

//
canvas01.width = 300 ;
canvas01.height = 200 ;
var r = canvas01.getBoundingClientRect() ;
pre01.innerText = 'INFO: Bounding Rect (' + r.left + ', ' + r.top + '), (' + r.right + ', ' + r.bottom + ')' ;
var rects = canvas01.getClientRects() ;
for (var i = 0; i != rects.length; i++)
{
  pre01.innerText += '\nINFO: Rect ' + i + ' (' + rects[i].left + ', ' + rects[i].top + '), (' + rects[i].right + ', ' + rects[i].bottom + ')' ;
}

//
fillCanvasWithBlack(canvas01) ;

function fillCanvasWithBlack(ce)  // canvas element
{
  var ctx01 = ce.getContext('2d') ;
  ctx01.fillStyle = 'black' ;
  ctx01.fillRect(0, 0, ce.width, ce.height) ;
}
