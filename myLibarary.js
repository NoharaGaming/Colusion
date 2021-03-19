function isTouching() {
    if (box2.x - box1.x < box1.width / 2 + box2.width / 2 &&
        box1.x - box2.x < box2.width / 2 + box1.width / 2 &&
        box2.y - box1.y < box2.height / 2 + box1.height / 2 &&
        box1.y - box2.y < box1.height / 2 + box2.height / 2

    ) {
        box1.shapeColor = "yellow";
        box2.shapeColor = "yellow";
    } else {
        box1.shapeColor = "skyblue";
        box2.shapeColor = "red";
    }

}