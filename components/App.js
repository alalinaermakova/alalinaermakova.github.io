import '../style/style.css';
import Main from './Main';
import Carousel from './Carousel';

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Main, null),
    React.createElement(Carousel, null)
  );
}

export default App;