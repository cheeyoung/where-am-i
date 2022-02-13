// allocation and initialization of the canvas element
var canvas01 = document.createElement('canvas') ;
canvas01.id = "image-touchpad" ;
var pre01 = document.createElement('pre') ;
pre01.id = "log" ;
pre01.class = "width: 300px" ;

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
  
  let touches = ev.changedTouches ;  // an array of touch objects
  console.info('INFO: touchstart ' + touches.length + ' touch(es)') ;

  // save the 1st touch
  pre01.innerText += touches[0].identifier + ', (' + touches[0].clientX + ', ' + touches[0].clientY + ') ' + touches[0].target.id ;
}

function handleTouchstop()
{
}

function handleTouchcancel()
{
}

function handleTouchmove()
{
}
