// External deps
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

// Modules
import {toggleTodo, updateTodo, removeTodo} from '../modules/actions';

/**
 * A component to display a todo list item
 * @extends Component
 */
class TodoListItem extends Component {
  // Event Handlers
  /**
   * Event handler to edit a todo item
   * @param  {SyntheticEvent} event The current event's event object
   */
  editTodo = (event) => {
    const {todo, updateTodo} = this.props;
    /**
     * The text of the todo from the event's text input
     * @type {string}
     */
    const text = event.currentTarget.value.trim();

    updateTodo(todo.id, text);
  }

  render(){
    const {todo, toggleTodo, removeTodo} = this.props;

    return (
      <tr className="todo-item">
        <td>
          <div className="custom-control custom-checkbox">
              <input
                className="custom-control-input"
                defaultValue={todo.id}
                id={`todo-done-${todo.id}`}
                type="checkbox"
                checked={todo.done}
                onChange={(e) => toggleTodo(todo.id)}
              />
              <label
                className="custom-control-label"
                htmlFor={`todo-done-${todo.id}`}
              >
                &nbsp;
              </label>
            </div>
        </td>
        <td className="col-1">
          <input
            type="text"
            className="form-control"
            defaultValue={todo.text}
            onChange={this.editTodo}
          />
        </td>
        <td className="col-action">
          <FontAwesomeIcon
            className="icon-remove"
            icon={faTrashAlt}
            onClick={() => removeTodo(todo.id)}
          />
        </td>
      </tr>
    );
  }
}

const mapStoreToProps = () => ({});
const mapActionsToProps = {
  toggleTodo: toggleTodo,
  updateTodo: updateTodo,
  removeTodo: removeTodo
}

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(TodoListItem);
