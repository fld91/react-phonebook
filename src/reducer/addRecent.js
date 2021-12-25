export function addRecentReducer(state = [], action) {
    const maxSizeRecent=10
    switch (action.type) {
        case "ADD_RECENT":
            let newstate=[...state]
            if(newstate.length===maxSizeRecent){
                 newstate.shift()
            }
            newstate.push(action.payload)
            return newstate
        
        default:
            return state
    }
}