import './App.css';
import data from './data';

import Header from './components/Header/Header';
// import Main from './components/Main/Main';
function App() {
  return (
    <div className='App'>
      <h1>
        <Header />
      </h1>
      <h2>{/* <Main /> */}</h2>
    </div>
  );
}

export default App;
