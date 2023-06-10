import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
@media (max-width:980px) {
  margin-top: 100px;
  text-align: center;

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
      font-size: 30px;
    }
    p{
      max-width: 650px;
    }
@media (max-width:980px) {
  
  text-align: center;

}
`
export const GridContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns:  repeat(auto-fill, minmax(300px, 1fr));;
  gap: 40px;
  .img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #000;
  }
  .box{
    min-width: 300px;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  h3{
    font-size: 25px;
  }
`