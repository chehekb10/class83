var last_position_of_y,last_position_of_x;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color1="black";
width1=3;


var width2=screen.width;

new_width=screen.width-70;
new_height=screen.height-300;

if (width2 < 992) 
{document.getElementById("myCanvas").width=new_width;

document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){  
console.log("touchstart")
color1=document.getElementById("color1").value;
width1=document.getElementById("width1").value;
last_position_of_x=e.touches[0].clientX- canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY- canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    console.log("touchmove")
current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=width1;

console.log("last position of x and y coordinates = ");
console.log("x= "+last_position_of_x+"y= "+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);


console.log("current position of x and y coordinates = ");
console.log("x= "+current_position_of_touch_x+"y= "+current_position_of_touch_y);
ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
ctx.stroke();
last_position_of_x= current_position_of_touch_x;
last_position_of_y= current_position_of_touch_y;

}
function clear1(){

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}