import styled from "styled-components"


export const MainPage = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`
export const Welcome = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  .img{
    width: 500px;
    height: 600px;
    background: #000;
  }
  .text p{
    max-width: 550px;
    margin-block: 20px;
  }
  .text h2{
    font-size: 30px;
  }
  button{
    margin-top: 20px;
    border: 1px solid black;
    width: 150px;
    height: 50px;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }
  button:hover{
    background: black;
    color: white;
  }

`