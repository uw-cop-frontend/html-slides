import React, { Component } from 'react';
import SlidesInfo from '../slides/js-session-3/components/SlidesInfo';
import BodyContent from '../slides/js-session-3/components/BodyContent';
import Header from './Header';
import Footer from './Footer';
import NavButton from './NavButton';
import PrevNext from './PrevNext';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight, faChevronLeft);

const totalSlides = SlidesInfo.slides.length;

class SlideView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlideNum: 1,
      focusOnButton: 1,
      nextSlideNum: this.getNextSlideNum(1),
      prevSlideNum: this.getPrevSlideNum(1),
      focusOnSlide: false,
    };
    this.updateState = this.updateState.bind(this);
    this.focusedSlide = React.createRef(); //set up to focus slide when nav button clicked
  }

  componentDidUpdate() {
    let { focusOnSlide } = this.state;
    if (focusOnSlide) {
      this.focusedSlide.current.focus();
      //the following will work since there is only one id on the page
      //but sticking with ref as pattern for referencing rendered nodes
      //document.getElementById('wid-Slide').focus();
    }
  }

  updateState(options) {
    this.setState({
      activeSlideNum: options.activeSlideNum,
      nextSlideNum: this.getNextSlideNum(options.activeSlideNum),
      prevSlideNum: this.getPrevSlideNum(options.activeSlideNum),
      focusOnSlide: options.focusOnSlide,
    });
  }
  btnArrowNav(direction, index) {
    console.warn(direction);
    console.warn(index);
  }

  getNextSlideNum(activeSlideNum) {
    if (activeSlideNum === totalSlides) {
      return 1;
    }
    return activeSlideNum + 1;
  }

  getPrevSlideNum(activeSlideNum) {
    if (activeSlideNum === 1) {
      return totalSlides;
    }
    return activeSlideNum - 1;
  }

  render() {
    let { prevSlideNum, activeSlideNum, nextSlideNum } = this.state;
    let currentSlideIndex = activeSlideNum - 1;
    let slideTitle = SlidesInfo.slides[currentSlideIndex].title;
    let sectionSlide = SlidesInfo.slides[currentSlideIndex].sectionSlide;
    const slideDetails = SlidesInfo.slides[currentSlideIndex];

    var navList = SlidesInfo.slides.map((slide, index) => {
      return (
        <li key={index + 1} role="menuitem" className="w-TipContainer">
          <NavButton
            slideNum={index + 1}
            title={slide.title}
            shortTitle={slide.shortTitle}
            index={index}
            buttonText={index + 1}
            updateState={this.updateState}
            btnArrowNav={this.btnArrowNav}
            active={index + 1 === activeSlideNum ? true : false}
          />
        </li>
      );
    });

    return (
      <div>
        <nav id="wid-SlideNav" className="w-SlideNav" aria-label="Slide menu">
          <ul
            className="w-BtnSet"
            role="menubar"
            aria-labelledby="wid-SlideNav"
          >
            {' '}
            {navList}
          </ul>
        </nav>

        <main>
          <ul className="w-SlidesContainer">
            <li
              key={activeSlideNum}
              id={'wid-Slide-' + activeSlideNum}
              className={
                sectionSlide === true ? 'w-Slide w-SlideSection' : 'w-Slide'
              }
              tabIndex="0"
              ref={this.focusedSlide}
            >
              <Header slideTitle={slideTitle} slideNum={activeSlideNum} />
              <BodyContent slideDetails={slideDetails} />
              <Footer slideNum={activeSlideNum} totalSlides={totalSlides} />
            </li>
          </ul>
          <PrevNext
            prevSlideNum={prevSlideNum}
            nextSlideNum={nextSlideNum}
            updateState={this.updateState}
          />
        </main>
      </div>
    );
  }
}

export default SlideView;
