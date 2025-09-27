import styled from 'styled-components';

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.TEXT};
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    transform: scale(1.05);
  }
`;