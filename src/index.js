import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Create a new component. This should produce some HTML.
 */
const App = () => {
  return <div>Hi!</div>
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
