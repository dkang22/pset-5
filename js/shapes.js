window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    let canvas = document.getElementById('student-canvas-1');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    let message = prompt("Message: ");
    let messageLength = message.length;

    while (messageLength > 50) {
        alert("Your message is too long. Keep it under 50 characters.");
        message = prompt("Message: ");
        messageLength = message.length;
    }

    context.font = "48px sans-serif";
    context.strokeText(message, 30, 70, 994);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    let canvas = document.getElementById('student-canvas-2');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    let width = Number(prompt("Width: "));
    let height = Number(prompt("Height: "));
    let xcoordinate = Number(prompt("X: "));
    let ycoordinate = Number(prompt("Y: "));

    while (width < 1 || width > 1024 || height < 1 || height > 512 || xcoordinate < 1 || xcoordinate > 1024 || ycoordinate < 1 || ycoordinate > 512) {
        if (width < 1 || width > 1024) {
            alert("Your width must be between 1 and 1024.");
        } else if (height < 1 || height > 512) {
            alert("Your height must be between 1 and 512.");
        } else if (xcoordinate < 1 || xcoordinate > 1024) {
            alert("Your x-coordinate must be between 1 and 1024.");
        } else if (ycoordinate < 1 || ycoordinate > 512) {
            alert("Your y-coordinate must be between 1 and 512.");
        } else {
            //intentially empty
        }

        width = Number(prompt("Width: "));
        height = Number(prompt("Height: "));
        xcoordinate = Number(prompt("X: "));
        ycoordinate = Number(prompt("Y: "));
    }

    context.fillRect(xcoordinate, ycoordinate, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    let canvas = document.getElementById('student-canvas-2');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    let color = toLowerCase(prompt("Color: "));

    while (color === "black" || color === "blue" || color === "green" || color === "orange" || color === "purple" || color === "red" || color === "yellow") {
        alert(color + " is not a supported color.");
        color = toLowerCase(prompt("Color: "));
    }

    switch (color) {
        case "black":
            context.fillStyle = 'black';
            context.fillRect(10, 10, 100, 50);
            break;
        case "blue":
            context.fillStyle = 'blue';
            context.fillRect(10, 10, 100, 50);
            break;
        case "green":
            context.fillStyle = 'green';
            context.fillRect(10, 10, 100, 50);
            break;
        case "orange":
            context.fillStyle = 'orange';
            context.fillRect(10, 10, 100, 50);
            break;
        case "purple":
            context.fillStyle = 'purple';
            context.fillRect(10, 10, 100, 50);
            break;
        case "red":
            context.fillStyle = 'red';
            context.fillRect(10, 10, 100, 50);
            break;
        case "yellow":
            context.fillStyle = 'yellow';
            context.fillRect(10, 10, 100, 50);
            break;
        default:
            alert(color + " is not a supported color.");
    }
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
