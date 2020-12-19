import styled from "styled-components";

export const Img = styled.img`
  width: 20rem;
  height: 24rem;
  margin-right: 3.2rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1.6rem;
`;

export const Title = styled.h1`
  margin-bottom: 1.6rem;
`;

export const Description = styled.h2`
  font-weight: normal;
  font-size: 1.4rem;

  &:first-of-type {
    margin-bottom: 1.2rem;
  }
`;
export const Table = styled.table`
  margin-top: 1.6rem;
  width: 100%;
  table-layout: fixed;
  font-size: 1.6rem;
  > th:nth-child(even) {
    background-color: #eee;
  }

  > th:nth-child(odd) {
    background-color: #ccc;
  }
`;

export const Mail = styled.div`
  margin-top: 0.8rem;
  text-align: center;
  background-color: #eee;

  > span {
    font-size: 1.6rem;
  }
`;
