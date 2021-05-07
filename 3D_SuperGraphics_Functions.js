// Latest Major Changes:
// v1.00 26.03.2021 Complete program after completion of all chapters for Udemy Online Course
// v1.01 07.05.2021 Added elapsed time calculation (not yet uploaded to github)

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

function EnterNewPoints() 
{ 
	window.addEventListener('mousemove', mousemoveevent); 
	window.addEventListener('mousedown', mousedownevent); 
	window.addEventListener('keydown', keydownevent); 
	//drawText(10,20,"Click to enter a new point. Press space to finish entering points. Or press <<L>> key if you have saved a scene before.",DrawingContext,"#0000FF","left");   
	ShowAxesAndEnteredPoints();
}

function mousemoveevent(event) {mousePos = getMousePos(canvas, event); ShowMousemove();} 
function mousedownevent(event) {AddMousePosition();} 
function keydownevent(event) 
{
	switch(event.keyCode)
	{
		case 33: // "page up" key
			NumberOfRotationSegments = NumberOfRotationSegments + 1; 
			if (NumberOfRotationSegments > MaxNbOfRotSegments) {NumberOfRotationSegments = MaxNbOfRotSegments;} 
			CreateRotationObject(); 
			break; 
		case 34: // "page down" key
			NumberOfRotationSegments = NumberOfRotationSegments - 1; 
			if (NumberOfRotationSegments < 2) {NumberOfRotationSegments = 2;} 
			CreateRotationObject(); 
			break;
		case 86: // "v" key
			Perspective = 1-Perspective; 
			Rotation();
			ApplyPerspectiveDistortionIfRequired(); 
			Show3dObject(); 
			break;
		case 54: // "6" key 
		case 102: 
			NumberOfRotationsX =  NumberOfRotationsX + 1; 
			AngleX = NumberOfRotationsX * increment; 
			Rotation(); 
			ApplyPerspectiveDistortionIfRequired(); 
			Show3dObject(); 
			break; 
		case 52: // "4" key 
		case 100: 
			NumberOfRotationsX =  NumberOfRotationsX - 1; 
			AngleX = NumberOfRotationsX * increment; 
			Rotation(); 
			ApplyPerspectiveDistortionIfRequired(); 
			Show3dObject(); 
			break; 
		case 56: // "8" key 
		case 104: 
			NumberOfRotationsY =  NumberOfRotationsY + 1; 
			AngleY = NumberOfRotationsY * increment; 
			Rotation(); 
			ApplyPerspectiveDistortionIfRequired(); 
			Show3dObject(); 
			break; 
		case 50: // "2" key
		case 98: 
			NumberOfRotationsY =  NumberOfRotationsY - 1; 
			AngleY = NumberOfRotationsY * increment; 
			Rotation(); 
			ApplyPerspectiveDistortionIfRequired(); 
			Show3dObject(); 
			break; 
		case 49: // "1" key 
		case 97: 
			NumberOfRotationsZ =  NumberOfRotationsZ + 1; 
			AngleZ = NumberOfRotationsZ * increment; 
			Rotation(); 
			ApplyPerspectiveDistortionIfRequired(); 
			Show3dObject(); 
			break; 
		case 57: // "9" key 
		case 105: 
			NumberOfRotationsZ =  NumberOfRotationsZ - 1; 
			AngleZ = NumberOfRotationsZ * increment; 
			Rotation(); 
			ApplyPerspectiveDistortionIfRequired(); 
			Show3dObject(); 
			break; 
		case 68: // "d" key 
			DrawingMethod = DrawingMethod + 1; if (DrawingMethod > 3) {DrawingMethod = 0;} 
			Show3dObject(); 
			break;
		case 82: // "r" key
			setTimeout(function() {document.title = "Starting calculation..."; var tempTime = new Date(); StartTime = tempTime.getTime()},0);
			RayTracing();
			setTimeout(function() {var tempTime = new Date(); document.title = "Calculation finished. ("+((tempTime.getTime()-StartTime)/1000)+"s)"; docTitle = 0;},0);
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
			SaveObject();
			break;
		case 76: // "l" key
			LoadObject();
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
		case 32: // "space" key
			KeyPressed = 1; 
			CheckIfAllPointsWereEntered();
			break;
	}
} 

function CheckIfAllPointsWereEntered()
{
	if (NumberOfPoints >= 2 && (NumberOfPoints > MaxNumberOfPoints || KeyPressed == 1)) 
	{
		clearScreen(); 
		ShowAxesAndEnteredPoints();
		drawLine(PointCoordinatesArray.items[NumberOfPoints-1][0] + width/2, height/2 - PointCoordinatesArray.items[NumberOfPoints-1][1], PointCoordinatesArray.items[0][0] + width/2, height/2 - PointCoordinatesArray.items[0][1], 1, DrawingContext,"#000000");
		window.removeEventListener('mousemove',mousemoveevent); 
		window.removeEventListener('mousedown',mousedownevent); 
		//window.removeEventListener('keydown',keydownevent);
		TotalEnteredPoints = NumberOfPoints;
		CreateRotationObject();
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
			drawLine(oldkoorx, oldkoory, oldx, oldy, 3, DrawingContext,"#FFFFFF"); 
			drawLine(oldkoorx, oldkoory, mousePos.x, mousePos.y, 1, DrawingContext,"#000000");       
			oldx = mousePos.x; 
			oldy = mousePos.y;
		}
	}
	ShowAxesAndEnteredPoints();
}

function AddMousePosition() 
{ 
	PointCoordinatesArray.items[NumberOfPoints][0] = mousePos.x - width/2;
	PointCoordinatesArray.items[NumberOfPoints][1] = height/2 - mousePos.y; 
	oldkoorx = mousePos.x; 
	oldkoory = mousePos.y; 
	NumberOfPoints = NumberOfPoints + 1; 
	ShowAxesAndEnteredPoints();
	CheckIfAllPointsWereEntered();
}

function ShowAxesAndEnteredPoints() 
{
	drawLine(width/2, 0, width/2, height, 1, DrawingContext,"#000000");
	drawLine(0, height/2, width, height/2, 1, DrawingContext,"#000000"); 
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
	Rotation();
	ApplyPerspectiveDistortionIfRequired(); 
	Show3dObject();
}

function Show3dObject()
{
	clearScreen(); 
	drawLine(width/2, 0, width/2, height,1,DrawingContext,"#000000"); 
	drawLine(0, height/2, width, height/2,1,DrawingContext,"#000000");
	// drawText(10,60,"Press v to toggle perspective",DrawingContext,"#000000","left");
	// drawText(10,80,"Press 4 / 6 to rotate around X-Axis",DrawingContext,"#000000","left");
	// drawText(10,100,"Press 2 / 8 to rotate around Y-Axis",DrawingContext,"#000000","left");
	// drawText(10,120,"Press 1 / 9 to rotate around Z-Axis",DrawingContext,"#000000","left");
	// drawText(10,140,"Press <page up> / <page down> to increase / decrease the number of segments",DrawingContext,"#000000","left"); 
	// drawText(10,160,"Press d to change drawing method from <color with lines> to <color without lines> to <hidden line> and to <wireframe>",DrawingContext,"#000000","left");  
	// drawText(10,180,"Press r to start RayTracing calculation",DrawingContext,"#000000","left");
	// drawText(10,200,"Press q to toggle the resolution",DrawingContext,"#000000","left");
	// drawText(10,220,"Press s to save a screenshot",DrawingContext,"#000000","left");
	// drawText(10,240,"Press k to save the current scene",DrawingContext,"#000000","left");	
	// drawText(10,260,"Press l to load the saved scene",DrawingContext,"#000000","left");		
	// drawText(10,280,"Press c to create a cube",DrawingContext,"#000000","left");			
	// drawText(10,300,"Press m to create a sphere",DrawingContext,"#000000","left");	
	// drawText(10,320,"Press n to create waves",DrawingContext,"#000000","left");		
	
	var TempPointX = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	var TempPointY = new Array2D(MaxNbOfRotSegments,MaxNumberOfPoints); 
	
	for (i = 0; i < NumberOfRotationSegments; i++) 
	{
		for (j = 0; j < TotalEnteredPoints; j++)
		{
			TempPointX.items[i][j] = width/2-Points.items[i][j][0]; 
			TempPointY.items[i][j] = height/2-Points.items[i][j][1];
			if (j > 0) {drawLine(TempPointX.items[i][j-1], TempPointY.items[i][j-1], TempPointX.items[i][j], TempPointY.items[i][j], 1,DrawingContext,"#000000");}
			if (i > 0) {drawLine(TempPointX.items[i][j], TempPointY.items[i][j], TempPointX.items[i-1][j], TempPointY.items[i-1][j], 1,DrawingContext,"#000000");}
		}
	}
	for (j = 0; j < TotalEnteredPoints; j++)
	{
		drawLine(TempPointX.items[0][j], TempPointY.items[0][j], TempPointX.items[NumberOfRotationSegments-1][j], TempPointY.items[NumberOfRotationSegments-1][j], 1, DrawingContext,"#000000");	
	}
	//BuildAreasFrom3DPoints(); 
	Build3PointsAreasFrom3DPoints();
	ShowAreaOf3DObject();
}

function ApplyPerspectiveDistortionIfRequired() 
{
	var DistortionDistance = -500; 
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
	AreaIndex = 0;
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
			AreaIndex = AreaIndex + 1;
			for (k = 0; k < 3; k++) 
			{
				Area.items[AreaIndex][0][k] = Points.items[i][j+1][k]; 
				Area.items[AreaIndex][1][k] = Points.items[i+1][j][k]; 
				Area.items[AreaIndex][2][k] = Points.items[i+1][j+1][k]; 
			}
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
		AreaIndex = AreaIndex + 1;
		for (k = 0; k < 3; k++)
		{
			Area.items[AreaIndex][0][k] = Points.items[NumberOfRotationSegments-1][j+1][k]; 
			Area.items[AreaIndex][1][k] = Points.items[0][j][k]; 
			Area.items[AreaIndex][2][k] = Points.items[0][j+1][k]; 
		}
		AreaIndex = AreaIndex + 1;
	}
}

function ShowAreaOf3DObject()
{
	CalcOrderOfAreasAlongZAxis();  
	for (i = 0; i < AreaIndex; i++)
	{
		var NewIndexAccordingToZValue = AreaOrderIndex.items[i];  
		var ColorAccordingToDepthLevel = 255/AreaIndex*i;
		if (DrawingMethod == 0 || DrawingMethod == 1) DrawingContext.fillStyle = "rgb("+ColorAccordingToDepthLevel+", "+ColorAccordingToDepthLevel+", "+ColorAccordingToDepthLevel+")";   
		if (DrawingMethod == 2) DrawingContext.fillStyle = "#ffffff"; 
		//DrawingContext.fillStyle = "#ffffff"; 
		DrawingContext.strokeStyle = "#000000";
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
		if (DrawingMethod == 0 || DrawingMethod == 2 || DrawingMethod == 3) DrawingContext.stroke(); 
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
    link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
	
}
		
function SaveObject()
{
	if ('localStorage' in window && window['localStorage'] !== null) 
	{
		localStorage.setItem("PointCoordinatesArray", JSON.stringify(PointCoordinatesArray));
		localStorage.setItem("NumberOfRotationSegments", JSON.stringify(NumberOfRotationSegments));
		localStorage.setItem("TotalEnteredPoints", JSON.stringify(TotalEnteredPoints));
		localStorage.setItem("AngleX", JSON.stringify(AngleX));
		localStorage.setItem("AngleY", JSON.stringify(AngleY));
		localStorage.setItem("AngleZ", JSON.stringify(AngleZ));
		localStorage.setItem("Perspective", JSON.stringify(Perspective));
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

function CreateCube()
{
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
}

function CreateSphere()
{
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
}

function CreateWaves()
{
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
}

