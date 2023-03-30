import styled from 'styled-components';

export const ListContact = styled.ul`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Contact = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const BtnDelete = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: auto;
  background-color: #2d76fc;
  color: white;
  &:hover {
    background: #bbbdbf;
  }
`;
