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
