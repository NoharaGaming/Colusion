var box1, box2;

function setup() {
    createCanvas(400, 400);
    box1 = createSprite(200, 180, 40, 40);
    box1.shapeColor = "skyBlue";
    box2 = createSprite(380, 200, 30, 40)
    box2.shapeColor = "red";
}


function draw() {
    background("lightGreen")
    box2.x = mouseX;
    box2.y = mouseY;

    isTouching()
    drawSprites()
}

// function add() {

// }