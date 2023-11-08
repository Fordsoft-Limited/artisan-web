import React from 'react'
import './Blog.scss'
import blog1 from '../../../assets/images/bg/blog-1.jpg'
import blog2 from '../../../assets/images/bg/blog-2.jpg'
import blog3 from '../../../assets/images/bg/blog-3.jpg'

const Blog = () => {
  return (
    <section className="app__blogs" id="blogs">

    <div className="app__blogs-heading">
        <span>blogs & posts</span>
        <h1>we untold stories</h1>
    </div>

    <div className="app__blogs-box-container">

        <div className="app__blogs-box">
            <div className="app__blogs-image">
                <img src={blog1} alt=""/>
            </div>
            <div className="app__blogs-content">
                <a href="#" className="app__blogs-link">Life is a journey, not a destination</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
                <div className="app__blogs-icon">
                    <a><i className="bi bi-clock"></i> 21st may, 2021</a>
                    <a ><i className="fas fa-user"></i> by admin</a>
                </div>
            </div>
        </div>

        <div className="app__blogs-box" >
            <div className="app__blogs-image">
                <img src={blog2} alt=""/>
            </div>
            <div className="app__blogs-content">
                <a href="#" className="app__blogs-link">Life is a journey, not a destination</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
                <div className="app__blogs-icon">
                    <a ><i className="bi bi-clock"></i> 21st may, 2021</a>
                    <a ><i className="fas fa-user"></i> by admin</a>
                </div>
            </div>
        </div>

        <div className="app__blogs-box" >
            <div className="app__blogs-image">
                <img src={blog3}alt=""/>
            </div>
            <div className="app__blogs-content">
                <a  className="app__blogs-link">Life is a journey, not a destination</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, natus!</p>
                <div className="app__blogs-icon">
                    <a ><i className="bi bi-clock"></i> 21st may, 2021</a>
                    <a ><i className="fas fa-user"></i> by admin</a>
                </div>
            </div>
        </div>

    </div>

</section>
  )
}

export default Blog