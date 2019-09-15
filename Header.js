import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <h2>
              <NavLink to = {`/`}> Metrics Tracker</NavLink>
            </h2>
        )
    }
}
