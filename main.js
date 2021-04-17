canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mouseEvent = "empty";

color = "black"
width_of_line = 2

var last_position_of_mouse_x,last_position_of_mouse_y;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mousedown";
    color = document.getElementById("put_color").value;
    width_of_line = document.getElementById("put_line_width").value;    
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - offsetLeft;
    current_position_of_mouse_y = e.clientY - offsetTop;

    if (mouseEvent == "mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_mouse_x,last_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_mouse_x = current_position_of_mouse_y;
    last_position_of_mouse_y = current_position_of_mouse_y;
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    last_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
    current_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_touch_y = e.touches[0].clientY - canvas.offsetTop; 

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_touch_x,last_position_touch_y);
    ctx.lineTo(current_position_touch_x,current_position_touch_y);
    ctx.stroke();
}