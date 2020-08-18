import styled from 'styled-components';

interface ContainerProps {
  done?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 0 15px;
  height: 100%;
  opacity: ${(props) => (props.done ? 0.6 : 1)};
  flex: 0 0 320px;
  /* flex-grow: 0; não permite esticar mais do que necessário, 1 ocupa todo o espaço possível, 2 duas vezes mais espaço */
  /* flex-shrink: 0;  determina a possibilidade de encolher, vai permanecer na mesma largura*/
  /* flex-basis: 320px; determina o tamanho base do elemento */
  /* estilizar toda a div que antes dela possue outra div */

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: var(--primary-color);
      border: 0;
      cursor: pointer;

      svg {
        display: flex;
        margin: 0 auto;
      }
    }
  }

  ul {
    margin-top: 20px;
  }
`;
