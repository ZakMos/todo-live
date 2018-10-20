import Todo from '../models/todo';

export function todos(state = {}, action){
  switch(action.type){
    case 'ADD_TODO':
      let todo = new Todo({text: action.text});

      return {
        ...state,
        [todo.id]: todo
      };

    case 'TOGGLE_TODO':
      let {id} = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          done: !state[id].done
        }
      };

    case 'UPDATE_TODO':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          text: action.text
        }
      };

    case 'REMOVE_TODO':
      let newState = {...state};

      delete newState[action.id];

      return newState;

    default:
      return state;
  }
}

export function appReducer(state = {}, action){
  return {
    todos: todos(state.todos, action)
  }
}
