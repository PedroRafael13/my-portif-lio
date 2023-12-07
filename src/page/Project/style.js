import styled, {keyframes} from "styled-components"

const scale = keyframes`
  from{
    transform: scale(0);
  } 
  to{
    transform:scale(1);
  }
`

export const H1 = styled.h1`
  display: flex;
  justify-content:center;
  align-items:center;
  margin: 30px 0px 50px;
  font-weight:700;
  font-size: 30px;
  color: #F5E7CB;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-block: 1rem;
    animation:${scale} 0.5s linear
`