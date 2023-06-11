import styled from 'styled-components';
interface IProps{
  img:string
}
export const Section = styled.section<IProps>`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 1;
@media (max-width:980px) {
  margin-top: 100px;
  text-align: center;

}
.carrosel{
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img{
  background: url(${prop => prop.img})center center/cover no-repeat;
  max-width: 1000px;
  width: 100%;
  height: 550px;
  z-index: 1;
}

`
export const SecTitle = styled.header`
    margin-top: 60px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    h2{
      font-size: 50px;
      max-width:500px ;
      line-height: 50px;
      
    }
    p{
      max-width: 650px;
    }
@media (max-width:980px) {
  
  text-align: center;

}
`
