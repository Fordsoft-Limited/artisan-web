import './blog.css'
import tool_image from './images/tools.png'
import my_work_image from './images/work.jpeg'

export default function MyBLOG(){
    return(
<>
<div class="header"style={{marginLeft:"230px"}}>
        <p style={{marginbottom:"15px",color:"black",textAlign:"center",fontSize:"22px" ,fontFamily:"sans-serif"}}>Welcome to our blog page,we are excited to have you here.</p>
        <input type="text" placeholder="Search"></input>
        
        </div>
        
          
          
   
    <div className="container">
      
  <div className="card">
    <div className="card__header">
      <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" className="card__image" width="600"/>
    </div>
    <div className="card__body">
      <span className="tag tag-blue">Technology</span>
      <h4>What's new in 2022 Tech</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
      </div>
    <div className="card__footer">
      <div className="user-link">
      <div className="user">
        <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
        <div className="user__info">
          <h5>Jane Doe</h5> 
          <small>2h ago</small>
        </div>
        <div className="link" >
          <a href="#">Read more...</a>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div className="card">
    <div className="card__header">
      <img src={tool_image} alt="card__image" className="card__image" width="600"/>
    </div>
    <div className="card__body">
      <span className="tag tag-brown">Food</span>
      <h4>Workshop Tools</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div className="card__footer">
      <div className="user-link">
      <div className="user">
        <img src="https://i.pravatar.cc/40?img=2" alt="user__image" className="user__image" />
        <div className="user__info">
          <h5>Jony Doe</h5>
          <small>Yesterday</small>
        </div>
        <div className="link" >
          <a href="#">Read more...</a>
        </div>
      </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card__header">
      <img src={my_work_image} alt="card__image" className="card__image" width="600"/>
    </div>
    <div className="card__body">
      <span className="tag tag-red">Automobile</span>
      <h4>Race to your heart content</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div className="card__footer">
      <div className="user-link">
      <div className="user">
        <img src="https://i.pravatar.cc/40?img=3" alt="user__image" className="user__image"/>
        <div className="user__info">
          <h5>John Doe</h5>
          <small>2d ago</small>
        </div>
      </div>
    </div>
    <div className="link" >
      <a href="#">Read more...</a>
    </div>
  </div>
  </div>
  <div className="card">
    <div className="card__header">
      <img src={tool_image} alt="card__image" className="card__image" width="600"/>
    </div>
    <div className="card__body">
      <span className="tag tag-brown">Food</span>
      <h4>Workshop Tools</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div className="card__footer">
      <div className="user-link">
      <div className="user">
        <img src="https://i.pravatar.cc/40?img=2" alt="user__image" className="user__image" />
        <div className="user__info">
          <h5>Jony Doe</h5>
          <small>Yesterday</small>
        </div>
        <div className="link" >
          <a href="#">Read more...</a>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div className="card">
    <div className="card__header">
      <img src={my_work_image} alt="card__image" className="card__image" width="600"/>
    </div>
    <div className="card__body">
      <span className="tag tag-red">Automobile</span>
      <h4>Race to your heart content</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div className="card__footer">
      <div className="user-link">
      <div className="user">
        <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="user__image"/>
        <div className="user__info">
          <h5>John Doe</h5>
          <small>2d ago</small>
        </div>
      </div>
    </div>
    <div className="link" >
      <a href="#">Read more...</a>
    </div>
    </div>
  </div>
  <div className="card">
    <div className="card__header">
      <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" className="card__image" width="600"/>
    </div>
    <div className="card__body">
      <span className="tag tag-red">Automobile</span>
      <h4>Race to your heart content</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
    </div>
    <div className="card__footer">
      <div className="user-link">
      <div className="user">
        <img src="https://i.pravatar.cc/40?img=3" alt="user__image" className="user__image"/>
        <div className="user__info">
          
          <h5>John Doe</h5>
          <small>2d ago</small>
        </div>
      </div>
      <div class="link" >
        <a href="#">Read more...</a>
      </div>
    </div>
  </div>
  </div>
  </div>
  
  </>

    )
}