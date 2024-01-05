import React from 'react'
import "../main"
import blog1 from "../assets/img/blog/blog-1.jpg"
import blog2 from "../assets/img/blog/blog-2.jpg"
import blog3 from "../assets/img/blog/blog-3.jpg"
import blog4 from "../assets/img/blog/blog-4.jpg"
const Blog = () => {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts">

    <div className="container" data-aos="fade-up">

      <header className="section-header">
        <h2>Blog</h2>
        <p>Recent posts form our Blog</p>
      </header>

      <div className="row">

        <div className="col-lg-4">
          <div className="post-box">
            <div className="post-img"><img src={blog1} className="img-fluid" alt=""/></div>
            <span className="post-date">Tue, September 15</span>
            <h3 className="post-title">And to be repelled by trouble which is but all great pleasures</h3>
            <a href="blog-single.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="post-box">
            <div className="post-img"><img src={blog2} className="img-fluid" alt=""/></div>
            <span className="post-date">Fri, August 28</span>
            <h3 className="post-title">And to be repelled by trouble which is but all great pleasures</h3>
            <a href="blog-single.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="post-box">
            <div className="post-img"><img src={blog3} className="img-fluid" alt=""/></div>
            <span className="post-date">Mon, July 11</span>
            <h3 className="post-title">Because it must be assumed that the truth or something</h3>
            <a href="blog-single.html" className="readmore stretched-link mt-auto"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>
        </div>

      </div>

    </div>

  </section>
  )
}

export default Blog