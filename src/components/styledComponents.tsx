import styled from '@emotion/styled';

export const CardsList = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
});

export const Card = styled.div({
  border: '1px solid',
  flexBasis: '15%',
  minWidth: '100px',
});

export const CardTitle = styled.p({
  fontWeight: 'bold',
});

export const List = styled.ul({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
});

export const ListItem = styled.li({
  margin: '10px 0',
});

export const Button = styled.button({});
