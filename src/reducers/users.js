import {RECEIVE_USERS} from "../actions/users";
import {ADD_POLL} from "../actions/polls";

const allState = (state, action) => {
    return {
        ...state,
        ...action.users
    }
}

const updateUser = (state, action) => {
    const {author, id} = action.poll
    return {
        ...state,
        [author] : {
            ...state[author],
            polls: state[author].polls.concat([id]),
        }
    }
}

const users = (state={}, action) => {
    const mapper = {
        [RECEIVE_USERS]: allState,
        [ADD_POLL]: updateUser,
    }
    let type = action.type
    let value = mapper[type]
    if ( value !== undefined ) {
        return value(state, action)
    } else {
        return state
    }
}

export default users