/**
 * Created by sebastianp on 20/12/2015.
 */
"use strict";

class TodoList extends React.Component {
    handleOnComplete(todo) {
        this.props.onComplete(todo);
    }

    render() {
        var list = this.props.list.map(function (item) {
            return (
                <li key={item.id} className={item.isCompleted?"completed":""}>
                    <div className="view">
                        <input className="toggle" type="checkbox" onClick={this.handleOnComplete.bind(this, item)}/>
                        <label>{item.task}</label>
                        <button className="destroy"></button>
                    </div>
                </li>
            )
        }.bind(this));

        return (
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <ul className="todo-list">
                    {list}
                </ul>
            </section>
        );
    }
}

window.TodoList = TodoList;