import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    constructor(e) {
        super(e);

        this.state = {isVisible: false};
        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick(e) {
        if (this.state.isVisible === true)
            this.setState({isVisible: false});
        else
            this.setState({isVisible: true});
    }

    render() {
        return (
            <nav className="navbar" id="nav">
                <Link className="nav--logo" to="/">{process.env.REACT_APP_NAME}</Link>
                <ul className={this.state.isVisible ? 'navbar--container' : 'navbar--container navbar--hidden'}>
                    <li className="nav--item">
                        <Link to="/" onClick={this.onItemClick}> Home</Link>
                    </li>
                </ul>

                <a href="#" className="navbar--collapse" onClick={this.onItemClick}>
                    <FontAwesomeIcon icon={faBars}/>
                </a>
            </nav>
        );
    }
}