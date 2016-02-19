/**
 * Created by sebastianp on 20/02/2016.
 */
"use strict";

//import React from 'react'

class TodoHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newTodo: ""
        }
    }

    handleOnKeyDown(e) {
        if (e.keyCode === 13) {
            this.props.onNewItem(e.target.value);

            //UpdateState
            this.setState({
                newTodo: ""
            });
        }
    }

    handleOnChange(e) {
        this.setState({
            newTodo: e.target.value
        });
    }

    render() {
        return (
            <header className="header">
                <input value={this.state.newTodo} onChange={this.handleOnChange.bind(this)} onKeyDown={this.handleOnKeyDown.bind(this)} className="new-todo" placeholder="What needs to be done?"/>
            </header>
        );
    }
}

window.TodoHeader = TodoHeader;