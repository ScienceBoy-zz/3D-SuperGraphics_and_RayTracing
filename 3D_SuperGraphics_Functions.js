// Latest Major Changes:
// v1.00 26.03.2021 Complete program after completion of all chapters for Udemy Online Course
// v1.01 07.05.2021 Added elapsed time calculation
// v1.02 08.05.2021 Added 4 views
// v1.03 08.05.2021 Changed load and safe to take areas instead of points
// v2.00 18.05.2021 Changed to 4 views, added many functions and changed shadow to have part of object color and part of color of object which gives shadow
// v2.01 20.05.2021 Added load function for 3D-objects saved in STL-format
// v2.02 20.05.2021 Added the use of up to 10 light sources


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
	DrawingContext.font = "12px Arial"; 
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
	DrawingContext.clearRect(0,0,Canvas.width,Canvas.height); 
	DrawingContextTop.clearRect(0,0,CanvasTop.width,CanvasTop.height); 
	DrawingContextSide.clearRect(0,0,CanvasSide.width,CanvasSide.height); 
	DrawingContextFront.clearRect(0,0,CanvasFront.width,CanvasFront.height); 
	DrawingContextObjectAll.clearRect(0,0,CanvasObjectAll.width,CanvasObjectAll.height); 
	DrawingContextObject0.clearRect(0,0,CanvasObject0.width,CanvasObject0.height); 
	DrawingContextObject1.clearRect(0,0,CanvasObject1.width,CanvasObject1.height); 
	DrawingContextObject2.clearRect(0,0,CanvasObject2.width,CanvasObject2.height); 
	DrawingContextObject3.clearRect(0,0,CanvasObject3.width,CanvasObject3.height);
	DrawingContextObject4.clearRect(0,0,CanvasObject4.width,CanvasObject4.height); 
	DrawingContextObject5.clearRect(0,0,CanvasObject0.width,CanvasObject5.height); 
	DrawingContextObject6.clearRect(0,0,CanvasObject1.width,CanvasObject6.height); 
	DrawingContextObject7.clearRect(0,0,CanvasObject2.width,CanvasObject7.height); 
	DrawingContextObject8.clearRect(0,0,CanvasObject3.width,CanvasObject8.height);
} 
	
// window.addEventListener('mousemove', 
// function (event) 
// {
	// var mousePos = getMousePos(Canvas, event); 
	// DrawingContext.fillRect(mousePos.x, mousePos.y, 10, 10);
// }
// , false);
	
function getMousePos(Canvas, event) 
{ 
	var rect = CanvasFront.getBoundingClientRect(); 	
	return { 
		x: (event.clientX - rect.left) / (rect.right - rect.left) * Canvas.width, 
		y: (event.clientY - rect.top) / (rect.bottom - rect.top) * Canvas.height 
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

function EnterNewPoints() 
{ 
	window.addEventListener('mousemove', mousemoveevent); 
	window.addEventListener('mousedown', mousedownevent); 
	window.addEventListener('keydown', keydownevent); 
	Canvas.addEventListener("focus", ChangeFocusToCanvas);
	CanvasTop.addEventListener("focus", ChangeFocusToCanvasTop);
	CanvasSide.addEventListener("focus", ChangeFocusToCanvasSide);
	CanvasFront.addEventListener("focus", ChangeFocusToCanvasFront);		
	Canvas.addEventListener("mouseenter", ChangeFocusToCanvas);
	CanvasTop.addEventListener("mouseenter", ChangeFocusToCanvasTop);
	CanvasSide.addEventListener("mouseenter", ChangeFocusToCanvasSide);
	CanvasFront.addEventListener("mouseenter", ChangeFocusToCanvasFront);
	//drawText(10,20,"Click to enter a new point. Press space to finish entering points. Or press <<L>> key if you have saved a scene before.",DrawingContext,"#0000FF","left");   
	ShowAxesAndEnteredPoints();
}

var rangezoom = document.querySelector("#zoom");
var rangeperspective = document.querySelector("#perspective");
var rangex1 = document.querySelector("#rangex1");
var rangez1 = document.querySelector("#rangez1");
var rangez2 = document.querySelector("#rangez2");
var rangey2 = document.querySelector("#rangey2");
var rangex3 = document.querySelector("#rangex3");
var rangey3 = document.querySelector("#rangey3");

rangezoom.addEventListener("input", function() {zoomen(this.value); ShowAreaOf3DObject();})
rangeperspective.addEventListener("input", function() {DistortionDistance = -this.value; ShowAreaOf3DObject();})
rangez1.addEventListener("input", function() {if (RotateSelected) {AngleX = this.value; RotateAll(); ShowAreaOf3DObject();} else if (MoveSelected) {MoveZ = this.value/5; MoveAll(); ShowAreaOf3DObject();}  else if (ChangeSizeInOneDirectionSelected) {MoveZ = this.value/5; ReduceSizeInOneDirection(); ShowAreaOf3DObject();}})
rangex1.addEventListener("input", function() {if (RotateSelected) {AngleY = this.value; RotateAll(); ShowAreaOf3DObject();} else if (MoveSelected) {MoveX = -this.value/5; MoveAll(); ShowAreaOf3DObject();}  else if (ChangeSizeInOneDirectionSelected) {MoveX = -this.value/5; ReduceSizeInOneDirection(); ShowAreaOf3DObject();}})
rangez2.addEventListener("input", function() {if (RotateSelected) {AngleX = -this.value; RotateAll(); ShowAreaOf3DObject();} else if (MoveSelected) {MoveZ = -this.value/5; MoveAll(); ShowAreaOf3DObject();}  else if (ChangeSizeInOneDirectionSelected) {MoveZ = -this.value/5; ReduceSizeInOneDirection(); ShowAreaOf3DObject();}})
rangey2.addEventListener("input", function() {if (RotateSelected) {AngleZ = -this.value; RotateAll(); ShowAreaOf3DObject();} else if (MoveSelected) {MoveY = this.value/5; MoveAll(); ShowAreaOf3DObject();}  else if (ChangeSizeInOneDirectionSelected) {MoveY = this.value/5; ReduceSizeInOneDirection(); ShowAreaOf3DObject();}})
rangex3.addEventListener("input", function() {if (RotateSelected) {AngleZ = -this.value/3; RotateAll(); ShowAreaOf3DObject();} else if (MoveSelected) {MoveX = -this.value/5; MoveAll(); ShowAreaOf3DObject();}  else if (ChangeSizeInOneDirectionSelected) {MoveX = -this.value/5; ReduceSizeInOneDirection(); ShowAreaOf3DObject();}})
rangey3.addEventListener("input", function() {if (RotateSelected) {AngleX = this.value/3; RotateAll(); ShowAreaOf3DObject();} else if (MoveSelected) {MoveY = this.value/5; MoveAll(); ShowAreaOf3DObject();}  else if (ChangeSizeInOneDirectionSelected) {MoveY = this.value/5; ReduceSizeInOneDirection(); ShowAreaOf3DObject();}})
rangezoom.addEventListener("mouseup", function() {this.value=1;})
// rangeperspective.addEventListener("mouseup", function() {this.value=1000;})
rangez1.addEventListener("mouseup", function() {this.value=0;})
rangex1.addEventListener("mouseup", function() {this.value=0;})
rangez2.addEventListener("mouseup", function() {this.value=0;})
rangey2.addEventListener("mouseup", function() {this.value=0;})
rangex3.addEventListener("mouseup", function() {this.value=0;})
rangey3.addEventListener("mouseup", function() {this.value=0;})

var rangeRed = document.querySelector("#ColorRed");
var rangeGreen = document.querySelector("#ColorGreen");
var rangeBlue = document.querySelector("#ColorBlue");
var rangeColors = document.getElementById("Colors");
			
// rangeRed.addEventListener("input", function() {SetColor(this.value, "red"); ShowAreaOf3DObject();})
// rangeGreen.addEventListener("input", function() {SetColor(this.value, "green"); ShowAreaOf3DObject();})
// rangeBlue.addEventListener("input", function() {SetColor(this.value, "blue"); ShowAreaOf3DObject();})
// rangeColors.addEventListener("input", function() {SetColor(this.value, "colors"); ShowAreaOf3DObject();}, false);
rangeColors.addEventListener("change", function() {SetColor(this.value, "colors"); ShowAreaOf3DObject();}, false);
rangeColors.select();
// rangeRed.addEventListener("mouseup", function() {this.value=0;})
// rangeGreen.addEventListener("mouseup", function() {this.value=0;})
// rangeBlue.addEventListener("mouseup", function() {this.value=0;})

var rangeRefractiveIndexOfMaterial = document.querySelector("#RefractiveIndexOfMaterial");
var rangeSurfaceStructur = document.querySelector("#SurfaceStructur");
var rangePartOfDirectLight = document.querySelector("#PartOfDirectLight");
var rangePartOfReflectlight = document.querySelector("#PartOfReflectlight");
var rangePartOfRefractionlight = document.querySelector("#PartOfRefractionlight");
var rangePartSurrounding = document.querySelector("#PartSurrounding");
			
rangeRefractiveIndexOfMaterial.addEventListener("mouseup", function() {SetPropertiesOfMaterial(this.value, "RefractiveIndexOfMaterial"); ShowAreaOf3DObject();})
rangeSurfaceStructur.addEventListener("mouseup", function() {SetPropertiesOfMaterial(this.value, "SurfaceStructur"); ShowAreaOf3DObject();})
rangePartOfDirectLight.addEventListener("mouseup", function() {SetPropertiesOfMaterial(this.value, "PartOfDirectLight"); ShowAreaOf3DObject();})
rangePartOfReflectlight.addEventListener("mouseup", function() {SetPropertiesOfMaterial(this.value, "PartOfReflectlight"); ShowAreaOf3DObject();})
rangePartOfRefractionlight.addEventListener("mouseup", function() {SetPropertiesOfMaterial(this.value, "PartOfRefractionlight"); ShowAreaOf3DObject();})
rangePartSurrounding.addEventListener("mouseup", function() {SetPropertiesOfMaterial(this.value, "PartSurrounding"); ShowAreaOf3DObject();})
// rangeRefractiveIndexOfMaterial.addEventListener("mouseup", function() {this.value=0;})
// rangeSurfaceStructur.addEventListener("mouseup", function() {this.value=0;})
// rangePartOfDirectLight.addEventListener("mouseup", function() {this.value=0;})
// rangePartOfReflectlight.addEventListener("mouseup", function() {this.value=0;})
// rangePartOfRefractionlight.addEventListener("mouseup", function() {this.value=0;})
// rangePartSurrounding.addEventListener("mouseup", function() {this.value=0;})
	
			
CanvasObjectAll.addEventListener("click", ChangeFocusToCanvasAll);	
CanvasObject0.addEventListener("click", ChangeFocusToCanvas0);
CanvasObject1.addEventListener("click", ChangeFocusToCanvas1);
CanvasObject2.addEventListener("click", ChangeFocusToCanvas2);
CanvasObject3.addEventListener("click", ChangeFocusToCanvas3);
CanvasObject4.addEventListener("click", ChangeFocusToCanvas4);	
CanvasObject5.addEventListener("click", ChangeFocusToCanvas5);
CanvasObject6.addEventListener("click", ChangeFocusToCanvas6);
CanvasObject7.addEventListener("click", ChangeFocusToCanvas7);
CanvasObject8.addEventListener("click", ChangeFocusToCanvas8);
			
function ChangeFocusToCanvas(event) {CanvasFocus = true; CanvasTopFocus = false; CanvasSideFocus = false; CanvasFrontFocus = false;}
function ChangeFocusToCanvasTop(event) {CanvasFocus = false; CanvasTopFocus = true; CanvasSideFocus = false; CanvasFrontFocus = false;}
function ChangeFocusToCanvasSide(event) {CanvasFocus = false; CanvasTopFocus = false; CanvasSideFocus = true; CanvasFrontFocus = false;}
function ChangeFocusToCanvasFront(event) {CanvasFocus = false; CanvasTopFocus = false; CanvasSideFocus = false; CanvasFrontFocus = true;}
function ChangeFocusToCanvasAll(event) {if (CanvasObjectAll.style.border == '1px solid red') {UnSelectObject("all"); CanvasObjectAll.style.border = '1px solid black';} else {SelectObject("all"); CanvasObjectAll.style.border = '1px solid red';}}
function ChangeFocusToCanvas0(event) {SelectObject("0"); CanvasObject0.style.border = '1px solid red';}
function ChangeFocusToCanvas1(event) {SelectObject("1"); CanvasObject1.style.border = '1px solid red';}
function ChangeFocusToCanvas2(event) {SelectObject("2"); CanvasObject2.style.border = '1px solid red';}
function ChangeFocusToCanvas3(event) {SelectObject("3"); CanvasObject3.style.border = '1px solid red';}
function ChangeFocusToCanvas4(event) {SelectObject("4"); CanvasObject4.style.border = '1px solid red';}
function ChangeFocusToCanvas5(event) {SelectObject("5"); CanvasObject5.style.border = '1px solid red';}
function ChangeFocusToCanvas6(event) {SelectObject("6"); CanvasObject6.style.border = '1px solid red';}
function ChangeFocusToCanvas7(event) {SelectObject("7"); CanvasObject7.style.border = '1px solid red';}
function ChangeFocusToCanvas8(event) {SelectObject("8"); CanvasObject8.style.border = '1px solid red';}

function mousemoveevent(event) {mousePos = getMousePos(Canvas, event); ShowMousemove();} 
function mousedownevent(event) {AddMousePosition();} 
function keydownevent(event) 
{
	switch(event.keyCode)
	{
		case 33: // "page up" key
			CloneAreaValues(AreaOriginal, Area);
			NumberOfCompleteObjects--;
			DeleteObject(NumberOfCompleteObjects);
			NumberOfRotationSegments++;
			// clearScreen();			
			if (NumberOfRotationSegments > MaxNbOfRotSegments) {NumberOfRotationSegments = MaxNbOfRotSegments;} 
			CreateRotationObject(); 
			UnSelectAll();
			SelectObject(NumberOfCompleteObjects);
			NumberOfCompleteObjects++; 
			// CopyObject(NumberOfCompleteObjects);
			break; 
		case 34: // "page down" key
			CloneAreaValues(AreaOriginal, Area);
			NumberOfCompleteObjects--;
			DeleteObject(NumberOfCompleteObjects);
			NumberOfRotationSegments--;
			// clearScreen();
			if (NumberOfRotationSegments < 2) {NumberOfRotationSegments = 2;} 
			CreateRotationObject(); 
			UnSelectAll();
			SelectObject(NumberOfCompleteObjects);
			NumberOfCompleteObjects++; 
			// CopyObject(NumberOfCompleteObjects);
			break;
		case 86: // "v" key
			Perspective = 1-Perspective; 
			RotateAll();
			// ApplyPerspectiveDistortionIfRequired(); 
			// Show3dObject(); 
			ShowAreaOf3DObject();
			break;
		case 54: // "6" key 
		case 102: 
			NumberOfRotationsX =   1; 
			AngleX = NumberOfRotationsX * increment; AngleY = 0; AngleZ = 0;
			RotateAll(); 
			// ApplyPerspectiveDistortionIfRequired(); 
			// Show3dObject(); 
			ShowAreaOf3DObject();
			break; 
		case 52: // "4" key 
		case 100: 
			NumberOfRotationsX =  -1; 
			AngleX = NumberOfRotationsX * increment; AngleY = 0; AngleZ = 0;
			RotateAll(); 
			// ApplyPerspectiveDistortionIfRequired(); 
			// Show3dObject(); 
			ShowAreaOf3DObject();
			break; 
		case 56: // "8" key 
		case 104: 
			NumberOfRotationsY =   1; 
			AngleY = NumberOfRotationsY * increment; AngleX = 0; AngleZ = 0;
			RotateAll(); 
			// ApplyPerspectiveDistortionIfRequired(); 
			// Show3dObject(); 
			ShowAreaOf3DObject(); 
			break; 
		case 50: // "2" key
		case 98: 
			NumberOfRotationsY =  -1; 
			AngleY = NumberOfRotationsY * increment; AngleX = 0; AngleZ = 0;
			RotateAll(); 
			// ApplyPerspectiveDistortionIfRequired(); 
			// Show3dObject(); 
			ShowAreaOf3DObject(); 
			break; 
		case 49: // "1" key 
		case 97: 
			NumberOfRotationsZ =   1; 
			AngleZ = NumberOfRotationsZ * increment; AngleX = 0; AngleY = 0;
			RotateAll(); 
			// ApplyPerspectiveDistortionIfRequired(); 
			// Show3dObject(); 
			ShowAreaOf3DObject(); 
			break; 
		case 57: // "9" key 
		case 105: 
			NumberOfRotationsZ =   -1; 
			AngleZ = NumberOfRotationsZ * increment; AngleX = 0; AngleY = 0;
			RotateAll(); 
			// ApplyPerspectiveDistortionIfRequired(); 
			// Show3dObject(); 
			ShowAreaOf3DObject(); 
			break; 
		case 68: // "d" key 
			DrawingMethod = DrawingMethod + 1; if (DrawingMethod > 3) {DrawingMethod = 0;} 
			ShowAreaOf3DObject(); 
			break;
		case 82: // "r" key
			RayTracingStart();
			break;
		case 81: // "q"	key
			if (Resolution < StandardResolution*100) 
			{
				Resolution = Resolution*2;
			}
			else
			{	
				Resolution = StandardResolution;
			}
			setTimeout(function() {document.title = "Resolution set to: "+Resolution;},0);
			break;
		case 83: // "s" key
			SaveAsImage();
			break;
		case 75: // "k" key
			SaveAreaObject();
			break;
		case 76: // "l" key
			LoadAreaObject();
			break;
		case 67: // "c" key 
			CreateCube();
			break;			
		case 77: // "m" key
			CreateSphere();
			break;			
		case 78: // "n" key
			CreateWaves();
			break;
		case 70: // "f" key
			MoveX=1; 
			MoveAll(); 
			ShowAreaOf3DObject();
			break;
		case 71: // "g" key
			MoveX=-1; 
			MoveAll(); 
			ShowAreaOf3DObject();
			break;
		case 72: // "h" key
			MoveY=1; 
			MoveAll(); 
			ShowAreaOf3DObject();
			break;
		case 73: // "i" key
			MoveY=-1; 
			MoveAll(); 
			ShowAreaOf3DObject();
			break;
		case 89: // "y" key
			MoveZ=1; 
			MoveAll(); 
			ShowAreaOf3DObject();
			break;
		case 90: // "z" key
			MoveZ=-1; 
			MoveAll(); 
			ShowAreaOf3DObject();
			break;
		case 32: // "space" key
			KeyPressed = 1; 
			CheckIfAllPointsWereEntered();
			break;
	}
} 

function RayTracingStart()
{
	setTimeout(function() {document.title = "Starting calculation..."; var tempTime = new Date(); StartTime = tempTime.getTime();},0);
	// ApplyPerspectiveDistortionForArea();
	PrepareConstants();
	RayTracing();
	setTimeout(function() {var tempTime = new Date(); document.title = "Calculation finished. ("+((tempTime.getTime()-StartTime)/1000)+"s)"; docTitle = 0;},0);
}

function RayTracingStart2K()
{
	setTimeout(function() {document.title = "Starting calculation..."; var tempTime = new Date(); StartTime = tempTime.getTime();},0);
	// ApplyPerspectiveDistortionForArea();
	
	setTimeout(function() 
	{
		Image2K = true; 
		// Canvas2K.style.zIndex = 100000;
		// var CanvasOriginal = Canvas;
		
		// Canvas = document.getElementById("Canvas2K"); 
		// rect = Canvas.getBoundingClientRect(); 
		
		// Canvas.width = rect2K.width; 
		// Canvas.height = rect2K.height; 
		// Canvas.left = rect2K.left;
		// Canvas.top = rect2K.top;
		// DrawingContext = Canvas.getContext("2d"); 
		// DrawingContext.scale(1, 1); 

		// width = Canvas2K.width; 
		// height = Canvas2K.height
	},0);

	setTimeout(function() 
	{
		// SelectObject("all"); 
		/* zoomen(width/Canvas.width);  */
		ZoomFaktor = Canvas2K.width/Canvas.width;
		// ApplyPerspectiveDistortionForArea();
	},0);
	
	setTimeout(function() 
	{
		PrepareConstants();
		RayTracing();
	},0);

	setTimeout(function() {
		SaveAsImage(); 
		// SelectObject("all"); 
		// zoomen(Canvas.width/width); 
		ZoomFaktor = 1;
		
		Image2K = false; 
		// width = Canvas.width; 
		// height = Canvas.height

		// Canvas = document.getElementById("Canvas"); 
		// rect = Canvas.getBoundingClientRect(); 
		
		// Canvas.width = rect.width; 
		// Canvas.height = rect.height; 
		// Canvas.left = rect.left;
		// Canvas.top = rect.left;
		// DrawingContext = Canvas.getContext("2d"); 
		// DrawingContext.scale(1, 1); 
		ShowAreaOf3DObject();
	},10000);

	setTimeout(function() {var tempTime = new Date(); document.title = "Calculation finished. ("+((tempTime.getTime()-StartTime)/1000)+"s and 2K-Image saved)"; docTitle = 0;},10000);

}

function CheckIfAllPointsWereEntered()
{
	if (NumberOfPoints >= 2 && (NumberOfPoints > MaxNumberOfPoints || KeyPressed == 1)) 
	{
		clearScreen();
		ShowAxesAndEnteredPoints();
		drawLine(PointCoordinatesArray.items[NumberOfPoints-1][0] + width/2, height/2 - PointCoordinatesArray.items[NumberOfPoints-1][1], PointCoordinatesArray.items[0][0] + width/2, height/2 - PointCoordinatesArray.items[0][1], 1, DrawingContextFront,"#000000");
		window.removeEventListener('mousemove',mousemoveevent); 
		window.removeEventListener('mousedown',mousedownevent); 
		//window.removeEventListener('keydown',keydownevent);
		TotalEnteredPoints = NumberOfPoints;
		CreateRotationObject();
		NumberOfCompleteObjects++; 
	}
	else
	{
		KeyPressed = 0;
	}
}

function ShowMousemove()
{
	if (NumberOfPoints == 0) 
	{ 
		oldx = mousePos.x; 
		oldy = mousePos.y; 
	} 
	else
	{
		if ((mousePos.x != oldx) || (mousePos.y != oldy))
		{
			drawLine(oldkoorx, oldkoory, oldx, oldy, 3, DrawingContextFront,"#FFFFFF"); 
			drawLine(oldkoorx, oldkoory, mousePos.x, mousePos.y, 1, DrawingContextFront,"#000000");       
			oldx = mousePos.x; 
			oldy = mousePos.y;
		}
	}
	ShowAxesAndEnteredPoints();
}

function AddMousePosition() 
{
	// if (CanvasFocus == true) drawText(30, 30, ((mousePos.x - Canvas.left) +" / "+(mousePos.y - Canvas.top)), DrawingContext,"#000000","left");
	// if (CanvasTopFocus == true) drawText(30, 30, ((mousePos.x - CanvasTop.left) +" / "+(mousePos.y - CanvasTop.top)), DrawingContextTop,"#000000","left");
	// if (CanvasSideFocus == true) drawText(30, 30, ((mousePos.x - CanvasSide.left) +" / "+(mousePos.y - CanvasSide.top)), DrawingContextSide,"#000000","left");
	// if (CanvasFrontFocus == true) drawText(30, 30, ((mousePos.x - CanvasFront.left) +" / "+(mousePos.y - CanvasFront.top)), DrawingContextFront,"#000000","left");
	if (mousePos.x < CanvasFront.width && mousePos.x > 0 && mousePos.y < CanvasFront.height && mousePos.y > 0)
	{
		PointCoordinatesArray.items[NumberOfPoints][0] = mousePos.x - width/2;
		PointCoordinatesArray.items[NumberOfPoints][1] = height/2 - mousePos.y; 
		PointCoordinatesArray.items[NumberOfPoints][2] = 0;
		oldkoorx = mousePos.x; 
		oldkoory = mousePos.y; 
		NumberOfPoints = NumberOfPoints + 1; 
		ShowAxesAndEnteredPoints();
		CheckIfAllPointsWereEntered();
	}
}

function ShowAxesAndEnteredPoints() 
{
  for (i = 0; i < 1; i++)
  {
	drawLine(width/2, 0, width/2, height, 1, DrawingContext,"#000000");
	drawLine(0, height/2, width, height/2, 1, DrawingContext,"#000000"); 
	drawText(10, 15, "Perspective", DrawingContext,"#000000","left"); 
	for (i = 0; i < NumberOfPoints; i++) 
	{  
		var x1 = PointCoordinatesArray.items[i][0] + width/2; 
		var y1 = height/2 - PointCoordinatesArray.items[i][1]; 
		if (i >= 1) 
		{ 
			var x2 = PointCoordinatesArray.items[i-1][0] + width/2; 
			var y2 = height/2 - PointCoordinatesArray.items[i-1][1]; 
			drawLine(x1, y1, x2, y2, 1, DrawingContext,"#000000"); 
		}
		drawText(x1+10, y1+10, (i+1), DrawingContext,"#000000","left"); 
	}
  }
  
  for (i = 0; i < 1; i++)
  {
	drawLine(width/2, 0, width/2, height, 1, DrawingContextTop,"#000000");
	drawLine(0, height/2, width, height/2, 1, DrawingContextTop,"#000000"); 
	drawText(10, 15, "Top", DrawingContextTop,"#000000","left");
	for (i = 0; i < NumberOfPoints; i++) 
	{  
		var x1 = PointCoordinatesArray.items[i][0] + width/2; 
		var z1 = height/2 - PointCoordinatesArray.items[i][2]; 
		if (i >= 1) 
		{ 
			var x2 = PointCoordinatesArray.items[i-1][0] + width/2; 
			var z2 = height/2 - PointCoordinatesArray.items[i-1][2]; 
			drawLine(x1, z1, x2, z2, 1, DrawingContextTop,"#000000"); 
		}
		drawText(x1+10, z1+10, (i+1), DrawingContextTop,"#000000","left"); 
	}
  }
  
  for (i = 0; i < 1; i++)
  {
	drawLine(width/2, 0, width/2, height, 1, DrawingContextSide,"#000000");
	drawLine(0, height/2, width, height/2, 1, DrawingContextSide,"#000000"); 
	drawText(10, 15, "Side", DrawingContextSide,"#000000","left");
	for (i = 0; i < NumberOfPoints; i++) 
	{  
		var y1 = PointCoordinatesArray.items[i][1] + width/2; 
		var z1 = height/2 - PointCoordinatesArray.items[i][2]; 
		if (i >= 1) 
		{ 
			var y2 = PointCoordinatesArray.items[i-1][1] + width/2; 
			var z2 = height/2 - PointCoordinatesArray.items[i-1][2]; 
			drawLine(z1, y1, z2, y2, 1, DrawingContextSide,"#000000"); 
		}
		drawText(z1+10, y1+10, (i+1), DrawingContextSide,"#000000","left"); 
	}
  }
  
  for (i = 0; i < 1; i++)
  {
  	drawLine(width/2, 0, width/2, height, 1, DrawingContextFront,"#ff0000");
	drawLine(0, height/2, width, height/2, 1, DrawingContextFront,"#ff0000"); 
	drawText(10, 15, "Front", DrawingContextFront,"#ff0000","left");
	for (i = 0; i < NumberOfPoints; i++) 
	{  
		var x1 = PointCoordinatesArray.items[i][0] + width/2; 
		var y1 = height/2 - PointCoordinatesArray.items[i][1]; 
		if (i >= 1) 
		{ 
			var x2 = PointCoordinatesArray.items[i-1][0] + width/2; 
			var y2 = height/2 - PointCoordinatesArray.items[i-1][1]; 
			drawLine(x1, y1, x2, y2, 1, DrawingContextFront,"#000000"); 
		}
		drawText(x1+10, y1+10, (i+1), DrawingContextFront,"#000000","left"); 
	}
  }
  //drawCircle(width/2,200,200,0,360,1,DrawingContext,"#000000",false);
}

function CreateRotationObject() 
{
	for (i = 0; i < NumberOfRotationSegments; i++)
	{
		var s = Math.sin(2*Math.PI/NumberOfRotationSegments*i); 
		var c = Math.cos(2*Math.PI/NumberOfRotationSegments*i); 
		
		for (j = 0; j < TotalEnteredPoints; j++)
		{
			OriginPointCoords.items[i][j][0] = (PointCoordinatesArray.items[j][0] * c); 
			Points.items[i][j][0] = OriginPointCoords.items[i][j][0];		

			OriginPointCoords.items[i][j][1] = PointCoordinatesArray.items[j][1]; 
			Points.items[i][j][1] = OriginPointCoords.items[i][j][1]; 
									
			OriginPointCoords.items[i][j][2] = -(PointCoordinatesArray.items[j][0] * s);  
			Points.items[i][j][2] = OriginPointCoords.items[i][j][2]; 
		}			
	}
	// Rotation();
	// ApplyPerspectiveDistortionIfRequired(); 
	// Show3dObject();
	Build3PointsAreasFrom3DPoints();
	ShowAreaOf3DObject();
}

function Show3dObject()
{
	// Rotation();
	// Perspective = 1;
	// ApplyPerspectiveDistortionIfRequired();
	
	clearScreen(); 
	drawLine(width/2, 0, width/2, height,1,DrawingContext,"#aaaaaa"); 
	drawLine(0, height/2, width, height/2,1,DrawingContext,"#aaaaaa");
	drawText(10, 15, "Perspective", DrawingContext,"#000000","left");
	
	// var TempPointX = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	// var TempPointY = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	
	// for (i = 0; i < NumberOfRotationSegments; i++) 
	// {
		// for (j = 0; j < TotalEnteredPoints; j++)
		// {
			// TempPointX.items[i][j] = width/2-Points.items[i][j][0]; 
			// TempPointY.items[i][j] = height/2-Points.items[i][j][1];
			// if (j > 0) {drawLine(TempPointX.items[i][j-1], TempPointY.items[i][j-1], TempPointX.items[i][j], TempPointY.items[i][j], 1,DrawingContext,"#000000");}
			// if (i > 0) {drawLine(TempPointX.items[i][j], TempPointY.items[i][j], TempPointX.items[i-1][j], TempPointY.items[i-1][j], 1,DrawingContext,"#000000");}
		// }
	// }
	// for (j = 0; j < TotalEnteredPoints; j++)
	// {
		// drawLine(TempPointX.items[0][j], TempPointY.items[0][j], TempPointX.items[NumberOfRotationSegments-1][j], TempPointY.items[NumberOfRotationSegments-1][j], 1, DrawingContext,"#000000");	
	// }

	// Rotation();
	// Perspective = 0;
	// ApplyPerspectiveDistortionIfRequired();

	drawLine(width/2, 0, width/2, height,1,DrawingContextTop,"#aaaaaa"); 
	drawLine(0, height/2, width, height/2,1,DrawingContextTop,"#aaaaaa");
	drawText(10, 15, "Top", DrawingContextTop,"#000000","left");
	
	var TempPointX = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	var TempPointZ = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	
	for (i = 0; i < NumberOfRotationSegments; i++) 
	{
		for (j = 0; j < TotalEnteredPoints; j++)
		{
			TempPointX.items[i][j] = width/2-Points.items[i][j][0]; 
			TempPointZ.items[i][j] = height/2-Points.items[i][j][2];
			if (j > 0) {drawLine(TempPointX.items[i][j-1], TempPointZ.items[i][j-1], TempPointX.items[i][j], TempPointZ.items[i][j], 1,DrawingContextTop,"#000000");}
			if (i > 0) {drawLine(TempPointX.items[i][j], TempPointZ.items[i][j], TempPointX.items[i-1][j], TempPointZ.items[i-1][j], 1,DrawingContextTop,"#000000");}
		}
	}
	for (j = 0; j < TotalEnteredPoints; j++)
	{
		drawLine(TempPointX.items[0][j], TempPointZ.items[0][j], TempPointX.items[NumberOfRotationSegments-1][j], TempPointZ.items[NumberOfRotationSegments-1][j], 1, DrawingContextTop,"#000000");	
	}

	drawLine(width/2, 0, width/2, height,1,DrawingContextSide,"#aaaaaa"); 
	drawLine(0, height/2, width, height/2,1,DrawingContextSide,"#aaaaaa");
	drawText(10, 15, "Side", DrawingContextSide,"#000000","left");
	
	var TempPointY = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	var TempPointZ = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	
	for (i = 0; i < NumberOfRotationSegments; i++) 
	{
		for (j = 0; j < TotalEnteredPoints; j++)
		{
			TempPointZ.items[i][j] = width/2-Points.items[i][j][2]; 
			TempPointY.items[i][j] = height/2-Points.items[i][j][1];
			if (j > 0) {drawLine(TempPointZ.items[i][j-1], TempPointY.items[i][j-1], TempPointZ.items[i][j], TempPointY.items[i][j], 1,DrawingContextSide,"#000000");}
			if (i > 0) {drawLine(TempPointZ.items[i][j], TempPointY.items[i][j], TempPointZ.items[i-1][j], TempPointY.items[i-1][j], 1,DrawingContextSide,"#000000");}
		}
	}
	for (j = 0; j < TotalEnteredPoints; j++)
	{
		drawLine(TempPointZ.items[0][j], TempPointY.items[0][j], TempPointZ.items[NumberOfRotationSegments-1][j], TempPointY.items[NumberOfRotationSegments-1][j], 1, DrawingContextSide,"#000000");	
	}

	drawLine(width/2, 0, width/2, height,1,DrawingContextFront,"#aaaaaa"); 
	drawLine(0, height/2, width, height/2,1,DrawingContextFront,"#aaaaaa");
	drawText(10, 15, "Front", DrawingContextFront,"#000000","left");
	
	var TempPointX = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	var TempPointY = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	
	for (i = 0; i < NumberOfRotationSegments; i++) 
	{
		for (j = 0; j < TotalEnteredPoints; j++)
		{
			TempPointX.items[i][j] = width/2-Points.items[i][j][0]; 
			TempPointY.items[i][j] = height/2-Points.items[i][j][1];
			if (j > 0) {drawLine(TempPointX.items[i][j-1], TempPointY.items[i][j-1], TempPointX.items[i][j], TempPointY.items[i][j], 1,DrawingContextFront,"#000000");}
			if (i > 0) {drawLine(TempPointX.items[i][j], TempPointY.items[i][j], TempPointX.items[i-1][j], TempPointY.items[i-1][j], 1,DrawingContextFront,"#000000");}
		}
	}
	for (j = 0; j < TotalEnteredPoints; j++)
	{
		drawLine(TempPointX.items[0][j], TempPointY.items[0][j], TempPointX.items[NumberOfRotationSegments-1][j], TempPointY.items[NumberOfRotationSegments-1][j], 1, DrawingContextFront,"#000000");	
	}

	//BuildAreasFrom3DPoints(); 
	
	DrawingMethod = 1;
	// Rotation();
	// Perspective = 1;
	// ApplyPerspectiveDistortionIfRequired();

	Build3PointsAreasFrom3DPoints();
	ShowAreaOf3DObject();
}

function ApplyPerspectiveDistortionIfRequired() 
{
	var DistortionDistance = -1000; 
	for (i = 0; i < NumberOfRotationSegments; i++) 
	{
		for (j = 0; j < TotalEnteredPoints; j++) 
		{
			if (Perspective==1) 
			{ 
				// x' = x / ((z+d)+1) 
				Points.items[i][j][0] = Points.items[i][j][0] / ((Points.items[i][j][2]/DistortionDistance)+1); 
				// y' = y / ((z+d)+1)
				Points.items[i][j][1] = Points.items[i][j][1] / ((Points.items[i][j][2]/DistortionDistance)+1); 
			}
			else 
			{ 
				Points.items[i][j][0] = Points.items[i][j][0]; 
				Points.items[i][j][1] = Points.items[i][j][1];
			}
		}
	}
}

function ApplyPerspectiveDistortionForArea() 
{
	// var DistortionDistance = -1000; 
	CloneAreaValues(AreaOriginal, Area);
	for (i = 0; i < AreaIndex; i++) 
	{
		for (j = 0; j < 3; j++) 
		{
			Area.items[i][j][0] = Area.items[i][j][0] / ((Area.items[i][j][2]/DistortionDistance)+1); 
			Area.items[i][j][1] = Area.items[i][j][1] / ((Area.items[i][j][2]/DistortionDistance)+1); 
		}
	}
}

function Rotation() 
{ 
	var RadFromGrad = 2*Math.PI/360;
	for (i = 0; i < NumberOfRotationSegments; i++) 
	{ 
		for (j = 0; j < TotalEnteredPoints; j++) 
		{
			// Rotation around X
			var y_rot = OriginPointCoords.items[i][j][1] * Math.cos(RadFromGrad*AngleX) - OriginPointCoords.items[i][j][2] * Math.sin(RadFromGrad*AngleX);
			var z_rot = OriginPointCoords.items[i][j][1] * Math.sin(RadFromGrad*AngleX) + OriginPointCoords.items[i][j][2] * Math.cos(RadFromGrad*AngleX);
			Points.items[i][j][0] = OriginPointCoords.items[i][j][0];
			Points.items[i][j][1] = y_rot; 
			Points.items[i][j][2] = z_rot;
			
			// Rotation around Y
			var x_rot = Points.items[i][j][0] * Math.cos(RadFromGrad*AngleY) + Points.items[i][j][2] * Math.sin(RadFromGrad*AngleY); 
			var z_rot =-Points.items[i][j][0] * Math.sin(RadFromGrad*AngleY) + Points.items[i][j][2] * Math.cos(RadFromGrad*AngleY); 
			Points.items[i][j][0] = x_rot; 
			Points.items[i][j][2] = z_rot;
			
			// Rotation around Z
			var x_rot = Points.items[i][j][0] * Math.cos(RadFromGrad*AngleZ) - Points.items[i][j][1] * Math.sin(RadFromGrad*AngleZ); 
			var y_rot = Points.items[i][j][0] * Math.sin(RadFromGrad*AngleZ) + Points.items[i][j][1] * Math.cos(RadFromGrad*AngleZ); 
			Points.items[i][j][0] = x_rot; 
			Points.items[i][j][1] = y_rot;
			
		}
	}
}

function MoveAll()
{ 
	if (MoveLight.items[0] == true || MoveLight.items[1] == true || MoveLight.items[2] == true || MoveLight.items[3] == true || MoveLight.items[4] == true || MoveLight.items[5] == true || MoveLight.items[6] == true || MoveLight.items[7] == true || MoveLight.items[8] == true || MoveLight.items[9] == true) 
	{
		for (lamp = 0; lamp < 10; lamp++)
		{
			if (MoveLight.items[lamp] == true) 
			{
				LightSourceX.items[lamp] = LightSourceX.items[lamp] + MoveX;
				LightSourceY.items[lamp] = LightSourceY.items[lamp] + MoveY;
				LightSourceZ.items[lamp] = LightSourceZ.items[lamp] + MoveZ;
			}
		}
	}
	else
	{
		CloneAreaValues(AreaOriginal, Area);
		for (i = 0; i < AreaIndex; i++) 
		{ 
		  if (SelectedArea[i] == true)
		  {
			for (j = 0; j < 3; j++) 
			{
				Area.items[i][j][0] = Area.items[i][j][0] + MoveX;
				Area.items[i][j][1] = Area.items[i][j][1] + MoveY;
				Area.items[i][j][2] = Area.items[i][j][2] + MoveZ;
			}
		  }
		}
		CloneAreaValues(Area, AreaOriginal);
	}
	MoveX = 0; MoveY = 0; MoveZ = 0;
}

function RotateAll() 
{ 
	var RadFromGrad = 2*Math.PI/360;
	var AreaRotate = new Array3D(maxarea, 4, 3);
	CloneAreaValues(AreaOriginal, AreaRotate);
	for (i = 0; i < AreaIndex; i++) 
	{ 
      if (SelectedArea[i] == true)
	  {
		for (j = 0; j < 3; j++) 
		{
			// Rotation around X
			var y_rot = AreaOriginal.items[i][j][1] * Math.cos(RadFromGrad*AngleX) - AreaOriginal.items[i][j][2] * Math.sin(RadFromGrad*AngleX);
			var z_rot = AreaOriginal.items[i][j][1] * Math.sin(RadFromGrad*AngleX) + AreaOriginal.items[i][j][2] * Math.cos(RadFromGrad*AngleX);
			AreaRotate.items[i][j][0] = AreaOriginal.items[i][j][0];
			AreaRotate.items[i][j][1] = y_rot; 
			AreaRotate.items[i][j][2] = z_rot;
			
			// Rotation around Y
			var x_rot = AreaRotate.items[i][j][0] * Math.cos(RadFromGrad*AngleY) + AreaRotate.items[i][j][2] * Math.sin(RadFromGrad*AngleY); 
			var z_rot =-AreaRotate.items[i][j][0] * Math.sin(RadFromGrad*AngleY) + AreaRotate.items[i][j][2] * Math.cos(RadFromGrad*AngleY); 
			AreaRotate.items[i][j][0] = x_rot; 
			AreaRotate.items[i][j][2] = z_rot;
			
			// Rotation around Z
			var x_rot = AreaRotate.items[i][j][0] * Math.cos(RadFromGrad*AngleZ) - AreaRotate.items[i][j][1] * Math.sin(RadFromGrad*AngleZ); 
			var y_rot = AreaRotate.items[i][j][0] * Math.sin(RadFromGrad*AngleZ) + AreaRotate.items[i][j][1] * Math.cos(RadFromGrad*AngleZ); 
			AreaRotate.items[i][j][0] = x_rot; 
			AreaRotate.items[i][j][1] = y_rot;
		}
	  }
	}
	CloneAreaValues(AreaRotate, AreaOriginal);
	CloneAreaValues(AreaOriginal, Area);
	AngleX = 0; AngleY = 0; AngleZ = 0; 
}

function CalcOrderOfAreasAlongZAxis()
{
	AreaZValues = new Array1D(AreaIndex); 
	AreaOrderIndex = new Array1D(AreaIndex);
	for (i = 0; i < AreaIndex; i++) 
	{
		//AreaZValues.items[i] = AverageAreaCornerZValues(i); 
		AreaZValues.items[i] = Average3PointsAreaCornerZValues(i);
		AreaOrderIndex.items[i] = i; 
	}
	AreaOrderIndex.items.sort(function(a, b){return AreaZValues.items[b]-AreaZValues.items[a]});
}

function AverageAreaCornerZValues(CheckAreaIndex)
{
	var CornerA = Area.items[CheckAreaIndex][0][2];
	var CornerB = Area.items[CheckAreaIndex][1][2]; 
	var CornerC = Area.items[CheckAreaIndex][2][2]; 
	var CornerD = Area.items[CheckAreaIndex][3][2]; 
	var AverageArea = (CornerA + CornerB + CornerC + CornerD)/4;
	return AverageArea; 
}

function Average3PointsAreaCornerZValues(CheckAreaIndex)
{
	var CornerA = Area.items[CheckAreaIndex][0][2];
	var CornerB = Area.items[CheckAreaIndex][1][2]; 
	var CornerC = Area.items[CheckAreaIndex][2][2]; 
	var AverageArea = (CornerA + CornerB + CornerC)/3;
	return AverageArea; 
}

function BuildAreasFrom3DPoints()
{
	AreaIndex = 0;
	for (i = 0; i < NumberOfRotationSegments-1; i++)
	{
		for (j = 0; j < TotalEnteredPoints-1; j++) 
		{
			for (k = 0; k < 3; k++) 
			{
				Area.items[AreaIndex][0][k] = Points.items[i][j][k]; 
				Area.items[AreaIndex][1][k] = Points.items[i][j+1][k]; 
				Area.items[AreaIndex][2][k] = Points.items[i+1][j+1][k]; 
				Area.items[AreaIndex][3][k] = Points.items[i+1][j][k]; 
			}
			AreaIndex = AreaIndex + 1;
		}
	}
	
	for (j = 0; j < TotalEnteredPoints-1; j++)
	{
		for (k = 0; k < 3; k++)
		{
			Area.items[AreaIndex][0][k] = Points.items[NumberOfRotationSegments-1][j][k]; 
			Area.items[AreaIndex][1][k] = Points.items[NumberOfRotationSegments-1][j+1][k]; 
			Area.items[AreaIndex][2][k] = Points.items[0][j+1][k]; 
			Area.items[AreaIndex][3][k] = Points.items[0][j][k];						
		}
		AreaIndex = AreaIndex + 1;
	}
}

function Build3PointsAreasFrom3DPoints()
{
	// AreaIndex = 0;
	for (i = 0; i < NumberOfRotationSegments-1; i++)
	{
		for (j = 0; j < TotalEnteredPoints-1; j++) 
		{
			for (k = 0; k < 3; k++) 
			{
				Area.items[AreaIndex][0][k] = Points.items[i][j][k]; 
				Area.items[AreaIndex][1][k] = Points.items[i+1][j][k]; 
				Area.items[AreaIndex][2][k] = Points.items[i][j+1][k]; 
			}
			AreaBelongsToObject[AreaIndex] = NumberOfCompleteObjects; 
			SelectedArea[AreaIndex] = true;
			SetupAreaConstants(AreaIndex);
			AreaIndex = AreaIndex + 1;
			for (k = 0; k < 3; k++) 
			{
				Area.items[AreaIndex][0][k] = Points.items[i][j+1][k]; 
				Area.items[AreaIndex][1][k] = Points.items[i+1][j][k]; 
				Area.items[AreaIndex][2][k] = Points.items[i+1][j+1][k]; 
			}
			AreaBelongsToObject[AreaIndex] = NumberOfCompleteObjects;
			SelectedArea[AreaIndex] = true;
			SetupAreaConstants(AreaIndex);
			AreaIndex = AreaIndex + 1;
		}
	}
	
	for (j = 0; j < TotalEnteredPoints-1; j++)
	{
		for (k = 0; k < 3; k++)
		{
			Area.items[AreaIndex][0][k] = Points.items[NumberOfRotationSegments-1][j][k]; 
			Area.items[AreaIndex][1][k] = Points.items[0][j][k]; 
			Area.items[AreaIndex][2][k] = Points.items[NumberOfRotationSegments-1][j+1][k]; 
		}
		AreaBelongsToObject[AreaIndex] = NumberOfCompleteObjects;
		SelectedArea[AreaIndex] = true;
		SetupAreaConstants(AreaIndex);
		AreaIndex = AreaIndex + 1;
		for (k = 0; k < 3; k++)
		{
			Area.items[AreaIndex][0][k] = Points.items[NumberOfRotationSegments-1][j+1][k]; 
			Area.items[AreaIndex][1][k] = Points.items[0][j][k]; 
			Area.items[AreaIndex][2][k] = Points.items[0][j+1][k]; 
		}
		AreaBelongsToObject[AreaIndex] = NumberOfCompleteObjects;
		SelectedArea[AreaIndex] = true;
		SetupAreaConstants(AreaIndex);
		AreaIndex = AreaIndex + 1;
	}
	CloneAreaValues(Area, AreaOriginal);
	CalcSizeOfObject();
}

function CloneAreaValues(From, To)
{
	for (i = 0; i < AreaIndex; i++) 
	{ 
		for (j = 0; j < 3; j++) 
		{
			for (k = 0; k < 3; k++)
			{
				To.items[i][j][k] = From.items[i][j][k];
			}
		}
	}
}

function CloneAreaValuesOfSpecificArea(From, To)
{
	for (j = 0; j < 3; j++) 
	{
		for (k = 0; k < 3; k++)
		{
			Area.items[To][j][k] = Area.items[From][j][k];
		}
	}
}

function ShowAreaOf3DObject()
{	
	CalcSizeOfObject();
	// CloneAreaValues(AreaOriginal, Area);
	clearScreen();
	
	// Perspective window
	drawLine(width/2, 0, width/2, height, 1, DrawingContext,"#aaaaaa");
	drawLine(0, height/2, width, height/2, 1, DrawingContext,"#aaaaaa"); 
	drawText(10, 15, "Perspective", DrawingContext,"#000000","left"); 
	ApplyPerspectiveDistortionForArea();
	CalcOrderOfAreasAlongZAxis();  
	for (i = 0; i < AreaIndex; i++)
	{
		var NewIndexAccordingToZValue = AreaOrderIndex.items[i];  
		var ColorAccordingToDepthLevel = 1/AreaIndex*i;
		// console.log(AreaIndex);
		// console.log(AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectBlue);
		// console.log(NewIndexAccordingToZValue);
		// console.log("rgb("+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectRed)+", "+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectGreen)+", "+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectBlue)+")");
		DrawingContext.fillStyle = "rgb("+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectRed*255)+", "+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectGreen*255)+", "+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectBlue*255)+")";   
		// if (DrawingMethod == 2) DrawingContext.fillStyle = "#ffffff"; 
		// DrawingContext.strokeStyle = "#000000";
		DrawingContext.beginPath();
		for (j = 0; j < 3; j++)
		{
			var CornerXCoord = width/2- Area.items[NewIndexAccordingToZValue][j][0]; 
			var CornerYCoord = height/2- Area.items[NewIndexAccordingToZValue][j][1];
			if (j == 0) 
			{
				DrawingContext.moveTo(CornerXCoord, CornerYCoord);
			}
			else
			{
				DrawingContext.lineTo(CornerXCoord, CornerYCoord);
			}
		}
		DrawingContext.closePath(); 
		if (DrawingMethod != 3) DrawingContext.fill(); 
		if (AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectRed>0.7 && AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectGreen>0.7 && AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectBlue>0.7) DrawingContext.stroke();
		// if (DrawingMethod == 0 || DrawingMethod == 2 || DrawingMethod == 3) DrawingContext.stroke(); 
	}
	
	// Top window
	drawLine(width/2, 0, width/2, height, 1, DrawingContextTop,"#aaaaaa");
	drawLine(0, height/2, width, height/2, 1, DrawingContextTop,"#aaaaaa"); 
	drawText(10, 15, "Top", DrawingContextTop,"#000000","left");
	for (i = 0; i < AreaIndex; i++)
	{
		DrawingContextTop.strokeStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
		DrawingContextTop.beginPath();
		for (j = 0; j < 3; j++)
		{
			var CornerXCoord = width/2- AreaOriginal.items[i][j][0]; 
			var CornerZCoord = height/2- AreaOriginal.items[i][j][2];
			if (j == 0) 
			{
				DrawingContextTop.moveTo(CornerXCoord, CornerZCoord);
			}
			else
			{
				DrawingContextTop.lineTo(CornerXCoord, CornerZCoord);
			}
		}
		DrawingContextTop.closePath(); 
		DrawingContextTop.stroke(); 
	}
	for (lamp = 0; lamp < 10; lamp++)
	{
		drawCircle(width/2- LightSourceX.items[lamp],height/2-LightSourceZ.items[lamp],10,0,360,1,DrawingContextTop,"rgb("+ColorOfLightSource.items[lamp].Red*255+", "+ColorOfLightSource.items[lamp].Green*255+", "+ColorOfLightSource.items[lamp].Blue*255+")",true); 
		drawCircle(width/2- LightSourceX.items[lamp],height/2-LightSourceZ.items[lamp],10,0,360,1,DrawingContextTop,"rgb(0,0,0)",false); 
		drawText(width/2- LightSourceX.items[lamp],5+height/2-LightSourceZ.items[lamp],lamp,DrawingContextTop,"#000000","center"); 
	}
	
	// Side window
	drawLine(width/2, 0, width/2, height, 1, DrawingContextSide,"#aaaaaa");
	drawLine(0, height/2, width, height/2, 1, DrawingContextSide,"#aaaaaa"); 
	drawText(10, 15, "Side", DrawingContextSide,"#000000","left");
	for (i = 0; i < AreaIndex; i++)
	{
		DrawingContextSide.strokeStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
		DrawingContextSide.beginPath();
		for (j = 0; j < 3; j++)
		{
			var CornerZCoord = width/2- AreaOriginal.items[i][j][2]; 
			var CornerYCoord = height/2- AreaOriginal.items[i][j][1];
			if (j == 0) 
			{
				DrawingContextSide.moveTo(CornerZCoord, CornerYCoord);
			}
			else
			{
				DrawingContextSide.lineTo(CornerZCoord, CornerYCoord);
			}
		}
		DrawingContextSide.closePath(); 
		DrawingContextSide.stroke(); 
	}
	for (lamp = 0; lamp < 10; lamp++)
	{
		drawCircle(width/2- LightSourceZ.items[lamp],height/2-LightSourceY.items[lamp],10,0,360,1,DrawingContextSide,"rgb("+ColorOfLightSource.items[lamp].Red*255+", "+ColorOfLightSource.items[lamp].Green*255+", "+ColorOfLightSource.items[lamp].Blue*255+")",true); 
		drawCircle(width/2- LightSourceZ.items[lamp],height/2-LightSourceY.items[lamp],10,0,360,1,DrawingContextSide,"rgb(0,0,0)",false); 
		drawText(width/2- LightSourceZ.items[lamp],5+height/2-LightSourceY.items[lamp],lamp,DrawingContextSide,"#000000","center"); 
	}	
	
	// Front window
	drawLine(width/2, 0, width/2, height, 1, DrawingContextFront,"#aaaaaa");
	drawLine(0, height/2, width, height/2, 1, DrawingContextFront,"#aaaaaa"); 
	drawText(10, 15, "Front", DrawingContextFront,"#000000","left");	
	for (i = 0; i < AreaIndex; i++)
	{
		DrawingContextFront.strokeStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
		DrawingContextFront.beginPath();
		for (j = 0; j < 3; j++)
		{
			var CornerXCoord = width/2- AreaOriginal.items[i][j][0]; 
			var CornerYCoord = height/2- AreaOriginal.items[i][j][1];
			if (j == 0) 
			{
				DrawingContextFront.moveTo(CornerXCoord, CornerYCoord);
			}
			else
			{
				DrawingContextFront.lineTo(CornerXCoord, CornerYCoord);
			}
		}
		DrawingContextFront.closePath(); 
		DrawingContextFront.stroke(); 
	}
	for (lamp = 0; lamp < 10; lamp++)
	{
		drawCircle(width/2- LightSourceX.items[lamp],height/2-LightSourceY.items[lamp],10,0,360,1,DrawingContextFront,"rgb("+ColorOfLightSource.items[lamp].Red*255+", "+ColorOfLightSource.items[lamp].Green*255+", "+ColorOfLightSource.items[lamp].Blue*255+")",true); 
		drawCircle(width/2- LightSourceX.items[lamp],height/2-LightSourceY.items[lamp],10,0,360,1,DrawingContextFront,"rgb(0,0,0)",false); 
		drawText(width/2- LightSourceX.items[lamp],5+height/2-LightSourceY.items[lamp],lamp,DrawingContextFront,"#000000","center"); 
	}

	
	// "All objects" little window
	for (i = 0; i < AreaIndex; i++)
	{
		var NewIndexAccordingToZValue = AreaOrderIndex.items[i];  
		var ColorAccordingToDepthLevel = 1/AreaIndex*i;
		DrawingContextObjectAll.fillStyle = "rgb("+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectRed*255)+", "+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectGreen*255)+", "+(ColorAccordingToDepthLevel*AreaConstants.items[NewIndexAccordingToZValue].ColorOfObjectBlue*255)+")";   
		DrawingContextObjectAll.beginPath();
		for (j = 0; j < 3; j++)
		{
			var CornerXCoord = CanvasObjectAll.width/2- Area.items[NewIndexAccordingToZValue][j][0]/5; 
			var CornerYCoord = CanvasObjectAll.height/2- Area.items[NewIndexAccordingToZValue][j][1]/3;
			if (j == 0) 
			{
				DrawingContextObjectAll.moveTo(CornerXCoord, CornerYCoord);
			}
			else
			{
				DrawingContextObjectAll.lineTo(CornerXCoord, CornerYCoord);
			}
		}
		DrawingContextObjectAll.closePath(); 
		DrawingContextObjectAll.fill(); 
	}
	
	// Objects little windows
	for (i = 0; i < AreaIndex; i++)
	{
		switch (AreaBelongsToObject[i])
		{
			case 0:
				DrawingContextObject0.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject0.strokeStyle = "#aaaaaa";
				DrawingContextObject0.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject0.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject0.width/2.5;
					CornerYCoord = CanvasObject0.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject0.height/1.5;
					if (j == 0) 
					{
						DrawingContextObject0.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject0.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject0.closePath(); 
				DrawingContextObject0.fill(); 
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) DrawingContextObject0.stroke();
				break;

			case 1:
				DrawingContextObject1.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject1.strokeStyle = "#aaaaaa";
				DrawingContextObject1.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject1.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject1.width/2.5;
					CornerYCoord = CanvasObject1.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject1.height/1.5;
					if (j == 0) 
					{
						DrawingContextObject1.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject1.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject1.closePath(); 
				DrawingContextObject1.fill(); 	
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) DrawingContextObject1.stroke();				
				break;

			case 2:
				DrawingContextObject2.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject2.strokeStyle = "#aaaaaa";
				DrawingContextObject2.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject2.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject2.width/2.5;
					CornerYCoord = CanvasObject2.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject2.height/1.5;					
					if (j == 0) 
					{
						DrawingContextObject2.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject2.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject2.closePath(); 
				DrawingContextObject2.fill(); 
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) DrawingContextObject2.stroke();
				break;

			case 3:
				DrawingContextObject3.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject3.strokeStyle = "#aaaaaa";
				DrawingContextObject3.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject3.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject3.width/2.5;
					CornerYCoord = CanvasObject3.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject3.height/1.5;					
					if (j == 0) 
					{
						DrawingContextObject3.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject3.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject3.closePath(); 
				DrawingContextObject3.fill(); 
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) DrawingContextObject3.stroke();
				break;
				
			case 4:
				DrawingContextObject4.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject4.strokeStyle = "#aaaaaa";
				DrawingContextObject4.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject4.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject4.width/2.5;
					CornerYCoord = CanvasObject4.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject4.height/1.5;					
					if (j == 0) 
					{
						DrawingContextObject4.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject4.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject4.closePath(); 
				DrawingContextObject4.fill(); 
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) DrawingContextObject4.stroke();
				break;
				
			case 5:
				DrawingContextObject5.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject5.strokeStyle = "#aaaaaa";
				DrawingContextObject5.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject5.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject5.width/2.5;
					CornerYCoord = CanvasObject5.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject5.height/1.5;					
					if (j == 0) 
					{
						DrawingContextObject5.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject5.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject5.closePath(); 
				DrawingContextObject5.fill(); 
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) DrawingContextObject5.stroke();
				break;
								
			case 6:
				DrawingContextObject6.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject6.strokeStyle = "#aaaaaa";
				DrawingContextObject6.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject6.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject6.width/2.5;
					CornerYCoord = CanvasObject6.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject6.height/1.5;					
					if (j == 0) 
					{
						DrawingContextObject6.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject6.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject6.closePath(); 
				DrawingContextObject6.fill(); 
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) DrawingContextObject6.stroke();
				break;
				
			case 7:
				DrawingContextObject7.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject7.strokeStyle = "#aaaaaa";
				DrawingContextObject7.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject7.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject7.width/2.5;
					CornerYCoord = CanvasObject7.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject7.height/1.5;					
					if (j == 0) 
					{
						DrawingContextObject7.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject7.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject7.closePath(); 
				DrawingContextObject7.fill(); 
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) rawingContextObject7.stroke();
				break;

			case 8:
				DrawingContextObject8.fillStyle = "rgb("+AreaConstants.items[i].ColorOfObjectRed*255+", "+AreaConstants.items[i].ColorOfObjectGreen*255+", "+AreaConstants.items[i].ColorOfObjectBlue*255+")";   
				DrawingContextObject8.strokeStyle = "#aaaaaa";
				DrawingContextObject8.beginPath();
				for (j = 0; j < 3; j++)
				{
					CornerXCoord = CanvasObject8.width/2- (AreaOriginal.items[i][j][0] - (AreaConstants.items[i].XDimensionMax + AreaConstants.items[i].XDimensionMin)/2)/(AreaConstants.items[i].XDimensionMax - AreaConstants.items[i].XDimensionMin)*CanvasObject8.width/2.5;
					CornerYCoord = CanvasObject8.height/2-(AreaOriginal.items[i][j][1] - (AreaConstants.items[i].YDimensionMax + AreaConstants.items[i].YDimensionMin)/2)/(AreaConstants.items[i].YDimensionMax - AreaConstants.items[i].YDimensionMin)*CanvasObject8.height/1.5;					
					if (j == 0) 
					{
						DrawingContextObject8.moveTo(CornerXCoord, CornerYCoord);
					}
					else
					{
						DrawingContextObject8.lineTo(CornerXCoord, CornerYCoord);
					}
				}
				DrawingContextObject8.closePath(); 
				DrawingContextObject8.fill(); 
				if (AreaConstants.items[i].ColorOfObjectRed>0.7 && AreaConstants.items[i].ColorOfObjectGreen>0.7 && AreaConstants.items[i].ColorOfObjectBlue>0.7) DrawingContextObject8.stroke();
				break;
		}
	}
}

function AngleBetweenVectors(V1x,V1y,V1z,V2x,V2y,V2z) 
{
	var ScalarProduct = V1x*V2x + V1y*V2y + V1z*V2z; 
	var LengthV1 = Math.sqrt(V1x*V1x+V1y*V1y+V1z*V1z); 
	var LengthV2 = Math.sqrt(V2x*V2x+V2y*V2y+V2z*V2z);
	var fraction = ScalarProduct / (LengthV1 * LengthV2);
	return Math.acos(fraction);
}

function LengthOfVector(PointX, PointY, PointZ)
{
	return Math.sqrt(PointX*PointX+PointY*PointY+PointZ*PointZ);
}

function SaveAsImage()
{
    var link = document.getElementById('link');
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    var today_ISO = today.toISOString();
    today_ISO = today_ISO.replace(":", "-");
    today_ISO = today_ISO.replace(".","-");
    link.setAttribute('download', 'RayTracing'+today_ISO+'.png');
    if (!Image2K) 
		link.setAttribute('href', Canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
	else
		link.setAttribute('href', Canvas2K.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
}
		
function SaveObject()
{
	if ('localStorage' in window && window['localStorage'] !== null) 
	{
	  try {
		localStorage.setItem("PointCoordinatesArray", JSON.stringify(PointCoordinatesArray));
		localStorage.setItem("NumberOfRotationSegments", JSON.stringify(NumberOfRotationSegments));
		localStorage.setItem("TotalEnteredPoints", JSON.stringify(TotalEnteredPoints));
		localStorage.setItem("AngleX", JSON.stringify(AngleX));
		localStorage.setItem("AngleY", JSON.stringify(AngleY));
		localStorage.setItem("AngleZ", JSON.stringify(AngleZ));
		localStorage.setItem("Perspective", JSON.stringify(Perspective));
		document.title = "3D-Object saved";
	  }
	  catch(err) {alert("Sorry, saving was not possible.");}
	}
	else {alert("Sorry, your browser is too old to save data");}
}

function SaveAreaObject()
{
	if ('localStorage' in window && window['localStorage'] !== null) 
	{
		localStorage.setItem("AreaOriginal", JSON.stringify(AreaOriginal));
		localStorage.setItem("AreaConstants", JSON.stringify(AreaConstants));
		localStorage.setItem("AreaIndex", JSON.stringify(AreaIndex));
		localStorage.setItem("AreaBelongsToObject", JSON.stringify(AreaBelongsToObject));
		localStorage.setItem("NumberOfCompleteObjects", JSON.stringify(NumberOfCompleteObjects));
		localStorage.setItem("AngleX", JSON.stringify(AngleX));
		localStorage.setItem("AngleY", JSON.stringify(AngleY));
		localStorage.setItem("AngleZ", JSON.stringify(AngleZ));
		localStorage.setItem("Perspective", JSON.stringify(Perspective));
		localStorage.setItem("LightSourceX", JSON.stringify(LightSourceX));
		localStorage.setItem("LightSourceY", JSON.stringify(LightSourceY));
		localStorage.setItem("LightSourceZ", JSON.stringify(LightSourceZ));
		localStorage.setItem("ColorOfLightSource", JSON.stringify(ColorOfLightSource));
		document.title = "3D-Object saved";
	}
	else {alert("Sorry, your browser is too old to save data");}
}

function LoadObject()
{
	if ('localStorage' in window && window['localStorage'] !== null) 
	{
		PointCoordinatesArray = JSON.parse(localStorage.getItem("PointCoordinatesArray"));
		NumberOfRotationSegments = JSON.parse(localStorage.getItem("NumberOfRotationSegments"));
		TotalEnteredPoints = JSON.parse(localStorage.getItem("TotalEnteredPoints"));
		AreaBelongsToObject = JSON.parse(localStorage.getItem("AreaBelongsToObject"));
		NumberOfCompleteObjects = JSON.parse(localStorage.getItem("NumberOfCompleteObjects"));
		AngleX = JSON.parse(localStorage.getItem("AngleX"));
		NumberOfRotationsX = AngleX/increment;
		AngleY = JSON.parse(localStorage.getItem("AngleY"));
		NumberOfRotationsY = AngleY/increment;
		AngleZ = JSON.parse(localStorage.getItem("AngleZ"));
		NumberOfRotationsZ = AngleZ/increment;
		Perspective = JSON.parse(localStorage.getItem("Perspective"));
		clearScreen();		
		CreateRotationObject();
		window.removeEventListener('mousemove',mousemoveevent); 
		window.removeEventListener('mousedown',mousedownevent); 		
		document.title = "3D-Object loaded"; 
	}
	else {alert("Sorry, your browser is too old to save data");}
}

function LoadAreaObject()
{
	if ('localStorage' in window && window['localStorage'] !== null) 
	{
		AreaOriginal = JSON.parse(localStorage.getItem("AreaOriginal"));
		CloneAreaValues(AreaOriginal, Area);
		AreaConstants = JSON.parse(localStorage.getItem("AreaConstants"));
		AreaIndex = JSON.parse(localStorage.getItem("AreaIndex"));
		NumberOfCompleteObjects = JSON.parse(localStorage.getItem("NumberOfCompleteObjects"));
		AreaBelongsToObject = JSON.parse(localStorage.getItem("AreaBelongsToObject")); 
		AngleX = JSON.parse(localStorage.getItem("AngleX"));
		NumberOfRotationsX = AngleX/increment;
		AngleY = JSON.parse(localStorage.getItem("AngleY"));
		NumberOfRotationsY = AngleY/increment;
		AngleZ = JSON.parse(localStorage.getItem("AngleZ"));
		NumberOfRotationsZ = AngleZ/increment;
		Perspective = JSON.parse(localStorage.getItem("Perspective"));
		LightSourceX = JSON.parse(localStorage.getItem("LightSourceX")); if (LightSourceX == null) {LightSourceX = 0;}
		LightSourceY = JSON.parse(localStorage.getItem("LightSourceY")); if (LightSourceY == null) {LightSourceY = 0;}
		LightSourceZ = JSON.parse(localStorage.getItem("LightSourceZ")); if (LightSourceZ == null) {LightSourceZ = 0;}
		ColorOfLightSource = JSON.parse(localStorage.getItem("ColorOfLightSource")); if (ColorOfLightSource == null) {ColorOfLightSource = {Red:1, Green:1, Blue:0,};}
		clearScreen();
		ShowAreaOf3DObject();
		alert(NumberOfCompleteObjects+" objects loaded");
		window.removeEventListener('mousemove',mousemoveevent); 
		window.removeEventListener('mousedown',mousedownevent); 		
		KeyPressed = 1; 		
		document.title = "3D-Object loaded"; 
	}
	else {alert("Sorry, your browser is too old to save data");}
}

function CreateCube()
{
	if (NumberOfCompleteObjects<MaxNbOfCompleteObjects) 
	{
		CloneAreaValues(AreaOriginal, Area); 
		NumberOfPoints=0; 
		KeyPressed=0; 
		UnSelectAll(); 
		NumberOfRotationSegments = 4;
		TotalEnteredPoints = 4;
		
		PointCoordinatesArray.items[0][0] = 0;
		PointCoordinatesArray.items[0][1] = -height*0.2; 
		
		PointCoordinatesArray.items[1][0] = -width*0.2;
		PointCoordinatesArray.items[1][1] = -height*0.2;

		PointCoordinatesArray.items[2][0] = -width*0.2;
		PointCoordinatesArray.items[2][1] = height*0.2;    

		PointCoordinatesArray.items[3][0] = 0;
		PointCoordinatesArray.items[3][1] = height*0.2;    

		clearScreen();		
		CreateRotationObject();
		window.removeEventListener('mousemove',mousemoveevent); 
		window.removeEventListener('mousedown',mousedownevent); 	
		KeyPressed = 1;	
		NumberOfCompleteObjects++; 
	} 
	else 
	{
		alert('Number of total objects reached');
	}
}

function CreateSphere()
{
	if (NumberOfCompleteObjects<MaxNbOfCompleteObjects) 
	{
		CloneAreaValues(AreaOriginal, Area); 
		NumberOfPoints=0; 
		KeyPressed=0; 
		UnSelectAll(); 
		var NbrOfSegments = 50;
		for (SegmentNo = 0; SegmentNo < NbrOfSegments; SegmentNo++)
		{
			PointCoordinatesArray.items[SegmentNo][0] = Math.sin((SegmentNo * (180/NbrOfSegments))/360*2*Math.PI)*150; 
			PointCoordinatesArray.items[SegmentNo][1] = Math.cos((SegmentNo * (180/NbrOfSegments))/360*2*Math.PI)*150;
		}

		NumberOfRotationSegments = NbrOfSegments;
		TotalEnteredPoints = NbrOfSegments;
		
		clearScreen();		
		CreateRotationObject();
		window.removeEventListener('mousemove',mousemoveevent); 
		window.removeEventListener('mousedown',mousedownevent); 		
		KeyPressed = 1;
		NumberOfCompleteObjects++; 
	} 
	else 
	{
		alert('Number of total objects reached');
	}
}

function CreateWaves()
{
	if (NumberOfCompleteObjects<MaxNbOfCompleteObjects) 
	{
		CloneAreaValues(AreaOriginal, Area); 
		NumberOfPoints=0; 
		KeyPressed=0; 
		UnSelectAll(); 
		var NbrOfWaves = 5;
		var NbrOfSegments = 30;
		var counter=0;
		for (SegmentNo = 0; SegmentNo < 2*Math.PI*NbrOfWaves; SegmentNo = SegmentNo + 2*Math.PI*NbrOfWaves/NbrOfSegments)
		{
			PointCoordinatesArray.items[counter][0] = width/(2*Math.PI*NbrOfWaves)*SegmentNo; 
			PointCoordinatesArray.items[counter][1] = Math.sin(SegmentNo)*Math.exp(-SegmentNo/10)*height/5;
			counter++;
		}

		NumberOfRotationSegments = NbrOfSegments;
		TotalEnteredPoints = NbrOfSegments;
		
		clearScreen();	
		CreateRotationObject();
		window.removeEventListener('mousemove',mousemoveevent); 
		window.removeEventListener('mousedown',mousedownevent); 		
		KeyPressed = 1;
		NumberOfCompleteObjects++; 
	} 
	else 
	{
		alert('Number of total objects reached');
	}
}

function PrepareCanvas()
{
	Canvas2K.width = rect2K.width; 
	Canvas2K.height = rect2K.height; 
	Canvas2K.left = rect2K.left;
	Canvas2K.top = rect2K.top;
	DrawingContext2K = Canvas2K.getContext("2d"); 
	DrawingContext2K.scale(1, 1); 
	Canvas2K.style.zIndex = -100000;
	Canvas2K.hidden = true;

	Canvas.width = rect.width; 
	Canvas.height = rect.height; 
	Canvas.left = rect.left;
	Canvas.top = rect.top;
	DrawingContext = Canvas.getContext("2d"); 
	DrawingContext.scale(1, 1); 
	
	CanvasTop.width = rect.width; 
	CanvasTop.height = rect.height; 
	CanvasTop.left = rectTop.left;
	CanvasTop.top = rectTop.top;
	DrawingContextTop = CanvasTop.getContext("2d"); 
	DrawingContextTop.scale(1, 1);
	
	CanvasSide.width = rect.width; 
	CanvasSide.height = rect.height; 
	CanvasSide.left = rectSide.left;
	CanvasSide.top = rectSide.top;
	DrawingContextSide = CanvasSide.getContext("2d"); 
	DrawingContextSide.scale(1, 1);
	
	CanvasFront.width = rect.width; 
	CanvasFront.height = rect.height; 
	CanvasFront.left = rectFront.left;
	CanvasFront.top = rectFront.top;
	DrawingContextFront = CanvasFront.getContext("2d"); 
	DrawingContextFront.scale(1, 1);

	CanvasObjectAll.width = rectObjectAll.width; 
	CanvasObjectAll.height = CanvasObjectAll.height; 
	CanvasObjectAll.left = CanvasObjectAll.left;
	CanvasObjectAll.top = CanvasObjectAll.top;
	DrawingContextObjectAll = CanvasObjectAll.getContext("2d"); 
	DrawingContextObjectAll.scale(1, 1); 
	
	CanvasObject0.width = rectObject0.width; 
	CanvasObject0.height = CanvasObject0.height; 
	CanvasObject0.left = CanvasObject0.left;
	CanvasObject0.top = CanvasObject0.top;
	DrawingContextObject0 = CanvasObject0.getContext("2d"); 
	DrawingContextObject0.scale(1, 1); 	

	CanvasObject1.width = rectObject1.width; 
	CanvasObject1.height = CanvasObject1.height; 
	CanvasObject1.left = CanvasObject1.left;
	CanvasObject1.top = CanvasObject1.top;
	DrawingContextObject1 = CanvasObject1.getContext("2d"); 
	DrawingContextObject1.scale(1, 1); 

	CanvasObject2.width = rectObject2.width; 
	CanvasObject2.height = CanvasObject2.height; 
	CanvasObject2.left = CanvasObject2.left;
	CanvasObject2.top = CanvasObject2.top;
	DrawingContextObject2 = CanvasObject2.getContext("2d"); 
	DrawingContextObject2.scale(1, 1); 

	CanvasObject3.width = rectObject3.width; 
	CanvasObject3.height = CanvasObject3.height; 
	CanvasObject3.left = CanvasObject3.left;
	CanvasObject3.top = CanvasObject3.top;
	DrawingContextObject3 = CanvasObject3.getContext("2d"); 
	DrawingContextObject3.scale(1, 1); 

	CanvasObject4.width = rectObject4.width; 
	CanvasObject4.height = CanvasObject4.height; 
	CanvasObject4.left = CanvasObject4.left;
	CanvasObject4.top = CanvasObject4.top;
	DrawingContextObject4 = CanvasObject4.getContext("2d"); 
	DrawingContextObject4.scale(1, 1); 	
	
	CanvasObject5.width = rectObject5.width; 
	CanvasObject5.height = CanvasObject5.height; 
	CanvasObject5.left = CanvasObject5.left;
	CanvasObject5.top = CanvasObject5.top;
	DrawingContextObject5 = CanvasObject5.getContext("2d"); 
	DrawingContextObject5.scale(1, 1); 

	CanvasObject6.width = rectObject6.width; 
	CanvasObject6.height = CanvasObject6.height; 
	CanvasObject6.left = CanvasObject6.left;
	CanvasObject6.top = CanvasObject6.top;
	DrawingContextObject6 = CanvasObject6.getContext("2d"); 
	DrawingContextObject6.scale(1, 1); 

	CanvasObject7.width = rectObject7.width; 
	CanvasObject7.height = CanvasObject7.height; 
	CanvasObject7.left = CanvasObject7.left;
	CanvasObject7.top = CanvasObject7.top;
	DrawingContextObject7 = CanvasObject7.getContext("2d"); 
	DrawingContextObject7.scale(1, 1); 

	CanvasObject8.width = rectObject8.width; 
	CanvasObject8.height = CanvasObject8.height; 
	CanvasObject8.left = CanvasObject8.left;
	CanvasObject8.top = CanvasObject8.top;
	DrawingContextObject8 = CanvasObject8.getContext("2d"); 
	DrawingContextObject8.scale(1, 1); 	
	
}

function UnSelectAll()
{
	CanvasObjectAll.style.border = '1px solid black';
	CanvasObject0.style.border = '1px solid black';
	CanvasObject1.style.border = '1px solid black';
	CanvasObject2.style.border = '1px solid black';
	CanvasObject3.style.border = '1px solid black';
	CanvasObject4.style.border = '1px solid black';
	CanvasObject5.style.border = '1px solid black';
	CanvasObject6.style.border = '1px solid black';
	CanvasObject7.style.border = '1px solid black';
	CanvasObject8.style.border = '1px solid black';
	for (i = 0; i < AreaIndex; i++)
	{
		SelectedArea[i] = false;
	}

	rangeRed.value = 0;
	rangeGreen.value = 0;
	rangeBlue.value = 0;
	rangeColors.value = "#000000";
	rangeRefractiveIndexOfMaterial.value = 0.1;
	rangeSurfaceStructur.value = 1;
	rangePartOfDirectLight.value = 0;
	rangePartOfReflectlight.value = 0;
	rangePartOfRefractionlight.value = 0;
	//rangePartSurrounding.value = 0;
}

function UnSelectObject(what)
{
	for (i = 0; i < AreaIndex; i++)
	{
		if (what == "all" || AreaBelongsToObject[i] == parseInt(what,10)) 
		{
			SelectedArea[i] = false;
		}
	}
}

function SelectObject(what)
{
	// UnSelectAll();
	if (what == "all") {UnSelectAll();} else {CanvasObjectAll.style.border = '1px solid black';}
	for (i = 0; i < AreaIndex; i++)
	{
		if (what == "all" || AreaBelongsToObject[i] == parseInt(what,10)) 
		{
			SelectedArea[i] = true;
			if (AreaConstants.items[i] != null)
			{
				rangeRed.value 							= AreaConstants.items[i].ColorOfObjectRed; 
				rangeGreen.value 						= AreaConstants.items[i].ColorOfObjectGreen; 
				rangeBlue.value 						= AreaConstants.items[i].ColorOfObjectBlue; 
				var a = ('0000'+(parseInt(AreaConstants.items[i].ColorOfObjectRed*255,10)).toString(16)).slice(-2);
				var b = ('0000'+(parseInt(AreaConstants.items[i].ColorOfObjectGreen*255,10)).toString(16)).slice(-2);
				var c = ('0000'+(parseInt(AreaConstants.items[i].ColorOfObjectBlue*255,10)).toString(16)).slice(-2);
				rangeColors.value						= "#"+a+b+c; 
				rangeRefractiveIndexOfMaterial.value 	= AreaConstants.items[i].RefractiveIndexOfMaterial;
				rangeSurfaceStructur.value 				= AreaConstants.items[i].SurfaceStructur;
				rangePartOfDirectLight.value 			= AreaConstants.items[i].PartOfDirectLight;
				rangePartOfReflectlight.value 			= AreaConstants.items[i].PartOfReflectlight;
				rangePartOfRefractionlight.value 		= AreaConstants.items[i].PartOfRefractionlight;
				rangePartSurrounding.value 				= PartSurrounding;	  
				document.getElementById('RefractiveIndexOfMaterialnumber').value 	= AreaConstants.items[i].RefractiveIndexOfMaterial;
				document.getElementById('SurfaceStructurnumber').value 				= AreaConstants.items[i].SurfaceStructur;
				document.getElementById('PartOfDirectLightnumber').value 			= AreaConstants.items[i].PartOfDirectLight;
				document.getElementById('PartOfReflectlightnumber').value 			= AreaConstants.items[i].PartOfReflectlight;
				document.getElementById('PartOfRefractionlightnumber').value 		= AreaConstants.items[i].PartOfRefractionlight;
				document.getElementById('PartSurroundingnumber').value 				= PartSurrounding;
			}
		}
		rangePartSurrounding.value = PartSurrounding;
	}
	RemoveEmptyObjectNumbers();
}

function DeleteObject(Number)
{
	CloneAreaValues(AreaOriginal, Area);
	var deleted = false;
	var AreaIndexOrig = AreaIndex;
	for (ii = AreaIndexOrig-1; ii >= 0; ii--)
	{
		if ((Number != undefined && AreaBelongsToObject[ii] == Number) || (Number == undefined && SelectedArea[ii] == true))
		{
			for (jj = ii+1; jj < AreaIndex; jj++)
			{ console.log(ii,jj);
				// console.log(jj+" "+ii);
				CloneAreaValuesOfSpecificArea(jj, ii);
				AreaBelongsToObject[ii] = AreaBelongsToObject[jj];
				SetupAreaConstants(ii);
				CloneAreaConstants(jj, ii);
				deleted = true;
			}
			// if (deleted == true) {AreaIndex--;}
			AreaIndex--;
			deleted = false;
		}
	}
	// if (deleted == true) {NumberOfCompleteObjects--;}
	CloneAreaValues(Area, AreaOriginal);
}

function RemoveEmptyObjectNumbers()
{
	CloneAreaValues(AreaOriginal, Area);
	var deleted = false;
	var AreaIndexOrig = AreaIndex;
	for (kk = 0; kk < NumberOfCompleteObjects; kk++)
	{
		var empty = true;
		for (ii = 0; ii < AreaIndexOrig; ii++)
		{
				if (AreaBelongsToObject[ii] == kk) {empty = false;}
		}
		if (empty == true)
		{
			kk = NumberOfCompleteObjects;
			for (ii = AreaIndexOrig-1; ii >= 0; ii--)
			{
				for (jj = ii+1; jj < AreaIndex; jj++)
				{ 
					CloneAreaValuesOfSpecificArea(jj, ii);
					AreaBelongsToObject[ii] = AreaBelongsToObject[jj];
					CloneAreaConstants(jj, ii);
				}
				AreaIndex--;
				deleted = true;
			}
		}
		if (deleted == true) {NumberOfCompleteObjects--;}
	}
	CloneAreaValues(Area, AreaOriginal);
}

function CopyObject(Number)
{
	CloneAreaValues(AreaOriginal, Area);
	var NewObjectCreated = false;
	var AreaIndexOrig = AreaIndex;
	for (i = 0; i < AreaIndexOrig; i++)
	{
		if ((Number != undefined && AreaBelongsToObject[i] == Number) || Number == undefined && SelectedArea[i] == true)
		{
			CloneAreaValuesOfSpecificArea(i, AreaIndex);
			AreaBelongsToObject[AreaIndex] = NumberOfCompleteObjects;
			CloneAreaConstants(i, AreaIndex);
			AreaIndex++; 
		}
	}
	if (NewObjectCreated == false) {NumberOfCompleteObjects++; NewObjectCreated = true;}
	CloneAreaValues(Area, AreaOriginal);
}

function SetColor(value, component)
{
	if (SetColorOfLight.items[0] == true || SetColorOfLight.items[1] == true || SetColorOfLight.items[2] == true || SetColorOfLight.items[3] == true || SetColorOfLight.items[4] == true || SetColorOfLight.items[5] == true || SetColorOfLight.items[6] == true || SetColorOfLight.items[7] == true || SetColorOfLight.items[8] == true || SetColorOfLight.items[9] == true) 
	{
		if (component == "colors") 
		{
			var a = parseInt(rangeColors.value.substring(1, 3),16)/255;
			var b = parseInt(rangeColors.value.substring(3, 5),16)/255;
			var c = parseInt(rangeColors.value.substring(5, 7),16)/255;
			for (lamp = 0; lamp < 10; lamp++)
			{
				if (SetColorOfLight.items[lamp] == true) 
				{
					ColorOfLightSource.items[lamp] = {Red:a, Green:b, Blue:c,};
				}
			}
		}
	}
	else
	{
		CloneAreaValues(AreaOriginal, Area);
		for (i = 0; i < AreaIndex; i++) 
		{ 
		  if (SelectedArea[i] == true)
		  {
			if (component == "red") {AreaConstants.items[i].ColorOfObjectRed = value/255;}
			if (component == "green") {AreaConstants.items[i].ColorOfObjectGreen = value/255;}
			if (component == "blue") {AreaConstants.items[i].ColorOfObjectBlue = value/255;}
			if (component == "colors") 
			{
				AreaConstants.items[i].ColorOfObjectRed   = parseInt(value.substring(1, 3),16)/255;
				AreaConstants.items[i].ColorOfObjectGreen = parseInt(value.substring(3, 5),16)/255;
				AreaConstants.items[i].ColorOfObjectBlue  = parseInt(value.substring(5, 7),16)/255;
			}
		  }
		}	  
		CloneAreaValues(Area, AreaOriginal);
	}
}

function CloneAreaConstants(From, To)
{
	AreaConstants.items[To] = 
	{
		a: AreaConstants.items[From].a,
		b: AreaConstants.items[From].b,
		c: AreaConstants.items[From].c,
		d: AreaConstants.items[From].d,
		nx: AreaConstants.items[From].nx,
		ny: AreaConstants.items[From].ny,
		nz: AreaConstants.items[From].nz,
		ColorOfObjectRed: AreaConstants.items[From].ColorOfObjectRed,
		ColorOfObjectGreen: AreaConstants.items[From].ColorOfObjectGreen,
		ColorOfObjectBlue: AreaConstants.items[From].ColorOfObjectBlue,
		RefractiveIndexOfMaterial: AreaConstants.items[From].RefractiveIndexOfMaterial,
		SurfaceStructur: AreaConstants.items[From].SurfaceStructur,
		PartOfDirectLight: AreaConstants.items[From].PartOfDirectLight,
		PartOfReflectlight: AreaConstants.items[From].PartOfReflectlight,
		PartOfRefractionlight: AreaConstants.items[From].PartOfRefractionlight,
		PartSurrounding: AreaConstants.items[From].PartSurrounding,
	};	
}

function SetupAreaConstants(index)
{
	AreaConstants.items[index] = 
	{
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		nx: 0,
		ny: 0,
		nz: 0,
		ColorOfObjectRed: 0,
		ColorOfObjectGreen: 0, 
		ColorOfObjectBlue: 0,
		RefractiveIndexOfMaterial: 1.5,
		SurfaceStructur: 20,
		PartOfDirectLight: 0.8,
		PartOfReflectlight: 0.1,
		PartOfRefractionlight: 0.0,
		PartSurrounding: 0.1,
		XDimensionMax: 100,
		YDimensionMax: 100,
		ZDimensionMax: 100,
		XDimensionMin: 100,
		YDimensionMin: 100,
		ZDimensionMin: 100,		
	};	
}

function SetPropertiesOfMaterial(value, property)
{
	CloneAreaValues(AreaOriginal, Area);
	var LastSelectedItem = 999999;
	for (i = 0; i < AreaIndex; i++) 
	{ 
		if (SelectedArea[i] == true)
		{
			if (property == "RefractiveIndexOfMaterial") {AreaConstants.items[i].RefractiveIndexOfMaterial = value; }
			if (property == "SurfaceStructur") {AreaConstants.items[i].SurfaceStructur = value; }
			if (property == "PartOfDirectLight") 
			{
				AreaConstants.items[i].PartOfDirectLight = value;
				var TotalParts = parseFloat(rangePartOfReflectlight.value) + parseFloat(rangePartOfRefractionlight.value) // + parseFloat(PartSurrounding);
				if (TotalParts == 0) AreaConstants.items[i].PartOfReflectlight = 0.1; else AreaConstants.items[i].PartOfReflectlight = AreaConstants.items[i].PartOfReflectlight / TotalParts * (1-AreaConstants.items[i].PartOfDirectLight);
				if (TotalParts == 0) AreaConstants.items[i].PartOfRefractionlight = 0.1; else AreaConstants.items[i].PartOfRefractionlight = AreaConstants.items[i].PartOfRefractionlight / TotalParts * (1-AreaConstants.items[i].PartOfDirectLight);
				// if (TotalParts == 0) PartSurrounding = 0.1; else PartSurrounding = PartSurrounding / TotalParts * (1-AreaConstants.items[i].PartOfDirectLight);
			}
			if (property == "PartOfReflectlight") 
			{
				AreaConstants.items[i].PartOfReflectlight = value;
				var TotalParts = parseFloat(rangePartOfDirectLight.value) + parseFloat(rangePartOfRefractionlight.value) // + parseFloat(PartSurrounding);
				if (TotalParts == 0) AreaConstants.items[i].PartOfDirectLight = 0.1; else AreaConstants.items[i].PartOfDirectLight = AreaConstants.items[i].PartOfDirectLight / TotalParts * (1-AreaConstants.items[i].PartOfReflectlight);
				if (TotalParts == 0) AreaConstants.items[i].PartOfRefractionlight = 0.1; else AreaConstants.items[i].PartOfRefractionlight = AreaConstants.items[i].PartOfRefractionlight / TotalParts * (1-AreaConstants.items[i].PartOfReflectlight);
				// if (TotalParts == 0) PartSurrounding = 0.1; else PartSurrounding = PartSurrounding / TotalParts * (1-AreaConstants.items[i].PartOfReflectlight);
			}
			if (property == "PartOfRefractionlight") 
			{
				AreaConstants.items[i].PartOfRefractionlight = value;
				var TotalParts = parseFloat(rangePartOfDirectLight.value) + parseFloat(rangePartOfReflectlight.value) // + parseFloat(PartSurrounding);
				if (TotalParts == 0) AreaConstants.items[i].PartOfDirectLight = 0.1; else AreaConstants.items[i].PartOfDirectLight = AreaConstants.items[i].PartOfDirectLight / TotalParts * (1-AreaConstants.items[i].PartOfRefractionlight);
				if (TotalParts == 0) AreaConstants.items[i].PartOfReflectlight = 0.1; else AreaConstants.items[i].PartOfReflectlight = AreaConstants.items[i].PartOfReflectlight / TotalParts * (1-AreaConstants.items[i].PartOfRefractionlight);
				// if (TotalParts == 0) PartSurrounding = 0.1; else PartSurrounding = PartSurrounding / TotalParts * (1-AreaConstants.items[i].PartOfRefractionlight);
			}
			if (property == "PartSurrounding") 
			{
				PartSurrounding = value;
				// var TotalParts = parseFloat(rangePartOfDirectLight.value) + parseFloat(rangePartOfReflectlight.value) + parseFloat(rangePartOfRefractionlight.value);
				// if (TotalParts == 0) AreaConstants.items[i].PartOfDirectLight = 0.1; else AreaConstants.items[i].PartOfDirectLight = AreaConstants.items[i].PartOfDirectLight / TotalParts * (1-PartSurrounding);
				// if (TotalParts == 0) AreaConstants.items[i].PartOfReflectlight = 0.1; else AreaConstants.items[i].PartOfReflectlight = AreaConstants.items[i].PartOfReflectlight / TotalParts * (1-PartSurrounding);
				// if (TotalParts == 0) AreaConstants.items[i].PartOfRefractionlight = 0.1; else AreaConstants.items[i].PartOfRefractionlight = AreaConstants.items[i].PartOfRefractionlight / TotalParts * (1-PartSurrounding);
			}
			LastSelectedItem = i;
		}
	}
	if (LastSelectedItem != 999999)
	{
		rangePartOfDirectLight.value 		= AreaConstants.items[LastSelectedItem].PartOfDirectLight;
		rangePartOfReflectlight.value 		= AreaConstants.items[LastSelectedItem].PartOfReflectlight;
		rangePartOfRefractionlight.value 	= AreaConstants.items[LastSelectedItem].PartOfRefractionlight;
		rangePartSurrounding.value 			= PartSurrounding;	  
		document.getElementById('RefractiveIndexOfMaterialnumber').value 	= AreaConstants.items[LastSelectedItem].RefractiveIndexOfMaterial;
		document.getElementById('SurfaceStructurnumber').value 				= AreaConstants.items[LastSelectedItem].SurfaceStructur;
		document.getElementById('PartOfDirectLightnumber').value 			= AreaConstants.items[LastSelectedItem].PartOfDirectLight;
		document.getElementById('PartOfReflectlightnumber').value 			= AreaConstants.items[LastSelectedItem].PartOfReflectlight;
		document.getElementById('PartOfRefractionlightnumber').value 		= AreaConstants.items[LastSelectedItem].PartOfRefractionlight;
		document.getElementById('PartSurroundingnumber').value 				= PartSurrounding;
	}
	CloneAreaValues(Area, AreaOriginal);
}

function max(a,b)
{
	if (a>b) {return a;} else {return b;}
}

function zoomen(value)
{
	CloneAreaValues(AreaOriginal, Area);
	for (i = 0; i < AreaIndex; i++) 
	{ 
		if (SelectedArea[i] == true)
		{
			for (k = 0; k < 3; k++)
			{
				Area.items[i][0][k] = Area.items[i][0][k] * value;	
				Area.items[i][1][k] = Area.items[i][1][k] * value;
				Area.items[i][2][k] = Area.items[i][2][k] * value;
			}
		}
	}
	CloneAreaValues(Area, AreaOriginal);
	for (lamp = 0; lamp < 10; lamp++)
	{
		LightSourceX.items[lamp] = LightSourceX.items[lamp] * value;
		LightSourceY.items[lamp] = LightSourceY.items[lamp] * value;
		LightSourceZ.items[lamp] = LightSourceZ.items[lamp] * value;
	}
}

function CenterLight(number)
{
	LightSourceX.items[number] = 0; 
	LightSourceY.items[number] = 0; 
	LightSourceZ.items[number] = 0;
}

function ReduceSizeInOneDirection()
{
	CloneAreaValues(AreaOriginal, Area);
	for (i = 0; i < AreaIndex; i++) 
	{ 
	  if (SelectedArea[i] == true)
	  {
		for (j = 0; j < 3; j++) 
		{
			if (MoveX != 0) Area.items[i][j][0] = Area.items[i][j][0] * (Math.sign(MoveX)*0.01+1);
			if (MoveY != 0) Area.items[i][j][1] = Area.items[i][j][1] * (Math.sign(MoveY)*0.01+1);
			if (MoveZ != 0) Area.items[i][j][2] = Area.items[i][j][2] * (Math.sign(MoveZ)*0.01+1);
		}
	  }
	}
	CloneAreaValues(Area, AreaOriginal);
	MoveX = 0; MoveY = 0; MoveZ = 0;
}

function MakeFourAreasFromOne()
{
	CloneAreaValues(AreaOriginal, Area);
	var AreaIndexOrig = AreaIndex;
	for (i = 0; i < AreaIndexOrig; i++)
	{
	    if (SelectedArea[i] == true)
		{
			CloneAreaValuesOfSpecificArea(i, AreaIndex);
			AreaBelongsToObject[AreaIndex] = AreaBelongsToObject[i];
			SetupAreaConstants(AreaIndex);
			CloneAreaConstants(i, AreaIndex);
			SelectedArea[AreaIndex] = true;
			Area.items[AreaIndex][0][0] = (Area.items[i][0][0]);
			Area.items[AreaIndex][0][1] = (Area.items[i][0][1]);
			Area.items[AreaIndex][0][2] = (Area.items[i][0][2]);
			Area.items[AreaIndex][1][0] = (Area.items[i][0][0] + Area.items[i][1][0])/2;
			Area.items[AreaIndex][1][1] = (Area.items[i][0][1] + Area.items[i][1][1])/2;
			Area.items[AreaIndex][1][2] = (Area.items[i][0][2] + Area.items[i][1][2])/2;
			Area.items[AreaIndex][2][0] = (Area.items[i][0][0] + Area.items[i][2][0])/2;
			Area.items[AreaIndex][2][1] = (Area.items[i][0][1] + Area.items[i][2][1])/2;
			Area.items[AreaIndex][2][2] = (Area.items[i][0][2] + Area.items[i][2][2])/2;
			AreaIndex++; 
			CloneAreaValuesOfSpecificArea(i, AreaIndex);
			AreaBelongsToObject[AreaIndex] = AreaBelongsToObject[i];
			SetupAreaConstants(AreaIndex);
			CloneAreaConstants(i, AreaIndex);
			SelectedArea[AreaIndex] = true;
			Area.items[AreaIndex][1][0] = (Area.items[i][1][0]);
			Area.items[AreaIndex][1][1] = (Area.items[i][1][1]);
			Area.items[AreaIndex][1][2] = (Area.items[i][1][2]);
			Area.items[AreaIndex][2][0] = (Area.items[i][1][0] + Area.items[i][2][0])/2;
			Area.items[AreaIndex][2][1] = (Area.items[i][1][1] + Area.items[i][2][1])/2;
			Area.items[AreaIndex][2][2] = (Area.items[i][1][2] + Area.items[i][2][2])/2;
			Area.items[AreaIndex][0][0] = (Area.items[i][1][0] + Area.items[i][0][0])/2;
			Area.items[AreaIndex][0][1] = (Area.items[i][1][1] + Area.items[i][0][1])/2;
			Area.items[AreaIndex][0][2] = (Area.items[i][1][2] + Area.items[i][0][2])/2;
			AreaIndex++; 
			CloneAreaValuesOfSpecificArea(i, AreaIndex);
			AreaBelongsToObject[AreaIndex] = AreaBelongsToObject[i];
			SetupAreaConstants(AreaIndex);
			CloneAreaConstants(i, AreaIndex);
			SelectedArea[AreaIndex] = true;
			Area.items[AreaIndex][2][0] = (Area.items[i][2][0]);
			Area.items[AreaIndex][2][1] = (Area.items[i][2][1]);
			Area.items[AreaIndex][2][2] = (Area.items[i][2][2]);
			Area.items[AreaIndex][0][0] = (Area.items[i][2][0] + Area.items[i][0][0])/2;
			Area.items[AreaIndex][0][1] = (Area.items[i][2][1] + Area.items[i][0][1])/2;
			Area.items[AreaIndex][0][2] = (Area.items[i][2][2] + Area.items[i][0][2])/2;
			Area.items[AreaIndex][1][0] = (Area.items[i][2][0] + Area.items[i][1][0])/2;
			Area.items[AreaIndex][1][1] = (Area.items[i][2][1] + Area.items[i][1][1])/2;
			Area.items[AreaIndex][1][2] = (Area.items[i][2][2] + Area.items[i][1][2])/2;
			AreaIndex++; 
			CloneAreaValuesOfSpecificArea(i, AreaIndex);
			AreaBelongsToObject[AreaIndex] = AreaBelongsToObject[i];
			SetupAreaConstants(AreaIndex);
			CloneAreaConstants(i, AreaIndex);
			SelectedArea[AreaIndex] = true;
			Area.items[AreaIndex][0][0] = (Area.items[i][0][0] + Area.items[i][1][0])/2;
			Area.items[AreaIndex][0][1] = (Area.items[i][0][1] + Area.items[i][1][1])/2;
			Area.items[AreaIndex][0][2] = (Area.items[i][0][2] + Area.items[i][1][2])/2;
			Area.items[AreaIndex][1][0] = (Area.items[i][1][0] + Area.items[i][2][0])/2;
			Area.items[AreaIndex][1][1] = (Area.items[i][1][1] + Area.items[i][2][1])/2;
			Area.items[AreaIndex][1][2] = (Area.items[i][1][2] + Area.items[i][2][2])/2;
			Area.items[AreaIndex][2][0] = (Area.items[i][0][0] + Area.items[i][2][0])/2;
			Area.items[AreaIndex][2][1] = (Area.items[i][0][1] + Area.items[i][2][1])/2;
			Area.items[AreaIndex][2][2] = (Area.items[i][0][2] + Area.items[i][2][2])/2;
			// AreaIndex++; 
			Area.items[i][0][0] = Area.items[AreaIndex][0][0];
			Area.items[i][0][1] = Area.items[AreaIndex][0][1];
			Area.items[i][0][2] = Area.items[AreaIndex][0][2];
			Area.items[i][1][0] = Area.items[AreaIndex][1][0];
			Area.items[i][1][1] = Area.items[AreaIndex][1][1];
			Area.items[i][1][2] = Area.items[AreaIndex][1][2];
			Area.items[i][2][0] = Area.items[AreaIndex][2][0];
			Area.items[i][2][1] = Area.items[AreaIndex][2][1];
			Area.items[i][2][2] = Area.items[AreaIndex][2][2]; 
		}
	}
	CloneAreaValues(Area, AreaOriginal);
}

function MakeLessSmooth()
{	
	var a = 1;
	var b = 0;
	var c = 0;
	var d = 0;
	CloneAreaValues(AreaOriginal, Area);
	for (i = 0; i < AreaIndex; i++) 
	{ 
	  if (SelectedArea[i] == true)
	  {
		for (j = 0; j < 3; j++) 
		{
			a = ((Math.random()-0.5)/100+1);
			b = Area.items[i][j][0];
			c = Area.items[i][j][1];
			d = Area.items[i][j][2];
			for (ii = 0; ii < AreaIndex; ii++)
			{
				for (jj = 0; jj < 3; jj++)
				{
					if (Math.abs(Area.items[ii][jj][0]-b)<1e-6 && Math.abs(Area.items[ii][jj][1]-c)<1e-6 && Math.abs(Area.items[ii][jj][2]-d)<1e-6)
					{
						Area.items[ii][jj][0] = Area.items[ii][jj][0] * a;
						Area.items[ii][jj][1] = Area.items[ii][jj][1] * a;
						Area.items[ii][jj][2] = Area.items[ii][jj][2] * a;
					}
				}
			}
		}
	  }
	}
	CloneAreaValues(Area, AreaOriginal);
}

function CalcSizeOfObject()
{
	var xmax = -1e10;
	var xmin = 1e10;
	var ymax = -1e10;
	var ymin = 1e10;
	var zmax = -1e10;
	var zmin = 1e10;
		
	for (i = 0; i < AreaIndex; i++) 
	{
		xmax = -1e10;
		xmin = 1e10;
		ymax = -1e10;
		ymin = 1e10;
		zmax = -1e10;
		zmin = 1e10;

		if (Area.items[i][0][0] > xmax) {xmax = Area.items[i][0][0];}
		if (Area.items[i][1][0] > xmax) {xmax = Area.items[i][1][0];}
		if (Area.items[i][2][0] > xmax) {xmax = Area.items[i][2][0];}

		if (Area.items[i][0][0] < xmin) {xmin = Area.items[i][0][0];}
		if (Area.items[i][1][0] < xmin) {xmin = Area.items[i][1][0];}
		if (Area.items[i][2][0] < xmin) {xmin = Area.items[i][2][0];}

		if (Area.items[i][0][1] > ymax) {ymax = Area.items[i][0][1];}
		if (Area.items[i][1][1] > ymax) {ymax = Area.items[i][1][1];}
		if (Area.items[i][2][1] > ymax) {ymax = Area.items[i][2][1];}

		if (Area.items[i][0][1] < ymin) {ymin = Area.items[i][0][1];}
		if (Area.items[i][1][1] < ymin) {ymin = Area.items[i][1][1];}
		if (Area.items[i][2][1] < ymin) {ymin = Area.items[i][2][1];}

		if (Area.items[i][0][2] > zmax) {zmax = Area.items[i][0][2];}
		if (Area.items[i][1][2] > zmax) {zmax = Area.items[i][1][2];}
		if (Area.items[i][2][2] > zmax) {zmax = Area.items[i][2][2];}

		if (Area.items[i][0][2] < zmin) {zmin = Area.items[i][0][2];}
		if (Area.items[i][1][2] < zmin) {zmin = Area.items[i][1][2];}
		if (Area.items[i][2][2] < zmin) {zmin = Area.items[i][2][2];}
 
		AreaConstants.items[i].XDimensionMax = xmax;
		AreaConstants.items[i].YDimensionMax = ymax;
		AreaConstants.items[i].ZDimensionMax = zmax;
		AreaConstants.items[i].XDimensionMin = xmin;
		AreaConstants.items[i].YDimensionMin = ymin;
		AreaConstants.items[i].ZDimensionMin = zmin;		
	}
	for (j = 0; j <= NumberOfCompleteObjects; j++)
	{
		xmax = -1e10;
		ymax = -1e10;
		zmax = -1e10;
		xmin = 1e10;
		ymin = 1e10;
		zmin = 1e10;
		for (i = 0; i < AreaIndex; i++) 
		{
			if (AreaBelongsToObject[i] == j)
			{
				if (xmax < AreaConstants.items[i].XDimensionMax) {xmax = AreaConstants.items[i].XDimensionMax;}
				if (ymax < AreaConstants.items[i].YDimensionMax) {ymax = AreaConstants.items[i].YDimensionMax;}
				if (zmax < AreaConstants.items[i].ZDimensionMax) {zmax = AreaConstants.items[i].ZDimensionMax;}
				if (xmin > AreaConstants.items[i].XDimensionMin) {xmin = AreaConstants.items[i].XDimensionMin;}
				if (ymin > AreaConstants.items[i].YDimensionMin) {ymin = AreaConstants.items[i].YDimensionMin;}
				if (zmin > AreaConstants.items[i].ZDimensionMin) {zmin = AreaConstants.items[i].ZDimensionMin;}
			}
		}		
		for (i = 0; i < AreaIndex; i++) 
		{
			if (AreaBelongsToObject[i] == j)
			{
				AreaConstants.items[i].XDimensionMax = xmax;
				AreaConstants.items[i].YDimensionMax = ymax;
				AreaConstants.items[i].ZDimensionMax = zmax;
				AreaConstants.items[i].XDimensionMin = xmin;
				AreaConstants.items[i].YDimensionMin = ymin;
				AreaConstants.items[i].ZDimensionMin = zmin;
			}
		}		
	}
}

function LoadSTLFile(TextFromFile)
{
	if (NumberOfCompleteObjects<MaxNbOfCompleteObjects) 
	{
		while (TextFromFile.indexOf("outer loop", 0) >= 0)
		{
			var pos1 = TextFromFile.indexOf("vertex", 0);
			var space1 = TextFromFile.indexOf(" ", pos1+1);
			var space2 = TextFromFile.indexOf(" ", space1+1);
			var space3 = TextFromFile.indexOf(" ", space2+1);
			var pos2 = TextFromFile.indexOf("vertex", space3);
			var value1x = parseInt(TextFromFile.substring(space1,space2));
			var value1y = parseInt(TextFromFile.substring(space2,space3));
			var value1z = parseInt(TextFromFile.substring(space3,pos2));
			var space1 = TextFromFile.indexOf(" ", pos2+1);
			var space2 = TextFromFile.indexOf(" ", space1+1);
			var space3 = TextFromFile.indexOf(" ", space2+1);
			var pos3 = TextFromFile.indexOf("vertex", space3);
			var value2x = parseInt(TextFromFile.substring(space1,space2));
			var value2y = parseInt(TextFromFile.substring(space2,space3));
			var value2z = parseInt(TextFromFile.substring(space3,pos3));
			var space1 = TextFromFile.indexOf(" ", pos3+1);
			var space2 = TextFromFile.indexOf(" ", space1+1);
			var space3 = TextFromFile.indexOf(" ", space2+1);
			var pos4 = TextFromFile.indexOf("endloop", space3);
			var value3x = parseInt(TextFromFile.substring(space1,space2));
			var value3y = parseInt(TextFromFile.substring(space2,space3));
			var value3z = parseInt(TextFromFile.substring(space3,pos4));
			TextFromFile = TextFromFile.substring(pos4);
			// console.log(value1x, value1y, value1z);		
			// console.log(value2x, value2y, value2z);
			// console.log(value3x, value3y, value3z);
			Area.items[AreaIndex][0][0] = value1x;
			Area.items[AreaIndex][0][1] = value1y;
			Area.items[AreaIndex][0][2] = value1z;
			Area.items[AreaIndex][1][0] = value2x;
			Area.items[AreaIndex][1][1] = value2y;
			Area.items[AreaIndex][1][2] = value2z;
			Area.items[AreaIndex][2][0] = value3x;
			Area.items[AreaIndex][2][1] = value3y;
			Area.items[AreaIndex][2][2] = value3z;		
			AreaBelongsToObject[AreaIndex] = NumberOfCompleteObjects;
			SelectedArea[AreaIndex] = true;
			SetupAreaConstants(AreaIndex);
			AreaIndex = AreaIndex + 1;
		}
		NumberOfCompleteObjects++;
		CloneAreaValues(Area, AreaOriginal);
		CalcSizeOfObject();
		ShowAreaOf3DObject();
	} 
	else 
	{
		alert('Number of total objects reached');
	}
}
