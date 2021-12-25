import { combineReducers } from 'redux'
import { addContactReducer } from './addContactReducer'
import { addRecentReducer } from './addRecent'
import { allContactReducer } from './allContactReducer'

export const allReducers = combineReducers({
    allContacts: allContactReducer,
    addContact:addContactReducer,
    recentContact:addRecentReducer
})
