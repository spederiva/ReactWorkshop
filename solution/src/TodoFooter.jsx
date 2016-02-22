/**
 * Created by sebastianp on 20/12/2015.
 */
"use strict";

//import React from 'react';

export class TodoFooter extends React.Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>1</strong>
                    <span> </span>
                    <span>item/s</span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    <li><a href="#/" className="selected">All</a></li>
                    <span> </span>
                    <li><a href="#/active" className="">Active</a></li>
                    <span> </span>
                    <li><a href="#/completed" className="">Completed</a></li>
                </ul>
            </footer>
        );
    }
}

window.TodoFooter = TodoFooter;