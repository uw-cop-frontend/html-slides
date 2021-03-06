import React from 'react';

function Slide(props) {
  return (
    <div>
      <ul>
        <li>C. B. Averitt, et al, Deque Systems, presenter</li>
        <li>
          Also see: Marcy Sutton's{' '}
          <a href="https://www.deque.com/blog/accessibility-tips-in-single-page-applications/">
            Accessibility Tips in Single-Page Applications
          </a>
        </li>
        <li>
          and{' '}
          <a href="https://reactjs.org/docs/accessibility.html">
            React's accessibility guide
          </a>{' '}
          for an example of specific framework techniques
        </li>
      </ul>
    </div>
  );
}

export default Slide;
