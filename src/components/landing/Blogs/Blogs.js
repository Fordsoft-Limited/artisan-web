// import React,{useEffect} from 'react';
// import Aos from "aos";

// import "aos/dist/aos.css";
// import tool_image from '../../../assets/images/bg/tools.png'
// import my_work_image from '../../../assets/images/bg/work.jpeg'
// import './Blogs.scss'
// const Blogs = () => {
//   useEffect(() => {
//     Aos.init();
//   }, []);
//   return (
//     <div className="app__blog">
//         <div class="app__blog-header"style={{marginLeft:"230px"}}>
//         <p style={{marginbottom:"15px",color:"black",textAlign:"center",fontSize:"22px" ,fontFamily:"sans-serif"}}>Welcome to our blog page,we are excited to have you here.</p>
//         <input type="text" placeholder="Search"></input>
        
//         </div>
        
          
          
   
//     <div className="app__blog-container">
      
//   <div className="app__blog-card">
//     <div className="app__blog-card__header">
//       <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" className="card__image" width="600"/>
//     </div>
//     <div className="app__blog-card__body">
//       <span className="app__blog-tag app__blog-tag-blue">Technology</span>
//       <h4 style={{color:"brown"}}>What's new in 2022 Tech</h4>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
//       </div>
//     <div className="app__blog-card__footer">
//       <div className="app__blog-user-link">
//       <div className="app__blog-user">
//         <img src="https://i.pravatar.cc/40?img=1" alt="user__image" className="user__image" />
//         <div className="app__blog-user__info">
//           <h5>Jane Doe</h5> 
//           <small>2h ago</small>
//         </div>
//         <div className="app__blog-link" >
//           <a href="#">Read more...</a>
//         </div>
//       </div>
//     </div>
//     </div>
//   </div>
//   <div className="app__blog-card">
//     <div className="app__blog-card__header">
//       <img src={tool_image} alt="card__image" className="app__blog-card__image" width="600"/>
//     </div>
//     <div className="app__blog-card__body">
//       <span className="app__blog-tag app__blog-tag-brown">Food</span>
//       <h4 style={{color:"brown"}}>Workshop Tools</h4>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
//     </div>
//     <div className="app__blog-card__footer">
//       <div className="app__blog-user-link">
//       <div className="app__blog-user">
//         <img src="https://i.pravatar.cc/40?img=2" alt="user__image" className="app__blog-user__image" />
//         <div className="app__blog-user__info">
//           <h5>Jony Doe</h5>
//           <small>Yesterday</small>
//         </div>
//         <div className="app__blog-link" >
//           <a href="#">Read more...</a>
//         </div>
//       </div>
//       </div>
//     </div>
//   </div>
//   <div className="app__blog-card">
//     <div className="app__blog-card__header">
//       <img src={my_work_image} alt="card__image" className="card__image" width="600"/>
//     </div>
//     <div className="app__blog-card__body">
//       <span className="app__blog-tag app__blog-tag-red">Automobile</span>
//       <h4 style={{color:"brown"}}>Race to your heart content</h4>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
//     </div>
//     <div className="app__blog-card__footer">
//       <div className="app__blog-user-link">
//       <div className="app__blog-user">
//         <img src="https://i.pravatar.cc/40?img=3" alt="user__image" className="user__image"/>
//         <div className="app__blog-user__info">
//           <h5>John Doe</h5>
//           <small>2d ago</small>
//         </div>
//       </div>
//     </div>
//     <div className="app__blog-link" >
//       <a href="#">Read more...</a>
//     </div>
//   </div>
//   </div>
//   <div className="app__blog-card">
//     <div className="app__blog-card__header">
//       <img src={tool_image} alt="card__image" className="app__blog-card__image" width="600"/>
//     </div>
//     <div className="app__blog-card__body">
//       <span className="app__blog-tag app__blog-tag-brown">Food</span>
//       <h4 style={{color:"brown"}}>Workshop Tools</h4>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
//     </div>
//     <div className="app__blog-card__footer">
//       <div className="app__blog-user-link">
//       <div className="app__blog-user">
//         <img src="https://i.pravatar.cc/40?img=2" alt="user__image" className="app__blog-user__image" />
//         <div className="app__blog-user__info">
//           <h5>Jony Doe</h5>
//           <small>Yesterday</small>
//         </div>
//         <div className="app__blog-link" >
//           <a href="#">Read more...</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   <div className="app__blog-card">
//     <div className="app__blog-card__header">
//       <img src={my_work_image} alt="card__image" className="app__blog-card__image" width="600"/>
//     </div>
//     <div className="app__blog-card__body">
//       <span className="app__blog-tag app__blog-tag-red">Automobile</span>
//       <h4 style={{color:"brown"}}>Race to your heart content</h4>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
//     </div>
//     <div className="app__blog-card__footer">
//       <div className="app__blog-user-link">
//       <div className="app__blog-user">
//         <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="app__blog-user__image"/>
//         <div className="app__blog-user__info">
//           <h5>John Doe</h5>
//           <small>2d ago</small>
//         </div>
//       </div>
//     </div>
//     <div className="app__blog-link" >
//       <a href="#">Read more...</a>
//     </div>
//     </div>
//   </div>
//   <div className="app__blog-card">
//     <div className="app__blog-card__header">
//       <img src="https://source.unsplash.com/600x400/?car,automobile" alt="app__blog-card__image" className="card__image" width="600"/>
//     </div>
//     <div className="app__blog-card__body">
//       <span className="app__blog-tag app__blog-tag-red">Automobile</span>
//       <h4 style={{color:"brown"}}>Race to your heart content</h4>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
//     </div>
//     <div className="app__blog-card__footer">
//       <div className="app__blog-user-link">
//       <div className="app__blog-user">
//         <img src="https://i.pravatar.cc/40?img=3" alt="user__image" className="app__blog-user__image"/>
//         <div className="app__blog-user__info">
          
//           <h5>John Doe</h5>
//           <small>2d ago</small>
//         </div>
//       </div>
//       <div class="app__blog-link" >
//         <a href="#">Read more...</a>
//       </div>
//     </div>
//   </div>
//   </div>
//   </div>
//     </div>
//   )
// }

// export default Blogs