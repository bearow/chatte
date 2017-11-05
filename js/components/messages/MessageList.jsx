import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <ul>
        {this.props.messages.map( m => {
          return <Message message={m} key={m.id} />
        })}
      </ul>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList
