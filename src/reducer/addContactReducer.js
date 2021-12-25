export function addContactReducer(state = { name: '', email: '', mobile: '' }, action) {
    switch (action.type) {
        case "CHANGE_EMAIL":
            return {...state,email:action.payload}
        case "CHANGE_MOBILE":
            return {...state,mobile:action.payload}
        case "CHANGE_NAME":
            return {...state,name:action.payload}
        default:
            return state
    }
}