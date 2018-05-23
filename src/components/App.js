import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleInitialData} from "../actions/share";
import Dashboard from "./Dashboard";
import Loading from "./Loading";
import LoadingBar from 'react-redux-loading'
import Leaderboard from "./Leaderboard";
import AddPoll from "./AddPoll";
import PollDetail from "./PollDetail";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <LoadingBar/>
                {
                    this.props.loading === true
                        ?  <Loading> loading </Loading>
                        :  <PollDetail match={{ params: { id: 'am8ehyc8byjqgar0jgpub9'}}} />
                }
            </div>
        )
    }
}

const mapStateToProps = ({authedUser}) => {
    return {
        loading: authedUser === null
    }
}



export default connect(mapStateToProps)(App)
