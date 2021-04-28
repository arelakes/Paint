window.addEventListener('load', main, false);
var color = "#000000";

function main() {
var ctx = canvas_example.getContext('2d')
var w = canvas_example.width
var h = canvas_example.height
var r = 10
var x = 0
var y = 0
var colorPicker = document.getElementById('colorpick')
var getcolor = document.getElementById('getcolor')
var cos = Math.cos(Math.PI/6)
var sin = Math.sin(Math.PI/6)
var bool = false;
var draw = false;


ctx.fillStyle = '#ffffff';
ctx.fillRect(0,0,w,h);
  

//пример считывания, передавать через value
 colorPicker.addEventListener("input", function() {
    document.getElementById('c8').style.backgroundColor = colorPicker.value //пример считывания, передавать через value
  });
	
	
	
	//заливка
	b7.onclick = function() {
		bool = !bool;
	}
	
	//рисование мышкой line(кривая)
	/*b4.onclick = function() {
		canvas_example.onmousedown = function(event){
			canvas_example.onmousemove = function(event){
				ctx.lineCap = "round";
				var x = event.offsetX;
				var y = event.offsetY;
				ctx.fillStyle = colorPicker.value;
				ctx.fillRect(x-0.01,y-0.01,0.1,0.1);
				ctx.fill();
					canvas_example.onmouseup = function(){ 
					canvas_example.onmousemove = null;
				}
			}
		}
	}*/
	
	//кривая line
    b4.onclick = function() {
		ctx.lineWidth = document.getElementById('size').value;
		ctx.strokeStyle = colorPicker.value;
		
			canvas_example.onmousedown = function(event){
				var x = event.offsetX;
				var y = event.offsetY;
                draw = true;
                ctx.beginPath();
                ctx.moveTo(x, y);
            }
			canvas_example.onmousemove = function(event){
				if(draw==true){
					var x = event.offsetX;
                    var y = event.offsetY;
                    ctx.lineTo(x, y);
                    ctx.stroke();
                }
            }
            canvas_example.onmouseup = function(event){
				var x = event.offsetX;
                var y = event.offsetY;
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.closePath();
                draw = false;
            }
			
	}			
 //стерка
	b8.onclick = function() {
		ctx.lineWidth = document.getElementById('size').value;
		ctx.strokeStyle = 'white';
		
			canvas_example.onmousedown = function(event){
				var x = event.offsetX;
				var y = event.offsetY;
                draw = true;
                ctx.beginPath();
                ctx.moveTo(x, y);
            }
			canvas_example.onmousemove = function(event){
				if(draw==true){
					var x = event.offsetX;
                    var y = event.offsetY;
                    ctx.lineTo(x, y);
                    ctx.stroke();
                }
            }
            canvas_example.onmouseup = function(event){
				var x = event.offsetX;
                var y = event.offsetY;
                ctx.lineTo(x, y);
                ctx.stroke();
                ctx.closePath();
                draw = false;
            }
			
	}	
	//круг
	b3.onclick = function() {
		canvas_example.onmousedown = function(event){
			var x = event.offsetX;
			var y = event.offsetY;
			var imageData = ctx.getImageData(0, 0, w, h);
			canvas_example.onmousemove = function(event){
					ctx.lineCap = "round";
					ctx.putImageData(imageData, 0, 0);
					var x1 = event.offsetX;
					var y1 = event.offsetY;
					ctx.beginPath();
					ctx.lineWidth = document.getElementById('size').value;
					ctx.strokeStyle = colorPicker.value;
					ctx.fillStyle = colorPicker.value;
					var r = Math.sqrt((x-x1)*(x-x1)+(y-y1)*(y-y1))
					ctx.arc(x, y, r, 0, 2*Math.PI);
					if (bool) {
						ctx.fill();
				} else {
					ctx.stroke();
				}
				canvas_example.onmouseup = function(event) {
					canvas_example.onmousemove = function() {}
				}
				}
			}
		}
		
	
	//квадрат
	b2.onclick = function() {
		canvas_example.onmousedown = function(event){
			var x = event.offsetX;
			var y = event.offsetY;
			var imageData = ctx.getImageData(0, 0, w, h);
			canvas_example.onmousemove = function(event){
					ctx.lineCap = "round";
					ctx.putImageData(imageData, 0, 0);
					var x1 = event.offsetX;
					var y1 = event.offsetY;
					ctx.beginPath();
					ctx.lineWidth = document.getElementById('size').value;
					ctx.strokeStyle = colorPicker.value;
					ctx.fillStyle = colorPicker.value;
					var r = Math.sqrt((x-x1)*(x-x1)+(y-y1)*(y-y1))
					ctx.moveTo(x, y);
					ctx.lineTo(x, y1); // линия вправо
					ctx.lineTo(x1, y1); // линия вниз
					ctx.lineTo(x1, y); // линия влево
					ctx.closePath(); // смыкание начала и конца рисунка (левая стена)
					if (bool) {
						ctx.fill();
				} else {
					ctx.stroke();
				}
				canvas_example.onmouseup = function(event) {
					canvas_example.onmousemove = function() {}
				}
					
			}
		}
	}
	
	
	//треугольник
	b5.onclick = function() {
		canvas_example.onmousedown = function(event){
			var x0 = event.offsetX;
			var y0 = event.offsetY;
			var imageData = ctx.getImageData(0, 0, w, h);
			canvas_example.onmousemove = function(event){
				ctx.putImageData(imageData, 0, 0);
				ctx.lineCap = "round";
				var x1 = event.offsetX;
				var y1 = event.offsetY;
				ctx.beginPath();
				ctx.lineWidth = document.getElementById('size').value;
				ctx.strokeStyle = colorPicker.value;
				ctx.fillStyle = colorPicker.value;
				ctx.moveTo(x0, y0);
				ctx.lineTo(x1, y0);
				ctx.lineTo((x0+x1)/2, y1);
				ctx.lineTo(x0, y0);
				if (bool) {
					ctx.fill();
				} else {
					ctx.stroke();
				}
				canvas_example.onmouseup = function(event) {
					canvas_example.onmousemove = function() {}
				}
			}
		}
	}

	
	
	//прямая line 1
	b1.onclick = function() {
		canvas_example.onmousedown = function(event){
			var x = event.offsetX;
			var y = event.offsetY;
			var imageData = ctx.getImageData(0, 0, w, h);
			canvas_example.onmousemove = function(event){
					ctx.putImageData(imageData, 0, 0);
					ctx.lineCap = "round";
					var x1 = event.offsetX;
					var y1 = event.offsetY;
					ctx.beginPath();
					ctx.lineWidth = document.getElementById('size').value;
					ctx.strokeStyle = colorPicker.value;
					ctx.moveTo(x, y);
					ctx.lineTo(x1, y1);
					ctx.stroke();
					canvas_example.onmouseup = function(event) {
					canvas_example.onmousemove = function() {}
				}
			}
		}
		
	}
	
	//овал 
	b6.onclick = function() {
		canvas_example.onmousedown = function(event){
			var x = event.offsetX;
			var y = event.offsetY;
			var imageData = ctx.getImageData(0, 0, w, h);
			canvas_example.onmousemove = function(event){
					ctx.putImageData(imageData, 0, 0);
					ctx.lineCap = "round";
					var x1 = event.offsetX;
					var y1 = event.offsetY;
					ctx.beginPath();
					ctx.lineWidth = document.getElementById('size').value;
					ctx.strokeStyle = colorPicker.value;
					ctx.fillStyle = colorPicker.value;
					var r = Math.sqrt((x-x1)*(x-x1)+(y-y1)*(y-y1))
					ctx.ellipse(x, y, r, r/2,0, 0, 2*Math.PI);
					if (bool) {
						ctx.fill();
				} else {
					ctx.stroke();
				}
				canvas_example.onmouseup = function(event) {
					canvas_example.onmousemove = function() {}
				}
				}
			}
		}
		
	
	
	//удаление со всего холста
	b9.onclick = function() {
		ctx.clearRect(0, 0, w, h);
	}
	//проверка
	/*b9.onclick = function() {
		ctx.fillStyle = colorPicker.value;
		ctx.fillRect(0, 0, w, h);
	}*/
}