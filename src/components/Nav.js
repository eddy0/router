import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink exact to='/' activeClassName='active' >Home</NavLink>

                    </li>
                    <li>
                        <NavLink  to='/leaderboard' activeClassName='active' >leaderboard</NavLink>

                    </li>
                    <li>
                        <NavLink  to='/add' activeClassName='active' >Add</NavLink>

                    </li>

                </ul>

            </nav>

        )
    }
}

export default Nav