import _IntroList from '../intro/_IntroList';
import _Part1List from '../part-1-closure/_Part1List';
import _Part2List from '../part-2-recursion/_Part2List';
import _WrapUpList from '../wrap-up/_WrapUpList';

// allows easy updating by multiple contributers by pulling arrays of slides
// from separate directories into slides property rather then listing all slides here
const SlidesInfo = {
  deck: {
    title: 'JavaScript Session 3: Advanced Functions',
  },
  slides: _IntroList.concat(_Part1List, _Part2List, _WrapUpList),
};

export default SlidesInfo;
