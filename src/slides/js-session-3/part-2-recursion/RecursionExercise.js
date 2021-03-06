import React from 'react';

function Slide(props) {
  return (
    <div>
      <p>
        From{' '}
        <a href="https://eloquentjavascript.net/03_functions.html#i_jxl1p970Fy">
          Eloquent JavaScript:
        </a>
      </p>
      <p>
        "We’ve seen that <code>%</code> (the remainder operator) can be used to
        test whether a number is even or odd by using <code>%</code> 2 to see
        whether it’s divisible by two. Here’s another way to define whether a
        positive whole number is even or odd:
      </p>
      <ul>
        <li>Zero is even.</li>

        <li>One is odd.</li>

        <li>For any other number N, its evenness is the same as N - 2.</li>
      </ul>
      <p>
        "Define a recursive function <code>isEven</code> corresponding to this
        description. The function should accept a single parameter (a positive,
        whole number) and return a Boolean.
      </p>
      <p>
        "Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
        way to fix this?"
      </p>
    </div>
  );
}

export default Slide;
