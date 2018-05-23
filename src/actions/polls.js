import {savePoll} from "../utils/api";
import {showLoading, hideLoading} from 'react-redux-loading'

const RECEIVE_POLLS = 'RECEIVE_POLLS'
const ADD_POLL = 'ADD_POLL'

const receivePolls = (polls) => {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
}

const addPoll = (poll) => {
    return {
        type: ADD_POLL,
        poll,
    }
}

const handleAddPoll = (poll) => {
    return (dispatch, getState) => {
        dispatch(showLoading())
        const {authedUser} = getState()
        savePoll({
            ...poll,
            author: authedUser,
        })
            .then((poll) => dispatch(addPoll(poll)))
            .then(() => hideLoading())
    }
}

export {
    RECEIVE_POLLS,
    receivePolls,
    ADD_POLL,
    addPoll,
    handleAddPoll,
}