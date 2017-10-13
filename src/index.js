/**
 * NPM packages.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _        from 'lodash';

/**
 * Project packages.
 */
import SearchBar    from './components/search_bar';
import VideoDetail  from './components/video_detail';
import VideoList    from './components/video_list';

const youtube   = {api: {key: null}};
youtube.api.key = 'AIzaSyCdCCH3TdLJhqPynnfogXe4bpVo4SSRII4';

/**
 * Create a new component. This should produce some HTML.
 */
class App extends Component {
  constructor(props) {
    super(props);

    /** Set component's state. */
    this.state = {
      selectedVideo: null,
      videos: []
    };

    /** Public methods. */
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.onVideoSelect      = this.onVideoSelect.bind(this);

    /** Retrieving video data. */
    const term = 'My hero academia';
    this.videoSearch(term);
  }

  render() {
    /** Debounce the "onSearchTermChange" callback. */
    const fn                  = term => this.videoSearch(term);
    const wait                = 500;
    const onSearchTermChange  =  _.debounce(fn, wait);

    /** Template rendering. */
    const template = (
      <div>
        <SearchBar onSearchTermChange={onSearchTermChange}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos} />
      </div>
    );

    return template;
  }

  onSearchTermChange(term) {
    this.videoSearch(term);
  }

  onVideoSelect(selectedVideo) {
    const state = {selectedVideo};
    this.setState(state);
  }

  videoSearch(term) {
    const options = {key: null, term: null};
    options.key   = youtube.api.key;
    options.term  = term;

    YTSearch(options, videos => {
      const selectedVideo = videos[0];
      const state         = {selectedVideo, videos};

      this.setState(state);
    });
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
