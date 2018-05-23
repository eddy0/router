import React from 'react'
import {connect} from 'react-redux'

class Leaderboard extends React.Component {
    render() {
        let users = this.props.users
        return (
            <ul>
                { Object.keys(users).map((person) => {
                    let user = users[person]
                    return (
                        <li key={user.id} className='user'>
                            <img src={user.avatarURL} alt={user.name} />
                            <div>
                                <h1>{user.name}</h1>
                                <div>polls: {user.polls}</div>
                                <div>answers: {user.answers}</div>
                            </div>
                        </li>
                    )})}
            </ul>
        )
    }
}

const mapStateToProps = ( {users} ) => {
    users = Object.keys(users).map((id) => {
        const {name, avatarURL, polls, answers} = users[id]
        return {
            name,
            avatarURL,
            polls: polls.length,
            answers: answers.length
        }})
        .sort((a, b) => b.polls + b.answers - (a.polls + a.answers ))
    return {
        users: users
    }
}

export default connect(mapStateToProps)(Leaderboard)