import React from 'react'
import {connect} from 'react-redux'
import {getPercentage} from '../utils/utils'
import {updateAnswer} from "../actions/answer"
import {Redirect} from 'react-router-dom'

class PollDetail extends React.Component {

    state={
        voted: this.props.voted
    }

    handleUpdateAnswer = (answer) => {
        const {authedUser, poll } = this.props
        this.setState((prev) => {
            if (prev.voted !== null && prev.voted !== answer  ) {
                this.props.dispatch(updateAnswer({
                    authedUser,
                    answer,
                    currentVote: prev.voted,
                    id: poll.id,
                }))
            }
            return {
                voted: answer
            }
        })
    }

    render() {
        if (this.props.poll === null) {
            return (
                <div>
                    <Redirect to='/' />
                </div>
            )
        } else {
            let {poll, avatarURL} = this.props
            let {voted} = this.state
            let total = poll.aVotes.length + poll.bVotes.length + poll.cVotes.length + poll.dVotes.length
            return (
                <div className='poll-container'>
                    poll detail
                    <h1 className='question'>{poll.question}</h1>
                    <div className='poll-author'>
                        <img src={avatarURL} alt="" className='avatar'/>
                        <span>{poll.author}</span>
                    </div>
                    <ul>
                        {['aText', 'bText', 'cText', 'dText'].map((key) => {
                            let amount = key[0] + 'Votes'
                            let count = poll[amount].length
                            let content = poll[key]
                            let choose = ''
                            if (voted === key[0]) {
                                choose = 'chosen'
                            }
                            return (

                                <li key={key} className={`option ${choose}`}
                                    onClick={() => this.handleUpdateAnswer(key[0])} >
                                        <div className="result">
                                            <span>{content}</span>
                                            <span>{getPercentage(count, total)}% ({count})</span>
                                        </div>
                                </li>

                            )

                        })}
                    </ul>
                </div>

            )
        }
    }
}

const mapStateToProps = ({polls, authedUser, users}, {match}) => {
    const {id} = match.params
    const poll = polls[id]
    if (!poll) {
        return {
            poll: null
        }
    }

    let voted = ['aVotes', 'bVotes', 'cVotes', 'dVotes'].filter((name) => {
        let vote = poll[name]
        return vote.includes(authedUser)
    })


    return {
        poll,
        authedUser,
        voted: voted.length> 0?voted[0].slice(0,1): null,
        avatarURL: users[poll.author].avatarURL,
    }

}


export default connect(mapStateToProps)(PollDetail)
