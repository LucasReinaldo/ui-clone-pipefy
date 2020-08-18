import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter } from 'react-router-dom';
import Board from './components/Board';

import Header from './components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <Header />
          <Board />
        </DndProvider>
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
};

export default App;
