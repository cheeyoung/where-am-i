function createImageContentMetadata(i)  // image element
{
  const w = i.naturalWidth ;  // integer
  const h = i.naturalHeight ;
  const aspectRatio = calculateAspectRatio(w, h) ;
  const c = calculateCenter(w, h) ;
  return JSON.parse('{ "width" : ' + w + ', "height" : ' + h + ', "" : ' + aspectRatio + ', "" : ' +  + ' }') ;
}

// the coordinate of the center of the image
function calculateCenter(p1, p2)  // integer
{
  const w = p1 ;
  const h = p2 ;
  return JSON.parse('{ "" : ' + Number(w / 2).toFixed(0) + ', "" : ' + Number(h / 2).toFixed(0) + ' }') ;  // 0.5 is round up to 1
}

function calculateAspectRatio(p1, p2)  // integer
{
  const w = p1 ;
  const h = p2 ;
  return w / h ;  // precision
}
