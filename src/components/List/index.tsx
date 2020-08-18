import React from 'react';

import { IoIosAdd } from 'react-icons/io';
import { CardProps } from '../../context/MoveContext';

import Card from '../Card';

import { Container } from './styles';

interface Props {
  data: CardProps;
  listIndex: number;
}

const List: React.FC<Props> = ({ data, listIndex }) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <IoIosAdd size={24} color="#FFF" />
          </button>
        )}
      </header>
      <ul>
        {data.cards?.map((card, index) => (
          <Card key={card.id} data={card} index={index} listIndex={listIndex} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
