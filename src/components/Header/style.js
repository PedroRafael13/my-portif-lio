import { styled } from "styled-components";

export const Container = styled.div`
  min-height:100px;
  z-index:99;
  left:0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 50px;

  img{
    width: 20%;
  }
`

export const Menu = styled.ul`
  display: flex;
  list-style:none;
  gap:50px;
`

export const Li = styled.li`
  color:#F5E7CB;
  font-weight:600;
  cursor:pointer;
  font-size:28px;
  position: relative;

  a{
    text-decoration:none;
    color:#F5E7CB;
  }

  &::after{
    content: '';
    height:3px;
    width:${(props)=>(props.isActive ? '100%' : '0')};
    background-color:#005352;
    position: absolute;
    bottom:-10px;
    left:-50%;
    transform:translateX(50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after{
    width: 100%;
  }
`