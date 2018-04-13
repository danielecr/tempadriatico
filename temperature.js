
var img = document.getElementById('my-image');
//var canvas = document.createElement('canvas');
var canvas = document.getElementById('canvas');
canvas.width = img.width;
canvas.height = img.height;
let ctx = canvas.getContext('2d');

let drawArrow = (y) => {
    let baseX = 555;
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

let cImg = new Image();
cImg.src = img.src
cImg.onload = () => {
    ctx.drawImage(img, 0, 0, img.width, img.height);
	drawArrow(100);
}    


console.log(img.width, img.height, img.src);

let findOn552 = (pData) => {
    let ypsilon=73;
    for(ypsilon=73; ypsilon<549; ypsilon++) {
	let lData =  ctx.getImageData( 555, ypsilon,1,1).data;
	if(lData[0] == pData[0] &&
	   lData[1] == pData[1] &&
	   lData[2] == pData[2]) {
	    break;
	}
    }
    if (ypsilon < 549 ) {
	ctx.drawImage(img, 0, 0, img.width, img.height);
	drawArrow(ypsilon);
	//ctx.drawLine(552,ypsilon, 562,ypsilon);
    } else {
	console.log('not found', ypsilon)
    }
};

	drawArrow(100);

let logposition = (evt) => {
    //console.log('position', event.offsetX, event.offsetY);
    var pixelData = ctx.getImageData( evt.offsetX, evt.offsetY,1,1).data;
    findOn552(pixelData);
    //console.log('data',pixelData);
}

canvas.addEventListener('mousemove',logposition);
