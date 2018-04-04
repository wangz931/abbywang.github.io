var color = 0;

document.onmousemove= function(event){
	// var x = event["x"];
	// var y = event["y"];
	var x = event.x;
	var y = event.y;
	console.log( x, y);
	var div = document.createElement("div");
	div.style.left = x + "px";
	div.style.top = y + "px";
	div.style.backgroundColor = "hsl(" + color + ", 100%, 50%)";
	document.body.appendChild(div);
	color = color +1;
}


// var array = [3,5., "meow"];

// var obj = {
// 	"key":4,
// 	"key2":"string",
// 	"key4":true
// }