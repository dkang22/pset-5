window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;
    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

const sayHello = function() {
    let canvas = document.getElementById('student-canvas-1');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    do {
        var message = prompt("Message: ");
        if (message === null) {
            break;
        } else if (message.length > 50) {
            alert("Your message is too long. Keep it under 50 characters.");
        } else {
            
        }
    } while(message.length > 50);

    if (message === null) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        context.font = "48px sans-serif";
        context.strokeText(message, 30, 70, 994);
    }
};

const drawRectangle = function() {
    let canvas = document.getElementById('student-canvas-2');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    do {
        var width = prompt("Width: ");
        var height = prompt("Height: ");
        var xcoordinate = prompt("X: ");
        var ycoordinate = prompt("Y: ");

        if (ycoordinate === null) {
            break;
        }

        width = Number(width);
        height = Number(height);
        xcoordinate = Number(xcoordinate);
        ycoordinate = Number(ycoordinate);

        if (isNaN(width) || isNaN(height) || isNaN(xcoordinate) || isNaN(ycoordinate)){
            alert("One of your values is not a number.");
        } else if (width < 1 || width > 1024) {
            alert("Your width must be between 1 and 1024.");
        } else if (height < 1 || height > 512) {
            alert("Your height must be between 1 and 512.");
        } else if (xcoordinate < 1 || xcoordinate > 1024) {
            alert("Your x-coordinate must be between 1 and 1024.");
        } else if (ycoordinate < 1 || ycoordinate > 512) {
            alert("Your y-coordinate must be between 1 and 512.");
        } else if (((width + xcoordinate) > 1024) || ((height + ycoordinate) > 512)) {
            alert("Your rectangle won't fit on the canvas.");
        }  else {
            //intentially empty
        }
    } while (width < 1 || width > 1024 || height < 1 || height > 512 || xcoordinate < 1 || xcoordinate > 1024 || ycoordinate < 1 || ycoordinate > 512 || isNaN(width) || isNaN(height) || isNaN(xcoordinate) || isNaN(ycoordinate) || (width + xcoordinate > 1024) || (height + ycoordinate > 512));

    if (ycoordinate === null) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        context.strokeRect(xcoordinate, ycoordinate, width, height);
        context.stroke();
    }
};

const drawColoredRectangle = function() {
    let canvas = document.getElementById('student-canvas-3');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    do {
        var color = prompt("Color: ");

        var colorString = String(color);
        var colorCaseUnsensitive = colorString.toLowerCase();

        if (color === null) {
            break;
        } else if (color === "") {
            alert(" is not a supported color.");
        } else if (colorCaseUnsensitive !== "black" && colorCaseUnsensitive !== "blue" && colorCaseUnsensitive !== "green" && colorCaseUnsensitive !== "orange" && colorCaseUnsensitive !== "purple" && colorCaseUnsensitive !== "red" && colorCaseUnsensitive !== "yellow" ) {
            alert(colorCaseUnsensitive + " is not a supported color.");
        } else {
            //intentially empty
        }
    } while (colorCaseUnsensitive !== "black" && colorCaseUnsensitive !== "blue" && colorCaseUnsensitive !== "green" && colorCaseUnsensitive !== "orange" && colorCaseUnsensitive !== "purple" && colorCaseUnsensitive !== "red" && colorCaseUnsensitive !== "yellow" && color !== null);

    switch (colorCaseUnsensitive) {
        case "black":
            context.fillStyle = "#000000";
            context.fillRect(10, 10, 100, 50);
            break;
        case "blue":
            context.fillStyle = "#0000FF";
            context.fillRect(10, 10, 100, 50);
            break;
        case "green":
            context.fillStyle = "#008000";
            context.fillRect(10, 10, 100, 50);
            break;
        case "orange":
            context.fillStyle = "#FFA500";
            context.fillRect(10, 10, 100, 50);
            break;
        case "purple":
            context.fillStyle = "#800080";
            context.fillRect(10, 10, 100, 50);
            break;
        case "red":
            context.fillStyle = "#FF0000";
            context.fillRect(10, 10, 100, 50);
            break;
        case "yellow":
            context.fillStyle = "#FFFF00";
            context.fillRect(10, 10, 100, 50);
            break;
        case null:
            context.clearRect(0, 0, canvas.width, canvas.height);
            break;
        default:
            break;
    }

};

const drawTriangle = function() {
    let canvas = document.getElementById('student-canvas-4');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    do {
        var side1 = prompt("Side 1: ");
        var side2 = prompt("Side 2: ");
        var side3 = prompt("Side 3: ");
        var height = Math.min(side1, side2, side3);
        var hypotenuse = Math.max(side1, side2, side3);
        var base = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(height, 2));

        if (side3 === null) {
            break;
        } else if (height == 0 || base == 0 || hypotenuse == 0) {
            alert("Your side lengths must be greater than or equal to 1.");
        } else if (height > 487 || base > 999) {
            alert("Your triangle won't fit on the canvas.")
        } else if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
            alert("One of your sides is not a number.");
        } else if (Math.hypot(side1, side2) != side3 && Math.hypot(side2, side3) != side1 && Math.hypot(side1, side3) != side2) {
            alert("That's not a valid right triangle.");
        } else {
            //intentially empty
        }
    } while (height == 0 || base == 0 || hypotenuse == 0 || isNaN(side1) || isNaN(side2) || isNaN(side3) || (Math.hypot(side1, side2) != side3 && Math.hypot(side2, side3) != side1 && Math.hypot(side1, side3) != side2) || height > 512 || base > 1024);

    if (side3 === null) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        height += 25;
        base += 25;

        context.beginPath();
        context.moveTo(25, 25);
        context.lineTo(25, height);
        context.lineTo(base, height);
        context.lineTo(25, 25);
        context.stroke();
    }
};

const drawFace = function() {
    let canvas = document.getElementById('student-canvas-5');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    do {
        var headRadius = prompt("Radius: ");

        if (headRadius === null) {
            break;
        }

        if (isNaN(headRadius)) {
            alert("Your radius is not a number.");
        } else if (headRadius < 32) {
            alert("Your radius must be at least 32.");
        } else if (headRadius > 256) {
            alert("Your smiley face won't fit on the canvas.");
        } else {
            //intentially empty
        }
    } while (headRadius > 256 || headRadius < 32 || isNaN(headRadius));

    if (headRadius === null) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        var eyesRadius = 0.15 * headRadius;
        var mouthRadius = 0.7 * headRadius;

        context.beginPath();
        context.arc(512, 256, headRadius, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc(512 - (headRadius * 0.4), 256 - (headRadius * 0.4), eyesRadius, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc(512 + (headRadius * 0.4), 256 - (headRadius * 0.4), eyesRadius, 0, 2 * Math.PI);
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc(512, 256, mouthRadius, 0, Math.PI);
        context.stroke();
        context.closePath();
    }
};

const drawPyramid = function() {
    let canvas = document.getElementById('student-canvas-6');
    let context = canvas.getContext('2d');

    context.clearRect(0, 0, canvas.width, canvas.height);

    do {
        var blockSize = prompt("Side: ");

        if (blockSize === null) {
            break;
        } else if (blockSize < 1) {
            alert("Your block size must be at least 1.");
        } else if (blockSize > 100) {
            alert("Your pyramid won't fit on the canvas.");
        } else if (isNaN(blockSize)) {
            alert("Your block size is not a number.");
        } else {
            //intentially empty
        }
    } while (blockSize < 1 || blockSize > 100 || isNaN(blockSize));

    if (blockSize === null) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        blockSize = Number(blockSize);

        //first level (base) of the Pyramid

        let xOrigin = 10;
        let yOrigin = 502 - blockSize;

        for (let x = 5; x > 0; x--) {
            context.strokeRect(xOrigin, yOrigin, blockSize, blockSize);
            context.stroke();
            xOrigin += blockSize;
        }

        //second level of the Pyramid

        xOrigin = 10 + (0.5 * blockSize);
        yOrigin = 502 - (2 * blockSize);

        for (let y = 4; y > 0; y--) {
            context.strokeRect(xOrigin, yOrigin, blockSize, blockSize);
            context.stroke();
            xOrigin += blockSize;
        }

        //third level of the Pyramid

        xOrigin = 10 + blockSize;
        yOrigin = 502 - (3 * blockSize);

        for (let z = 3; z > 0; z--) {
            context.strokeRect(xOrigin, yOrigin, blockSize, blockSize);
            context.stroke();
            xOrigin += blockSize;
        }

        //fourth level of the Pyramid

        xOrigin = 10 + (1.5 * blockSize);
        yOrigin = 502 - (4 * blockSize);

        for (let a = 2; a > 0; a--) {
            context.strokeRect(xOrigin, yOrigin, blockSize, blockSize);
            context.stroke();
            xOrigin += blockSize;
        }

        //fifth level (top) of the Pyramid

        xOrigin = 10 + (2 * blockSize);
        yOrigin = 502 - (5 * blockSize);

        context.strokeRect(xOrigin, yOrigin, blockSize, blockSize);
        context.stroke();
    }
};
