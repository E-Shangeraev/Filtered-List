import React from 'react';
import Header from './components/header/Header';
import SearchPanel from './components/searchPanel/SearchPanel';

import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPanel />
    </div>
  );
}

export default App;
