export default function createKeyboardListener(){
    const state = {
        observers: [],
        playerId: null
    }

    function registerPlayerId(playerId){
        state.playerId = playerId
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
            type: 'move-player', 
            playerId: state.playerId,
            keyPressed,
        };

        notifyAll(command)
    }

    return {
        subscribe,
        registerPlayerId
    }
}
