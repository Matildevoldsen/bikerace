import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Item.css';

export default class Item extends Component{
    render() {
        return(
            <li className="nav--item">
                <Link to={this.props.toPath}>{this.props.children}</Link>
            </li>
        );
    }
}