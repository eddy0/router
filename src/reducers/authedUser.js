import {SET_AUTHED_USER} from "../actions/authedUser";


const authedUser = (state=null, action) => {
    const mapper = {
        [SET_AUTHED_USER]: action.id,
    }
    let type = action.type
    let value = mapper[type]
    if ( value !== undefined ) {
        return value
    } else {
        return state
    }
}

export default authedUser