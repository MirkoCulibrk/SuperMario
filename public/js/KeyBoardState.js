const PRESSED=1;
const RELESED=0;
export default class KeyboardState{
    constructor(){
        //holds the current state of given key
        this.keyStates=new Map();
        //hold keyCodes and function for them
        this.keyMap=new Map();
    }
    addMapping(keyCode,callback){
        this.keyMap.set(keyCode,callback);
    }
    handleEvent(event){
        const {keyCode}=event;
        if(!this.keyMap.has(keyCode)){
            return ;
        }
        //prevent browser from doing default actions on button pressed
        event.preventDefault();

        //type of pressed key
        const keyState=event.type==='keydown'?PRESSED:RELESED;
        //check if keystates have key that is presed now 
        if(this.keyStates.get(keyCode)===keyState){
            return;
        }

        //making new key in keystates
        this.keyStates.set(keyCode,keyState);
        this.keyMap.get(keyCode)(keyState);
    }
    listenTo(window){
        ['keydown','keydown'].forEach((keyState)=>{
            window.addEventListener(keyState,(event)=>{
                this.handleEvent(event);
            });
        })
    }
}