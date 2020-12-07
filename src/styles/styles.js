import styled, { css } from 'styled-components';

const materialButtonBase = css`
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.65);
  }
`

export const StyledLi = styled.li`
  ${materialButtonBase};
  display: inline-block;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  border-radius: 3px;
`;

export const StyledButton = styled.button`
  ${materialButtonBase};
  display: block;
  padding: .5rem;
  margin: auto;
  color: white;
  border: none;
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