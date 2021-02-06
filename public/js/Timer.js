export default class Timer{
    constructor(deltatime=1/60){
        let accumulatedTime=0;
        let lastTime=0;
            this.updateProxy=(time)=>{
                accumulatedTime+=(time-lastTime)/1000;
                while(accumulatedTime>deltatime){
                    this.update(deltatime);
                    accumulatedTime-=deltatime;
                }
                lastTime=time;
                //updating animation for every frame
                this.enqueue();
                    
                    
            }
    }
    enqueue(){
        requestAnimationFrame(this.updateProxy);
    }
    start(){
        this.enqueue();
    }
    
}