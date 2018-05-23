import {RECEIVE_USERS} from "../actions/users";
import {ADD_POLL} from "../actions/polls";
import {UPDATE_ANSWER} from "../actions/answer";

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

const updateAnswer = (state, action) => {
    let {authedUser, id} = action
    let array = state[authedUser].answers
    let index = array.findIndex((answer) => answer === id)
    let data = index > -1 ? array: array.concat([id])
    return {
        ...state,
        [authedUser]: {
            ...state[authedUser],
            answers: data,
        }
    }

}

const users = (state={}, action) => {
    const mapper = {
        [RECEIVE_USERS]: allState,
        [ADD_POLL]: updateUser,
        [UPDATE_ANSWER]: updateAnswer,
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