import React from 'react';
import './App.css';
import OriginalPages from './staticRenderer/OriginalPages';
import { PageBuilder } from './pageBuilder/PageBuilder';
import { pageData } from './pageBuilder/PageData';

function App() {

  return (
    <div className="App">

      <PageBuilder pageData={pageData} />

      <OriginalPages />

    </div>
  );
}

export default App;
