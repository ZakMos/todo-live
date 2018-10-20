import React, {Component, Fragment} from 'react';

class Help extends Component {
  componentDidMount(){
    document.title = 'Help | What to do?';
  }

  render(){
    return (
      <Fragment>
        <h2>Get Some help</h2>
        <dl>
          <dt>Where is all my data stored?</dt>
          <dd>All your data is stored <strong>in your own computer!</strong> Everything you put into the app is stored in what is called the localStorage of your browser</dd>
          <dt>Will clearing the cache clear all my data as well?</dt>
          <dd>Yes it will. Unless you decide not to clear localStorage when you clear your cache.</dd>
        </dl>
      </Fragment>
    );
  }
}

export default Help;
