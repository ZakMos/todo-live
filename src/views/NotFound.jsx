import React, {Component} from 'react';

class NotFound extends Component{
  componentDidMount(){
    document.title = '404 not found | What to do?';
  }

  render(){
    return (<h2>Soz, It isn't here! go elsewhere (404)</h2>);
  }
}

export default NotFound;
