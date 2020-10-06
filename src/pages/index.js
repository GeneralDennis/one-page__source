import './404';
import initHome from './home';
import './home-page';
import './about';
import './contacts';
// import initExample from './example'; // need remove;

export default () => {
  console.log('init pages');
  initHome();
  // initExample();
};