import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 20px auto 50px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0px;
  padding-bottom: 20px;
  padding-top: 20px;
  gap: 15px;
  margin: 0px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Li = styled.li`
  text-align: center;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid black;
`;
