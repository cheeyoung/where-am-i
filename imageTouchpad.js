// allocation and initialization of the canvas element
var canvas01 = document.createElement('canvas') ;
canvas01.id = "image-touchpad" ;

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

function handleTouchstart(ev)
{
  ev.preventDefault() ;
  
  let touches = ev.changedTouches ;
  for (let i = 0; i < touches.length; i++)
  {
    console.info('(' + touches[i].pageX + ', ' + touches[i].pageY + ')') ;
  }
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
