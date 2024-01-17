import { Container, List, Title, Li } from './Statistics.styled';

export const Statistics = ({ data }) => {
  return (
    <Container>
      <Title>Upload stats</Title>

      <List>
        {data.map(data => (
          <Li key={data.id}>
            <span>{data.label}</span>
            <span>{data.percentage}</span>
          </Li>
        ))}
      </List>
    </Container>
  );
};
