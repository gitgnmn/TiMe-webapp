/*let testTimer = { title: "timer1", goal: 1, goalTime: 60, timeSoFar: 0 };
let testTimer2 = { title: "timer2", goal: 0, goalTime: 0, timeSoFar: 0 };

let allTimers = [testTimer];
allTimers = allTimers.concat(testTimer2);
console.log(allTimers);*/

// Option to create new timer
function showPopup() {
    //Create popup
    let popup = `<div id='popup'> 
                    <div> Create a new Timer </div>
                    <button id="popupRemoveButton" onClick="removePopup()"> X </button> 
                    <input class="titleInput" placeholder="Title">
                    </input> <input placeholder="GoalTime" class="goalInput"> </input> 
                    <button  onClick="createNewTimer()">Create </button>
                </div>`;
    document.getElementById("mainEvent").innerHTML += popup;
}

function createNewTimer() {
    let popup = document.getElementById("popup");

    let titleValue = popup.getElementsByClassName("titleInput")[0].value;
    let goalValue = popup.getElementsByClassName("goalInput")[0].value;

    // Create a new timer with titleValue and goalTime
    document.getElementById("mainEvent").innerHTML += `<div class='menuItem'>
                        <div class='menuItemTimer'> 
                            ${goalValue} 
                            <div> 
                                ${titleValue} 
                            </div>
                        </div>
                    </div>`;

    removePopup();
}

function removePopup() {
    let popup = document.getElementById("popup");
    popup.remove();
}

function navFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
