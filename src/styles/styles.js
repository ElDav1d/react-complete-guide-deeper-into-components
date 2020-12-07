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
  cursor: pointer;
  display: block;
  padding: .5rem;
  margin: auto;
  color: white;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
  background-color: ${props => props.backgroundColor ? 'red' : 'green'};
`;

export const StyledControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
  margin: auto;
`

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`