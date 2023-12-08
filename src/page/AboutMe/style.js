import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 1500px;
  margin-top: 100px;
`;

export const Infor = styled.div`
  z-index: 2;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 5rem;
    font-weight: 700;
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
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const Poster = styled.div``;
