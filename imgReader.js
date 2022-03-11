//
var img = new Image() ;
var posOnImage ;  // x and y
var x_start, y_start ;  // PosTouch
var rectOnCanvas ;  // x, y, width, and height
var canvas01 = document.createElement('canvas') ;
var canvas02 = document.createElement('canvas') ;

//
canvas01.id = "canvas01" ;  // image-trackpad-01
canvas02.id = "canvas02" ;  // image-trackpad-02
canvas01.width = 300 ; canvas01.height = 200 ;
canvas02.width = 300 ; canvas02.height = 200 ;

// Event Handler Registration
img.addEventListener('load', function() { handleImgLoad(img) }, false) ;
canvas01.addEventListener('touchstart', handleCanvas01Touchstart, false) ;
canvas01.addEventListener('touchend', handleCanvas01Touchstop, false) ;

// insert the element to the section(document)
document.getElementById('section-main').insertBefore(canvas01, document.getElementById('script-trackpad')) ;
document.getElementById('section-main').insertBefore(canvas02, document.getElementById('script-trackpad')) ;

//
img.src = 'https://img9.yna.co.kr/photo/yna/YH/2019/05/23/PYH2019052319550001300_P4.jpg' ;

// Event Handlers

function handleImgLoad(i)
{
  const iar = calculateAspectRatio(i.naturalWidth, i.naturalHeight) ;
  setCanvasSize(canvas01, iar) ;
  setCanvasSize(canvas02, iar) ;
  posOnImage = JSON.parse('{ "x" : 0, "y" : 0 }') ;
  drawImageToPosOnImage(canvas01, img, posOnImage) ;
  rectOnCanvas = calculateRectOnCanvas(canvas02, iar) ;
  drawImageToRectOnCanvas(canvas02, img, rectOnCanvas) ;
}

function handleCanvas01Touchstart(ev)
{
  ev.preventDefault() ;
  let r = canvas01.getBoundingClientRect() ;
  let touches = ev.changedTouches ;  // an array of touch objects
  
  // save the the coordinate of the touch
  x_start = touches[0].clientX - r.left ;
  y_start = touches[0].clientY - r.top ;
}

function handleCanvas01Touchstop(ev)
{
  ev.preventDefault() ;
  let r = canvas01.getBoundingClientRect() ;
  let touches = ev.changedTouches ;
  
  const x_stop = touches[0].clientX - r.left ;
  const y_stop = touches[0].clientY - r.top ;
  const x_new = calculateDistanceWithinDomain(x_start - x_stop, posOnImage.x, img.naturalWidth - canvas01.width) ;
  const y_new = calculateDistanceWithinDomain(y_start - y_stop, posOnImage.y, img.naturalHeight - canvas01.height) ;
  posOnImage = JSON.parse('{ "x" : ' + x_new + ', "y" : ' + y_new + ' }') ;
  drawImageToPosOnImage(canvas01, img, posOnImage) ;
}

// Sub routines

// drawImage into sub-Rectangle on (Canvas|Image)

function drawImageToRectOnCanvas(p1, p2, p3)  // c(anvas), i(mage), and r(ectangle)
{
  let c = p1 ;
  let si = p2 ;
  const r = p3 ;
  let ctx = c.getContext('2d') ;
  ctx.drawImage(si, r.x, r.y, r.width, r.height) ;
}

function drawImageToPosOnImage(p1, p2, p3)  // c(anvas), i(mage), and p(osition)
{
  let c = p1 ;
  let si = p2 ;
  const sx = p3.x ;
  const sy = p3.y ;
  let ctx = c.getContext('2d') ;
  ctx.drawImage(si, sx, sy, c.width, c.height, 0, 0, c.width, c.height) ;
}

// calculate then set the Size of the Canvas

function setCanvasSize(p1, p2)  // c(anvas) and Real number, the Aspect Ratio of the image
{
  let c = p1 ;
  const iar = p2 ;
  const cw = 300 ;  // Width
  let ch ;
  
  if (iar > 1)
  {
    ch = 200 ;  // 3:2 or 1.5:1
  }
  else
  {
    ch = 300 ;  // 1:1
  }
  
  c.width = cw ;
  c.height = ch ;
}

// calculate sub-Rectangle on the Canvas

function calculateRectOnCanvas(p1, p2)  // c(anvas) and the Aspect Ratio of the image
{
  const c = p1 ;
  const iar = p2 ;
  const car = calculateAspectRatio(c.width, c.height) ;
  let dx, dy, dw, dh ;
  
  if (iar == car)
  {
    dx = 0 ;
    dy = 0 ;
    dw = c.width ;
    dh = c.height ;
  }
  else if (iar < car)
  {
    dh = c.height ;
    dw = Number.parseInt(Number(dh * iar).toFixed(0)) ;
    dy = 0 ;
    dx = Number.parseInt(Number((c.width - dw) / 2).toFixed(0)) ;
  }
  else  // iar > car
  {
    dw = c.width ;
    dh = Number.parseInt(Number(dw / iar).toFixed(0)) ;
    dx = 0 ;
    dy = Number.parseInt(Number((c.height - dh) / 2).toFixed(0)) ;
  }
  return JSON.parse('{ "x" : ' + dx + ', "y" : ' + dy + ', "width" : ' + dw + ', "height" : ' + dh + ' }') ;
}


function calculateAspectRatio(p1, p2)
{
  const w = p1 ;
  const h = p2 ;
  return w / h ;
}

function calculateDistanceWithinDomain(p1, p2, p3)
{
  const v = p1 ;
  const d1 = p2 ;  // distance from Zero
  const d2 = p3 ;
  let d3 = d1 + v ;
  if (d3 < 0)
  {
    d3 = 0 ;
  }
  else if (d3 > d2)
  {
    d3 = d2 ;
  }
  return d3 ;
}
