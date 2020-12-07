import styled from 'styled-components';

export const StyledLi = styled.li`
  display: inline-block;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
`;

export const StyledButton = styled.button`
  display: block;
  padding: .5rem;
  margin: auto;
  color: white;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
  background-color: ${props => props.backgroundColor ? 'red' : 'green'}
`;