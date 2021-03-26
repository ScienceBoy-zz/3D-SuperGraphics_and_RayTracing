function drawLine(x1,y1,x2,y2,thickness,DrawingContext,color) 
{ 
	DrawingContext.beginPath();  
	DrawingContext.strokeStyle = color;  
	DrawingContext.lineWidth = thickness;  
	DrawingContext.moveTo(x1,y1);  
	DrawingContext.lineTo(x2,y2);  
	DrawingContext.stroke();  
}
//drawLine(20,50,40,80,1,DrawingContext,"#00FF00");

function drawBox(x1,y1,x2,y2,thickness,DrawingContext,color,fill) 
{ 
	if (x2>x1) {var temp = x2; x2 = x1; x1 = temp;} // make sure x2 is > x1 
	if (y2>y1) {var temp = y2; y2 = y1; y1 = temp;} // make sure y2 is > y1 
	DrawingContext.beginPath(); 
	DrawingContext.fillStyle = color; 
	DrawingContext.strokeStyle = color; 
	DrawingContext.lineWidth = thickness; 
	if (fill == true) {DrawingContext.fillRect(x1,y1,x2-x1,y2-y1);} 
	if (fill == false) {DrawingContext.strokeRect(x1,y1,x2-x1,y2-y1);} 
	DrawingContext.stroke(); 
} 
//drawBox(130,160,140,150,1,DrawingContext,"#FF0000",false); 
			
function drawCircle(x,y,r,startAngle,endAngle,thickness,DrawingContext,color,fill) 
{ 
	var pi = 3.1415; 
	DrawingContext.beginPath(); 
	DrawingContext.fillStyle = color; 
	DrawingContext.strokeStyle = color; 
	DrawingContext.lineWidth = thickness; 
	DrawingContext.arc(x,y,r,startAngle/360*2*pi,endAngle/360*2*pi); 
	DrawingContext.stroke(); 
	if (fill==true) {DrawingContext.fill();} 
} 
//drawCircle(230,260,30,0,360,1,DrawingContext,"#FF0000",true); 

function drawText(x,y,text,DrawingContext,color,textAlign) 
{ 
	DrawingContext.fillStyle = color; 
	DrawingContext.lineWidth = 1; 
	DrawingContext.font = "16px Arial"; 
	DrawingContext.textAlign = textAlign; 
	DrawingContext.fillText(text,x,y); 
} 
//drawText(30,260,"Howdi",DrawingContext,"#FF00FF","center"); 

//// Artificial path:
// DrawingContext.fillStyle = "#00FF00"; 
// DrawingContext.strokeStyle = "#0000FF"; 
// DrawingContext.beginPath();
// DrawingContext.moveTo(130,50);
// DrawingContext.lineTo(50,230);
// DrawingContext.lineTo(220,50);
// DrawingContext.lineTo(40,170);
// DrawingContext.lineTo(125,40);
// DrawingContext.closePath();
// DrawingContext.stroke();        
// DrawingContext.fill(); 

function drawBoxFromPressedButton(x) 
{ 
	DrawingContext.fillRect(70,20,60,20); 
} 

function drawBoxFromPushedButton(x) 
{ 
	DrawingContext.fillRect(30,60,60,20); 
} 
function clearScreen() 
{ 
	DrawingContext.clearRect(0,0,canvas.width,canvas.height); 
} 
	
// window.addEventListener('mousemove', 
// function (event) 
// {
	// var mousePos = getMousePos(canvas, event); 
	// DrawingContext.fillRect(mousePos.x, mousePos.y, 10, 10);
// }
// , false);
	
function getMousePos(canvas, event) 
{ 
	var rect = canvas.getBoundingClientRect(); 	
	return { 
		x: (event.clientX - rect.left) / (rect.right - rect.left) * canvas.width, 
		y: (event.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height 
	}; 
} 

function Array1D(x)
{
	this.items = new Array(x);
}

function Array2D(x,y)
{ 
	this.items = new Array(x);
	for (i = 0; i < x; i++) this.items[i] = new Array(y); 
}
// var a = new Array2D(3,3); 
// a.items[1][1] = 'hello'; 
// alert(a.items[1][1]); 

function Array3D(x,y,z) 
{ 
	this.items = new Array(x);
	for (i = 0; i < x; i++) this.items[i] = new Array(y); 
	for (i = 0; i < x; i++) for (j = 0; j < y; j++) this.items[i][j] = new Array(z); 
}

















