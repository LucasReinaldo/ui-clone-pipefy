import React, { useContext, useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from 'react-dnd';

import BoardContext, { CardItem } from '../../context/MoveContext';

import { Container, Label } from './styles';

export interface Props {
  data: CardItem;
  index: number;
  listIndex: number;
}

interface DropItem {
  type: string;
  index: number;
  listIndex: number;
}

const Card: React.FC<Props> = ({ data, index, listIndex }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const { moveCard } = useContext(BoardContext);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'CARD',
      index,
      listIndex,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: DropItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const draggedIndex = item.index;
      const targetIndex = index;

      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current?.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = (draggedOffset as XYCoord).y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      moveCard(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      // eslint-disable-next-line no-param-reassign
      item.index = targetIndex;
      // eslint-disable-next-line no-param-reassign
      item.listIndex = targetListIndex;
    },
  });

  drag(drop(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels?.map((label) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="Avatar" />}
    </Container>
  );
};

export default Card;
