import React, {Component} from 'react';

class NotFound extends Component{
  componentDidMount(){
    document.title = '404 not found | What to do?';
  }

  render(){
    return (
      <div className="not-found">
        <h2>404 NOT FOUND</h2>
        <h3>Sorry Mz, It isn't here! go elsewhere</h3>
      </div>

    );
  }
}

export default NotFound;
