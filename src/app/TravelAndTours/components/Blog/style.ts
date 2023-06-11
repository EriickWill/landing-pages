import styled from 'styled-components';

export const Section = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background: cyan;
@media (max-width:980px) {
  margin-top: 100px;
  text-align: center;

}
.bg{
  position: absolute;
  background: red;
  width: 100%;
  height: 800px;
  top:-150px;
}

`
export const SecTitle = styled.header`
    margin-top: 150px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 1;
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
export const Posts = styled.div`
  z-index: 1;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap:20px;
  .post{
    width: 300px;
    height: 400px;
    background: white;
    border-radius: 3px;
  }
  .img{
    border-radius: 3px;
    width: 100%;
    height: 170px;
    background: #000;
  }
  .text{
    padding: 20px;
  }
`
