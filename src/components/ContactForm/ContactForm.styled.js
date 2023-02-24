import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


export const Input = styled.input`
  margin-bottom: 20px;
  height: 30px;
  `;


  export const Label = styled.label`
    margin-bottom: 5px;

    ${Input}:focus + & {
    color: #075bf7;
  }
  `;

export const SubmitBtn = styled.button`
cursor: pointer;
border: none;
border-radius: 5px;
padding-top: 10px;
padding-bottom: 10px;
background-color: #075bf7;
color: white;

& :hover {
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
background-color: #2d76fc;
color: black;
}
`;