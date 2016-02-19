/**
 * Created by sebastianp on 20/12/2015.
 */
"use strict";

var Todo = React.createClass({
    getInitialState() {
        return {
            TODO_LIST: this.props.list,
            newTodo: ""
        }
    },

    handleOnKeyDown(e){
        if (e.keyCode === 13) {
            var list = this.state.TODO_LIST;
            list.push({
                id: list.length + 1, task: e.target.value, isCompleted: false
            });

            //UpdateState
            this.setState({
                TODO_LIST: list,
                newTodo: ""
            });
        }
    },

    handleOnChange (e) {
        this.setState({
            newTodo: e.target.value
        });
    },

    handleOnComplete (todo) {
        var list = this.state.TODO_LIST;

        list[list.indexOf(todo)].isCompleted = !todo.isCompleted;

        this.setState({
            TODO_LIST: list
        });
    },

    render () {
        return (<div>
                <header className="header">
                    <input value={this.state.newTodo} onChange={this.handleOnChange} onKeyDown={this.handleOnKeyDown} className="new-todo" placeholder="What needs to be done?"/>
                </header>

                <TodoList list={this.props.list} onComplete={this.handleOnComplete}></TodoList>

                <TodoFooter></TodoFooter>
            </div>
        );
    }
});

var todoList = [
    {id: 1, task: 'task 1', isCompleted: false},
    {id: 2, task: 'task 2', isCompleted: false},
    {id: 3, task: 'task 3', isCompleted: false}
];

ReactDOM.render(
    <Todo list={todoList}/>,
    document.getElementById("container")
);