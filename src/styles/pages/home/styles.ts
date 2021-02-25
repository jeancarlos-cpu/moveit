import styled from 'styled-components';

export const Container = styled.div`
  height:100vh;
  max-width: 992px;

  margin:0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const PainelContainer = styled.div`
  flex: 1;

  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:6.25rem;

  align-content: center;
`;