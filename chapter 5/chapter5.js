document.getElementById("myName").innerHTML += " mazibuko"; 

let item1;
let item2;
let item3;

document.getElementById("changeList").onclick = newList;

// function newList() {
//     item1 = prompt("enter a new first thing: ");
//     item2 = prompt("enter a new second thing: ");
//     item3 = prompt("enter a new third thing: ");

//     updateList();
// };

// function updateList() {
//     document.getElementById("firstThing").innerHTML = item1;
//     document.getElementById("secondThing").innerHTML = item2;
//     document.getElementById("thirdThing").innerHTML = item3;
// }

function newList() {
    document.getElementById("firstThing").innerHTML = prompt("enter a new first thing: ");
    document.getElementById("secondThing").innerHTML = prompt("enter a new second thing: ");
    document.getElementById("thirdThing").innerHTML = prompt("enter a new third thing: ");
};