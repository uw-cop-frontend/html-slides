import React from 'react';

function Slide(props) {
  return (
    <div className="w-SlideBody w-Intro">
      <div className="w-IntroContent w-IntroColumn">
        <ul>
          <li>
            <a href="https://www.csun.edu/cod/conference/2019/sessions/index.php">
              2019 information
            </a>
            : list of sessions, links to journal
          </li>
          <li>
            Hosted by California State University Northridge{' '}
            <a href="https://www.csun.edu/cod/index.php">
              Center on Disabilities
            </a>
          </li>
        </ul>
      </div>
      <div className="w-IntroGraphic w-IntroColumn" />
    </div>
  );
}

export default Slide;
