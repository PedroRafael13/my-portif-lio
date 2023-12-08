import  styled, { keyframes }  from "styled-components";

const scale = keyframes`
  from{
    transform: scale(0);
  } 
  to{
    transform:scale(1);
  }
`

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
`

export const H1 = styled.h1`
    font-size: 28px;
    font-weight:700;
    color: #F5E7CB;
    margin-top: 50px;
`

export const Skills = styled.div`
  ul{
    display:flex;
    justify-content:center;
    align-items: center;
    margin-top:100px;
    gap:20px;
  }

  li{
    list-style:none;
    font-Size: 10em;
    color:#B22426 ;
    animation: ${scale} 0.5s linear ;
  }
`