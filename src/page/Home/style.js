import { styled } from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  height:100%;
  max-width:1500px;
`

export const Infor = styled.div`
  padding:20px;
  width:50%;
  
  h1{
    font-size: 5rem;
    font-weight:700;
    color: white;
  }

  p{
    font-size:20px;
    font-weight:500;
    color: white;
    margin-top:30px;
    margin-bottom:20px;
  }
`

export const Poster = styled.div`
  img{
    width: 400px;
    border-radius: 30px;
  }
`