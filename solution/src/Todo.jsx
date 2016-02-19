/**
 * Created by sebastianp on 20/12/2015.
 */
"use strict";

//import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            TODO_LIST: this.props.list,
            newTodo: ""
        }
    }

    handleNewItem(newTodoTxt) {
        if (newTodoTxt.trim() !== "") {
            var list = this.state.TODO_LIST;

            list.push({
                id: list.length + 1, task: newTodoTxt, isCompleted: false
            });

            //UpdateState
            this.setState({
                TODO_LIST: list
            });
        }
    }

    handleOnComplete(todo) {
        var list = this.state.TODO_LIST;

        list[list.indexOf(todo)].isCompleted = !todo.isCompleted;

        this.setState({
            TODO_LIST: list
        });
    }

    render() {
        return (<div>
                <TodoHeader onNewItem={this.handleNewItem.bind(this)}/>

                <TodoList list={this.props.list} onComplete={this.handleOnComplete.bind(this)}></TodoList>

                <TodoFooter></TodoFooter>
            </div>
        );
    }
}

window.Todo = Todo;