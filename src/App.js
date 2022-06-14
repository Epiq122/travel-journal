import './App.css';
import data from './data';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
function App() {
  const cardData = data.map((data) => {
    return <Main key={data.id} {...data} />;
  });
  return (
    <div className='App'>
      <Header />

      {cardData}
    </div>
  );
}

export default App;
