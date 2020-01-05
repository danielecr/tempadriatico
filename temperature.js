const img = document.getElementById('my-image');
//var canvas = document.createElement('canvas');
const canvas = document.getElementById('canvas');
canvas.width = img.width;
canvas.height = img.height;
const ctx = canvas.getContext('2d');

const drawArrow = (y, baseX = 555) => {
    ctx.strokeStyle = '#000000';
    ctx.lineWidth=3;
    ctx.beginPath();
    ctx.moveTo(baseX,y);
    ctx.lineTo(baseX+10,y-3);
    ctx.moveTo(baseX,y);
    ctx.lineTo(baseX+10,y+3);
    ctx.moveTo(baseX,y);
    ctx.lineTo(baseX+30,y);
    ctx.stroke();
}

const drawImageAndArrow = (img, ypos) => {
  ctx.drawImage(img, 0, 0, img.width, img.height);
  drawArrow(ypos);
}

const cImg = new Image();
cImg.src = img.src
cImg.onload = () => drawImageAndArrow(img, 100);

const getRgbInPoint = (x, y) => ctx.getImageData( x, y,1,1).data

const cmpRgb = (p1,p2) => (p1[0] == p2[0] && p1[1] == p2[1] && p1[2] == p2[2]);

console.log(img.width, img.height, img.src);

const findOnLegend = (pointedRgb) => {
  const minY=73, maxY=549, legendX=555;
  let ypsilon=minY;
  while(!cmpRgb(pointedRgb, getRgbInPoint(legendX, ypsilon)) && ypsilon<maxY ) {
    ypsilon++;
  }
  if (ypsilon < maxY ) {
    drawImageAndArrow(img, ypsilon);
  } else {
    //console.log('not found', ypsilon)
  }
};

let logposition = (evt) => {
    //console.log('position', event.offsetX, event.offsetY);
    const pointedRgb = getRgbInPoint(evt.offsetX, evt.offsetY);
    findOnLegend(pointedRgb);
}

canvas.addEventListener('mousemove',logposition);
