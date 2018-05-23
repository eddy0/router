import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


class Dashboard extends React.Component{
    state = {
        showAnswered: false,
    }

    togglerAnwsered = () => {
        this.setState(() => ({
                showAnswered: true
        }))
    }

    togglerUnanwsered = () => {
        this.setState(() => ({
            showAnswered: false
        }))
    }

    render() {
        let content = this.state.showAnswered
                        ? this.props.answered
                        : this.props.unanswered
        return (
            <div>
                <div className='dashboard-toggle'>
                    <button onClick={() => this.togglerAnwsered()}>Answered</button>
                    <button onClick={() => this.togglerUnanwsered()}>unAnswered</button>
                </div>
                <ul className='dashboard-list'>
                    {
                        content.map((poll) => (
                            <li key={poll.id}>
                                <Link to={`polls/${poll.id}`}>
                                    {poll.question}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, polls, users}) => {
    const answers = users[authedUser].answers
    const answered = answers.map((id) => {
        return polls[id]
        })
        .sort((a,b) => b.timestamp - a.timestamp)

    const unanswered = Object.keys(polls)
        .filter((id) => {
            return !answers.includes(id)
        })
        .map((id) => polls[id])
        .sort((a,b) => b.timestamp - a.timestamp)

    return {
        answered,
        unanswered,

    }
}

export default connect(mapStateToProps)(Dashboard)