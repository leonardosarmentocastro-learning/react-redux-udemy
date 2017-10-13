/**
 * NPM packages.
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Project packages.
 */
import SearchBar from './components/search_bar';


const youtube   = {api: {key: null}};
youtube.api.key = 'AIzaSyCdCCH3TdLJhqPynnfogXe4bpVo4SSRII4';

/**
 * Create a new component. This should produce some HTML.
 */
const App = () => {
  const template = (
    <div>
      <SearchBar />
    </div>
  );

  return template;
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
