import styled from '@emotion/styled';

export const CardsList = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
});

export const Card = styled.div({
  border: '1px solid',
});

export const CardTitle = styled.p({
  fontWeight: 'bold'
});

export const List = styled.ul({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
});

export const ListItem = styled.li({
  margin: '10px 0'
});

export const Button = styled.button({})
