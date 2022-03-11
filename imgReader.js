// drawImage into sub-Rectangle on (Canvas|Image)

function drawImageToRectOnCanvas(p1, p2, p3)  // c(anvas), i(mage), and r(ectangle)
{
  let c = p1 ;
  let si = p2 ;
  const r = p3 ;
  let ctx = c.getContext('2d') ;
  ctx.drawImage(si, r.x, r.y, r.width, r.height) ;
}

function drawImageToRectOnImage(p1, p2, p3)  // c(anvas), i(mage), and p(osition)
{
  let c = p1 ;
  let si = p2 ;
  const sx = p3.x ;
  const sy = p3.y ;
  let ctx = c.getContext('2d') ;
  ctx.drawImage(si, sx, sy, c.width, c.height, 0, 0, c.width, c.height) ;
}

// calculate then set the Size of the Canvas

function setCanvasSize(p1, p2)  // Real number, the Aspect Ratio of the image
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
