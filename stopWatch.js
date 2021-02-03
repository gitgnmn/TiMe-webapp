var time = 0;
var running = 0;

function toggleTimer() {
    if (running == 0) {
        running = 1;
        document.getElementById("startButton").innerHTML = "|| Stop Timer";
        increment();
    } else {
        running = 0;
        document.getElementById("startButton").innerHTML = "> Start Timer";
        // Save the timer data
    }
}

function increment() {
    if (running == 1) {
        setTimeout(function () {
            time++;
            var mins = Math.floor(time);
            if (mins <= 9) {
                mins;
            }

            /*document.getElementById("timerOutput").innerHTML =
                "You have been working for: " + mins + " min";*/
            console.log("You have been working for: " + mins + " min");
            increment();
        }, 60000);
    }
}
