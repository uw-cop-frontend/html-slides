import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Slide(props) {
  return (
    <div className="w-SlideBody">
      <p className="w-SiteLink">
        <FontAwesomeIcon icon="chevron-left" /> Follow along at{' '}
        <a href="https://jeanem.github.io/wcag-2.1/">
          https://jeanem.github.io/wcag-2.1/
        </a>{' '}
        <FontAwesomeIcon icon="chevron-right" />
      </p>
      <ul>
        <li>Mobile is a focus, e.g. responsive design is a requirement</li>
        <li>
          Improves accessibility for users who have cognitive or learning
          disabilities
        </li>
        <li>
          WCAG 2.0 is still a W3C Recommendation, 2.1 extends it and is
          backwards compatible
        </li>
      </ul>

      <p>
        This presentation highlights a sub-set of new WCAG 2.1 checkpoints. For
        more information on all checkpoints see{' '}
        <a href="https://www.w3.org/TR/WCAG21/#new-features-in-wcag-2-1">
          New features in WCAG 2.1
        </a>
      </p>
    </div>
  );
}

export default Slide;
