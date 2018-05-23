const UPDATE_ANSWER = 'UPDATE_ANSWER'

const updateAnswer = ({authedUser, id, answer, currentVote}) => {
    return {
        type: UPDATE_ANSWER,
        authedUser,
        id,
        answer,
        currentVote,
    }
}


export {
    UPDATE_ANSWER,
    updateAnswer,
}