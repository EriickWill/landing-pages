import styled from "styled-components"


export const HeaderPage = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("./travelAndTours/header_travel.jpg")center center/cover no-repeat;

`
export const NavBar = styled.nav`
    width: 100%;
    height: 50px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  div{
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`


export const TextHeader = styled.section`
  color:white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  p{
    max-width: 600px;
    text-align: center;
  }
  h1{
    font-size: 80px;
    text-align: center;
  }

  button{
    margin-top: 20px;
    border: 2px solid white;
    width: 150px;
    height: 50px;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }
  button:hover{
    background: white;
    color: black;
  }
`