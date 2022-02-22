//
var cRect = new DOMRect(0, 0, 300, 200) ;
var canvas01 = document.createElement('canvas') ;
canvas01.id = "canvas01" ;  // image-trackpad-01
canvas01.width = cRect.width ;
canvas01.height = cRect.height ;
var canvas01 = document.createElement('canvas') ;
canvas02.id = "canvas02" ;  // image-trackpad-02
canvas02.width = cRect.width ;
canvas02.height = cRect.height ;

var pre01 = document.createElement('pre') ;
pre01.id = "log" ;
pre01.class = "width: 300px" ;

var img = new Image() ;
var iw, ih ;
var sx, sy ;
var dx, dy, dw, dh ;
img.addEventListener('load', setImgContentMetadata(), false) ;

var x_start, y_start, x_stop, y_stop ;
canvas01.addEventListener('touchstart', canvas01Touchstart, false) ;
canvas01.addEventListener('touchend', canvas01Touchstop, false) ;
canvas01.addEventListener('touchcancel', canvas01Touchcancel, false) ;
canvas01.addEventListener('touchmove', canvas01Touchmove, false) ;

// insert the element to the section(document)
document.getElementById('section-main').insertBefore(canvas01, document.getElementById('script-trackpad')) ;
document.getElementById('section-main').insertBefore(canvas02, document.getElementById('script-trackpad')) ;
document.getElementById('section-main').insertBefore(pre01, document.getElementById('script-trackpad')) ;

img.src = 'https://img9.yna.co.kr/photo/yna/YH/2019/05/23/PYH2019052319550001300_P4.jpg' ;

function setImgContentMetadata()
{
  iw = img.naturalWidth ;
  ih = img.naturalHeight ;
  canvas01.height = 300 ;
  sx = 0 ; sy = 0 ;
  canvas02.height = 300 ;
  dx = 0 ; dy = 0 ; dw = 0 ; dh = 0 ;
}

function updateCanvas01()
{
  const cw = canvas01.width ;
  const ch = canvas01.height ;
  let ctx = canvas01.getContext('2d') ;
  ctx.drawImage(img, sx, sy, cw, ch, 0, 0, cw, ch) ;  // cRect.x and cRect.y are 0
}

function updateCanvas02()
{
  let ctx = canvas02.getContext('2d') ;
//  ctx.drawImage(img, dx, dy, dw, dh) ;
}

function canvas01Touchstart(ev)
{
  ev.preventDefault() ;
  let r = canvas01.getBoundingClientRect() ;
  let touches = ev.changedTouches ;  // an array of touch objects

  // save the 1st touch
  x_start = touches[0].clientX - r.left ;
  y_start = touches[0].clientY - r.top ;
  pre01.innerText = 'INFO: touch started at (' + x_start + ', ' + y_start + ')' ;
  pre01.innerText += '\nINFO: touch ' + touches[0].identifier + ' started at (' + touches[0].clientX + ', ' + touches[0].clientY + ') on ' + touches[0].target.id ;
  pre01.innerText += '\nINFO: Bounding Rect (' + r.left + ', ' + r.top + '), (' + r.right + ', ' + r.bottom + ')' ;
}

function canvas01Touchstop(ev)
{
  ev.preventDefault() ;
  let r = canvas01.getBoundingClientRect() ;
  let touches = ev.changedTouches ;
  
  x_stop = touches[0].clientX - r.left ;
  y_stop = touches[0].clientY - r.top ;
  pre01.innerText += '\nINFO: touch stopped at (' + x_stop + ', ' + y_stop + ')' ;
  pre01.innerText += '\nINFO: touch ' + touches[0].identifier + ' stoped at (' + touches[0].clientX + ', ' + touches[0].clientY + ') on ' + touches[0].target.id ;
  pre01.innerText += '\nINFO: Bounding Rect (' + r.left + ', ' + r.top + '), (' + r.right + ', ' + r.bottom + ')' ;

  updateCanvas01() ;
}

function canvas01Touchcancel()
{
}

function canvas01Touchmove()
{
}
