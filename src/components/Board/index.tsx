import React, { useCallback, useState } from 'react';
import produce from 'immer';
import { loadLists } from '../../services/api';

import BoardContext from '../../context/MoveContext';

import List from '../List';

import { Container } from './styles';

const data = loadLists();

const Board: React.FC = () => {
  const [lists, setLists] = useState(data);

  const moveCard = useCallback(
    (fromList: number, toList: number, from: number, to: number) => {
      setLists(
        produce(lists, (draft) => {
          const dragged = draft[fromList].cards[from];

          draft[fromList].cards.splice(from, 1);
          draft[toList].cards.splice(to, 0, dragged);
        }),
      );
    },
    [lists],
  );

  return (
    <BoardContext.Provider value={{ lists, moveCard }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} listIndex={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
};

export default Board;
