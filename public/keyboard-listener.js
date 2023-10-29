export default function createKeyboardListener(){
    const state = {
        observers: []
    }

    function subscribe(oberverFunction){
        state.observers.push(oberverFunction)
    }

    function notifyAll(command){
        for(const oberserverFunction of state.observers){
            oberserverFunction(command)
        }
    }

    document.addEventListener("keydown", handleKeyPress);

    function handleKeyPress(event) {
        const keyPressed = event.key;

        const command = {
            playerId: event.playerId,
            keyPressed,
        };

        notifyAll(command)
    }

    return {
        subscribe
    }
}
