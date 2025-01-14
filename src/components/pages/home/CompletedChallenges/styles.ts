import styled from "@emotion/styled";

export const Container = styled.div`
  display:flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  span{
    &:first-child{
      font-size: 1.25rem;
    }

    &:last-child{
      font-size: 1.5rem;
    }
  }
`;
