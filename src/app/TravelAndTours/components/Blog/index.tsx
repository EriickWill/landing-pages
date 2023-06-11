
import {Section,SecTitle,Posts} from './style' 
type props = {
  font:{className:string}
}

function Blog( {font}:props ) {

  
  return (
    <Section className='alinhamento'>
      <div className='bg'></div>
        <SecTitle>
          <h2 className={font.className}>International Tour Management</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam consequuntur culpa alias veniam non quia eligendi, quis cupiditate. Consequatur saepe adipisci excepturi?</p>
        </SecTitle>
      <Posts>
          <div className="post">
              <div className='img'></div>
              <div className="text">
              <span>span</span>
              <h3>Title</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium necessitatibus iure</p>
              <button>Click</button>
            </div>
          </div>
          <div className="post">
            <div className='img'></div>
            <div className="text">
              <span>span</span>
              <h3>Title</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium necessitatibus iure</p>
              <button>Click</button>
            </div>
          </div>
          <div className="post">
            <div className='img'></div>
            <div className="text">
              <span>span</span>
              <h3>Title</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem praesentium necessitatibus iure</p>
              <button>Click</button>
            </div>
              
          </div>
      </Posts>
    </Section>
  )
}

export default Blog