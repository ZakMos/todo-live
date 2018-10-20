// External deps
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import { addTodo } from '../modules/actions';

/**
 * A Component to display a add todo form
 * @extends Component
 */
class TodoForm extends Component {
  // References
  /**
   * A react refernce to our input html element
   * @type {Object}
   */
  todoInput = React.createRef();

  // Event Handlers
  /**
   * An event handler to create a todo an clear a form
   * @param  {SyntheticEvent} event The submit event object
   */
  createTodo = (event) => {
    event.preventDefault();

    const {addTodo} = this.props;
    const todoText = this.todoInput.current.value.trim();

    addTodo(todoText);
    event.target.reset();
  }

  // Lifecycle hooks
  render(){
    return (
      <form className="input-group my-3" onSubmit={this.createTodo}>
        <input
          name="todo_item"
          className="form-control"
          type="text"
          placeholder="Add a new to-do item ..."
          ref={this.todoInput}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <FontAwesomeIcon icon={faPlus} /> Add item
          </button>
        </div>
      </form>
    )
  }
}

const mapStoreToProps = () => ({});
const mapActionsToProps = { addTodo: addTodo}

export default connect(
  mapStoreToProps,
  mapActionsToProps
)(TodoForm);
