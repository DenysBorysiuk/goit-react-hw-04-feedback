import styled from '@emotion/styled';

const getBgColor = variant => {
  switch (variant) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'blue';
    case 'bad':
      return 'red';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Btn = styled.button`
  background-color: transparent;
  text-transform: capitalize;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;

  :active {
    background-color: ${props => getBgColor(props.option)}
`;
