export function allContactReducer(state = [
    {
        id: 0,
        name: "Aer Bert",
        mobile: "123",
        email: "@qwer",
        isFav: false
    }, {
        id: 1,
        name: "Rohit Sharma",
        mobile: "9999998999",
        email: "rohit@indiancricketteam.com",
        isFav: false
    },], action) {
    switch (action.type) {
        case "NEW_CONTACT":
            return [...state, { ...action.payload, isFav: false, id: (state ? state[state.length - 1].id + 1 : 0) }]
        case "TOGGLE_FAV":
            let copystate=[...state]
            state.forEach((element,index)=>{
                if(element.id===action.payload)
                {
                    copystate[index].isFav=!state[index].isFav
                }


            }) 
            
            return copystate
        default:
            return state
    }
}