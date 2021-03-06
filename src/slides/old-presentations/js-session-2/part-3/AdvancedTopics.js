import React from 'react';

function Slide(props) {
  return (
    <div>
      <h3>Closure</h3>

      <ul>
        <li>
          <a href="https://blog.codeanalogies.com/2018/10/19/javascript-closures-explained-by-mailing-a-package/">
            {' '}
            JavaScript Closures Explained by Mailing a Package
          </a>
        </li>

        <li>
          <a href="https://www.manning.com/books/secrets-of-the-javascript-ninja">
            Secrets of the JavaScript Ninja - all of chapter 5
          </a>
        </li>

        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures">
            Mozilla Developer Network (MDN) on Closures
          </a>
        </li>
      </ul>

      <h3>Eloquent JavaScript advanced topics:</h3>

      <ul>
        <li>
          <a href="https://eloquentjavascript.net/03_functions.html#h_D2Yui+mx6D">
            The call stack
          </a>
        </li>
        <li>
          <a href="https://eloquentjavascript.net/03_functions.html#h_jxl1p970Fy">
            Recursion
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Slide;
