import { timer } from "rxjs";

export let timerModel = {
    timers: [],

    onHomeView: 1,

    toggleHomeView(){
        this.onHomeView = (this.onHomeView + 1) % 2;

        if(this.onHomeView === 1){
            console.log("Now entering homeview start everything up again!");
            // Update progress bar
            
            this.timers.forEach(timer => {
                updateHomeProgressBar(timer);
            });
        }
        if(this.onHomeView === 0){
            console.log("Now entering detailview!");
            // Update progress bar
            
            updateDetailProgressBar();
        }
    },

    playTimer(timerId: number) {
        let timer = this.timers.find(timer => {
          return timer.id === timerId;
        })
        timer.running = true;
    
        // Adds 1 min to timer each min :)
        increment(timer);
    },
    
    pauseTimer(timerId: number) {
        let timer = this.timers.find(timer => {
          return timer.id === timerId;
        })
        timer.running = false;
    },

    // TODO
    /*removeTimer(timer) {
        console.log(this.timers);
        this.timers.splice(timer, 1);
        console.log(this.timers);
    },*/
} ;

function increment(timer) {
    if (timer.running) {
        setTimeout(function () {
            // Updates every minute
            timer.current += 1/60;
  
            // Update progress bar
            let onHomeView = timerModel.onHomeView;
            if(onHomeView === 1){
                console.log("I am on homescreen let's update");

                updateHomeProgressBar(timer);
            }
            else if(onHomeView === 0){
                console.log("On detail view hopefully now update other bar");
            }
  
            increment(timer); 
        }, 60);
    }
  }

function updateHomeProgressBar(timer){
    if(timer.goal != 0 && timer.goal > timer.current ){
        Array.from(document.getElementsByClassName('progress-bar-nonanimated') as HTMLCollectionOf<HTMLElement>)[(timer.id-1)].style.width = (timer.current / timer.goal) * 100 + "%";
    }
    else{
        Array.from(document.getElementsByClassName('progress-bar-nonanimated') as HTMLCollectionOf<HTMLElement>)[(timer.id-1)].style.width = "100%";
        Array.from(document.getElementsByClassName('progress-bar-animated') as HTMLCollectionOf<HTMLElement>)[(timer.id-1)].style.width = "0%";
    }
}

function updateDetailProgressBar(){
    /*if(timer.goal != 0 && timer.goal > timer.current ){
        // Update circular progressbar to timer.current / timer.goal * 100 %
    }
    else{
        // Update circular progressbar to 100%
    }*/
}