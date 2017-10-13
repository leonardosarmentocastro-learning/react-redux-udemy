import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    /** Set's the component state. */
    this.state = {term: null};

    /** Public functions. */
    this.onInputChange = this.onInputChange.bind(this);
  }


  render() {
    const template =  (
      <div className="search-bar">
        <input value={this.state.term} onChange={this.onInputChange}/>
      </div>
    );

    return template;
  }

  onInputChange(event) {
    const input = event.target;
    const text  = input.value;

    /** Updates the component's state. */
    const state = {term: null};
    state.term  = text;

    this.setState(state);

    /** Perform a new video search. */
    const onSearchTermChange = this.props.onSearchTermChange;
    onSearchTermChange(text);
  }
}

export default SearchBar;
