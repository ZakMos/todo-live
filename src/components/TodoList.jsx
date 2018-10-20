// External deps
import React, {Component} from 'react';
import { connect } from 'react-redux';

// Constansts
import { FILTERS } from '../modules/constants';

// Components
import TodoListItem from './TodoListItem';

/**
 * A functional component to display a list of todo items
 * @param {Array}    todos      The todos to display
 * @param {function} toggleTodo A callback to toggle a todo item
 * @param {function} updateTodo A callback to update a todo item
 * @param {function} removeTodo A callback to remove a todo item
 */
class TodoList extends Component {
 render() {
   const {filter} = this.props;
   const items = this.props.items.filter((todo) => {
     switch(filter){
       case FILTERS.COMPLETE:
         return todo.done;
       case FILTERS.INCOMPLETE:
         return !todo.done;
       default:
         return true;
     }
   })

    return (
      <div className="todo-list">
        <table className="todo-items table table-borderless">
          <tbody>
            {items.map((item) => (
              <TodoListItem
                key={item.id}
                todo={item}
              />)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = ({todos}) => ({
  items: Object.values(todos)
});

export default connect(mapStoreToProps)(TodoList);
