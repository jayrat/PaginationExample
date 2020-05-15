import React from 'react';
import './styles.css';

import Page from './components/Page';

export default function App() {
  return (
    <div className="container">
      <h1>Pagination Example</h1>
      <h2>Album List Below</h2>
      <Page />
    </div>
  );
}
