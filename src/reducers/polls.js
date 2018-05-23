import {ADD_POLL, RECEIVE_POLLS} from "../actions/polls";
import {UPDATE_ANSWER} from "../actions/answer";

const allState = (state, action) => {
    return {
        ...state,
        ...action.polls
    }
}

const addPoll = (state, action) => {
    return {
        ...state,
        [action.poll.id]: action.poll,
    }
}

const updateAnswer = (state, action) => {
    console.log('action', state, action)
    return {
        ...state,
    }
}

const polls = (state={}, action) => {
    const mapper = {
        [RECEIVE_POLLS]: allState,
        [ADD_POLL]: addPoll,
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

export default polls