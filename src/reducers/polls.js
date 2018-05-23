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
    let {authedUser, answer, currentVote} = action
    let vote = `${answer}Votes`
    let current = `${currentVote}Votes`
    let prevData = state[action.id][current].filter((id) => id !== authedUser)
    let newData = state[action.id][vote].concat([authedUser])
    return {
        ...state,
        [action.id]: {
            ...state[action.id],
            [current]: prevData,
            [vote]: newData,
        }
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