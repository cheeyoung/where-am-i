// allocation and initialization of the canvas element
var canvas01 = document.createElement('canvas') ;
canvas01.id = "image-touchpad" ;
var pre01 = document.createElement('pre') ;
pre01.id = "log" ;
pre01.class = "width: 300px" ;

var x_start, y_start, x_stop, y_stop ;

canvas01.addEventListener('touchstart', handleTouchstart, false) ;
canvas01.addEventListener('touchend', handleTouchstop, false) ;
canvas01.addEventListener('touchcancel', handleTouchcancel, false) ;
canvas01.addEventListener('touchmove', handleTouchmove, false) ;

// load an image
canvas01.width = 300 ;
canvas01.height = 200 ;
var ctx01 = canvas01.getContext('2d') ;
ctx01.fillStyle = 'black' ;
ctx01.fillRect(0, 0, canvas01.width, canvas01.height) ;

// insert the canvas element to the section(document)
document.getElementById('section-main').insertBefore(canvas01, document.getElementById('script-touchpad')) ;
document.getElementById('section-main').insertBefore(pre01, document.getElementById('script-touchpad')) ;

function handleTouchstart(ev)
{
  ev.preventDefault() ;
  var r = canvas01.getBoundingClientRect() ;
  let touches = ev.changedTouches ;  // an array of touch objects

  // save the 1st touch
  x_start = touches[0].clientX - r.left ;
  y_start = touches[0].clientY - r.top ;
  pre01.innerText = 'INFO: touch ' + touches[0].identifier + ' started at (' + touches[0].clientX + ', ' + touches[0].clientY + ') on ' + touches[0].target.id ;
  pre01.innerText += '\nINFO: Bounding Rect (' + r.left + ', ' + r.top + '), (' + r.right + ', ' + r.bottom + ')' ;
  pre01.innerText += '\nINFO: (' + x_start + ', ' + y_start + ')' ;
}

function drawLine(ce)  // canvas element
{
  var ctx01 = ce.getContext('2d') ;
  ctx01.beginPath() ;
  ctx01.moveTo(x_start, y_start) ;
  ctx01.lineTo(x_stop, y_stop) ;
  ctx01.closePath() ;
  ctx01.lineWidth = 1 ;
  ctx01.stroke() ;
}

function handleTouchstop(ev)
{
  ev.preventDefault() ;
  var r = canvas01.getBoundingClientRect() ;
  let touches = ev.changedTouches ;
  
  x_stop = touches[0].clientX - r.left ;
  y_stop = touches[0].clientY - r.top ;
  pre01.innerText += '\nINFO: touch ' + touches[0].identifier + ' stoped at (' + touches[0].clientX + ', ' + touches[0].clientY + ') on ' + touches[0].target.id ;
  pre01.innerText += '\nINFO: Bounding Rect (' + r.left + ', ' + r.top + '), (' + r.right + ', ' + r.bottom + ')' ;
  pre01.innerText += '\nINFO: (' + x_stop + ', ' + y_stop + ')' ;

  drawLine(canvas01) ;
}

function handleTouchcancel()
{
}

function handleTouchmove()
{
}
