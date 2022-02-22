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
img.addEventListener('load', , false) ;

img.src = '' ;
iw = img.naturalWidth ;
ih = img.naturalHeight) ;
canvas01.height = ;
sx = 0;
sy = 0;
canvas02.height = ;
dx = ;
dy = ;
dw = ;
dh = ;

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
  ctx.drawImage(img, dx, dy, dw, dh) ;
}
