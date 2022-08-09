//Select the element you want to move
const hoveringElement = document.querySelector('.hovering');

//function to calculate where mouse hover and give style to element you select before

function HoveringFunction(e) {
    //check if you hover on "button" or "a" or "img" to change style of element 
    //*NOTE: you can add or remove tag to condition
    if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.tagName === "IMG") {
        //give another style to hovering element
        hoveringElement.setAttribute("style", "border-width: 5px; width:25px;height:25px;border-color:#F35D69;");
    }
    //check if you not hover on "button" or "a" or "img" change style to defualt
    else {
        //give defualt style to hovering element
        hoveringElement.setAttribute("style", "border-width: 7px; width:0px;height:0px; border-color:#6cc644;");
    }

    //*NOTE : code below is for moving element
    //*NOTE: e.clientX; Get the Horizontal Coordinate
    //*NOTE: e.clientY; Get the Vertical Coordinate
    //*NOTE: window.scrollX; returns the number of pixels that the document is currently scrolled horizontally.
    //*NOTE: window.scrollY; returns the number of pixels that the document is currently scrolled vertically.

    // X is the place where the mouse moves on the X vector(horizontal) 
    var x = e.clientX + window.scrollX;
    // Y is the place where the mouse moves on the Y vector(vertical) 
    var y = e.clientY + window.scrollY;
    //Check if the suspension overflow has occurred on the left side of the screen
    if (x < 10) {
        //Return of the element 10px from the left to the page
        x = 10;
    }
    //give x and y to style.transform for move element in screen
    hoveringElement.style.transform = `translate(${x}px, ${y}px)`;
    hoveringElement.style.opacity = 1;
}
//moving mouse event
window.addEventListener('mousemove', HoveringFunction);