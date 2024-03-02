// document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("body").style.border = "2px solid black";
document.getElementById("mouth").style.borderRadius = "40px";
document.getElementById("righteye").style.border ="4px yellow dotted";
document.getElementById("lefteye").style.border ="4px yellow dotted";
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
document.getElementById("rightarm").style.backgroundColor = "#FF00FF";
document.getElementById("body").style.backgroundColor = "#FF0000";
document.getElementById("head").style.borderTop = "5px black solid";
document.getElementById("head").style.transform = "rotate(345deg)";
document.getElementById("nose").style.borderRadius = "40px";
// document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";

// animating the robot
let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown); // rightEye is the target
// rightEye.onclick = moveUpDown;
function moveUpDown(event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame, 10);
    function frame() {
        robotPart.style.top = t + "%";
        t++;
        if (t === 21) {
            clearInterval(animation);
        };
    };
}; // function is listener, click is the event

let leftEye = document.getElementById("lefteye");
leftEye.onclick = moveUpDown;

let nose = document.getElementById("nose");
nose.onclick = noseMoveUpDown;

function noseMoveUpDown (event) {
    let robotPart = event.target;
    let t = 0;
    let animation = setInterval(frame, 10);
    function frame() {
        robotPart.style.top = t + "%";
        t++;
        if (t === 51) {
            clearInterval(animation);
        };
    };
}

let leftArm = document.getElementById("leftarm");
leftArm.onclick = moveRightLeft;
function moveRightLeft (event) {
    let robotPart = event.target;
    let left = 0;
    let animation = setInterval(frame, 10);
    function frame() {
        robotPart.style.left = left + "%";
        left++;
        if (left === 71) {
            clearInterval(animation);
        };
    };
}

let rightArm = document.getElementById("rightarm");
rightArm.onclick = armMoveUpDown;

function armMoveUpDown (event) {
    let robotPart = event.target;
    let top = 0;
    let animation = setInterval(frame, 10);
    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 36) {
            clearInterval(animation);
        };
    };
}