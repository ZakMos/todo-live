import React, {Component, Fragment} from 'react';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Filter from '../components/Filter';

class Home extends Component {
  componentDidMount(){
    document.title = 'What to do?';
  }

  render(){
    const {filter} = this.props.match.params;

    return (
      <Fragment>
        <TodoForm />
        <Filter />
        <TodoList filter={filter}/>
      </Fragment>
    );
  }
}

export default Home;
