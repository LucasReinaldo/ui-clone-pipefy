import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0;
  height: calc(
    100% - 80px
  ); /* Vai ocupar toda a altura da lista e não só do tamanho da lista (height: 100% nos styles tbm) */
`;
