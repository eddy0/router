import React, { Component , Fragment} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {handleInitialData} from "../actions/share";
import Dashboard from "./Dashboard";
import Loading from "./Loading";
import LoadingBar from 'react-redux-loading'
import Leaderboard from "./Leaderboard";
import AddPoll from "./AddPoll";
import PollDetail from "./PollDetail";
import Nav from './Nav'


class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className="container">
                        <Nav />
                        {
                            this.props.loading === true
                                ?  <Loading> loading </Loading>
                                : <div>
                                    <Route exact path='/' component={Dashboard} />
                                    <Route path='/leaderboard' component={Leaderboard} />
                                    <Route path='/polls/:id' component={PollDetail} />
                                    <Route path='/add' component={AddPoll} />
                                </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

const mapStateToProps = ({authedUser}) => {
    return {
        loading: authedUser === null
    }
}



export default connect(mapStateToProps)(App)
