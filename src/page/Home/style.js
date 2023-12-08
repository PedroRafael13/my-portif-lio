import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  margin-top: 100px;

  img {
    width: 20%;
  }
`;

export const Infor = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #f5e7cb;
  }

  h2 {
    font-size: 5rem;
    color: #f5e7cb;
  }

  span {
    color: #fcfcfc;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #f5e7cb;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    h1{
      font-size:25px;
    }
    h2{
      font-size:25px;
    }
    span{
      font-size:10px;
    }
    p{
      font-size:10px;
    }
    img:none;
  }
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
