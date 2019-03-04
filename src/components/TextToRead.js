import React, {
  Component
} from 'react';
import {
  readLastReadIfReady
} from '../reading/screen-reader';
import {
  create,
  Store
} from 'microstates';

export class TextToRead extends Component {

  state = {
    text: Store(create(String, ''), text => this.setState({ text }))
  };

  handleChange(event, state) {
    const text = event.target.value;
    readLastReadIfReady(text);
    if (text.endsWith('.')) {
      state.text.set('');
    } else {
      state.text.set(text);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="TextToRead">
          <input style={this.getTextStyle()} type="text" value={this.state.text.state} onChange={event => this.handleChange(event, this.state)}></input>
        </div>
      </form>
    )
  }

  getTextStyle() {
    return {
      fontSize: '60px',
      height: '60px',
      width: '960px',
      textAlign: 'center',
    }
  }
}
