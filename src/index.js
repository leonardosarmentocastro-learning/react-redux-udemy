/**
 * NPM packages.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

/**
 * Project packages.
 */
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const youtube   = {api: {key: null}};
youtube.api.key = 'AIzaSyCdCCH3TdLJhqPynnfogXe4bpVo4SSRII4';

/**
 * Create a new component. This should produce some HTML.
 */
class App extends Component {
  constructor(props) {
    super(props);

    /** Set component's state. */
    this.state = {videos: []};

    /** TODO */
    const options = {key: null, term: null};
    options.key   = youtube.api.key;
    options.term  = 'My hero academia';

    YTSearch(options, videos => {
      const state = {videos};
      this.setState(state);
    });
  }

  render() {
    const template = (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );

    return template;
  }
}

/**
 * Take this component's generated HTML and put it on the page (in the DOM).
 */
const component     = {instance: null};
component.instance  = <App />;

const container               = {instance: {inTheDOM: null}, selector: null}
container.selector            = '.container';
container.instance.inTheDOM   = document.querySelector(container.selector);

ReactDOM.render(component.instance, container.instance.inTheDOM);
