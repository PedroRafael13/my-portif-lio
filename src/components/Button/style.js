import { styled } from "styled-components";

export const Button = styled.button`
  border: 3px solid #ffffff;
  background:transparent;
  color: #ffffff;
  border-radius : 30px;
  padding: 10px 20px;
  cursor:pointer;
  font-size:20px;
  font-weight:500;
  transition: all .3s;
  margin-top:20px ;

  &:hover{
    color:#ff0000;
    background: #ffffff;    
  }
`