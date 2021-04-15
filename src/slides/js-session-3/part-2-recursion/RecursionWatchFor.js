import React from 'react';
import balancedTree from '../images/balancedTree.png';
import unbalancedTree from '../images/unbalancedTree.png';

function Slide(props) {
  return (
    <div>
      <p>Some signs of what approach to use.</p>
      <table width="100%" cellpadding="5" style={{ background: 'white' }}>
        <tr style={{ background: '#4b2e83', color: 'white' }}>
          <th>Approach</th>
          <th>Recursion</th>
          <th>Looping</th>
        </tr>
        <tr>
          <td>
            <strong>Type of problems</strong>
          </td>
          <td>Unknown depth</td>
          <td>Knows depth</td>
        </tr>
        <tr>
          <td>
            <strong>Data Structures</strong>
          </td>
          <td>Trees</td>
          <td>Arrays</td>
        </tr>
        <tr>
          <td>
            <strong>Example Uses</strong>
          </td>
          <td>
            Traversing file structure
            <br />
            Searching the Browser DOM
          </td>
          <td>
            Building a fixed depth menu
            <br />
            Operating on a list
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Slide;