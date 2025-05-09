import './App.css';
import WordCounter from '../src/project/WordCounter.js'
import JokeApi from '../src/project/Joke_Api.js'
import Carousel from './project/Carousel.js';
import Timer from './project/Timer.js';

function App() {
  return (
    <div className="App">
      <Carousel />
      <JokeApi />
      <Timer />
      <WordCounter />
    </div>
  );
}

export default App;
