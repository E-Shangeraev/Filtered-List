import React from 'react';
import Header from './components/header/Header';
import SearchPanel from './components/searchPanel/SearchPanel';
import CommentsList from './components/commentsList/CommentsList';

import './styles/style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPanel />
      <CommentsList />
    </div>
  );
}

export default App;
