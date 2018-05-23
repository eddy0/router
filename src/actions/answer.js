const UPDATE_ANSWER = 'UPDATE_ANSWER'

const updateAnswer = ({authedUser, id, answer}) => {
    return {
        type: UPDATE_ANSWER,
        authedUser,
        id,
        answer,
    }
}


export {
    UPDATE_ANSWER,
    updateAnswer,
}