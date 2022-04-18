import { blue } from '@material-ui/core/colors'
import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className ="navtitle">
                        <a className="navbar-brand">E-Commerce</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent