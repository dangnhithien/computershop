import React from "react";
import img from "../assets/images/blog_images/aments_blog_03.jpg";

const BlogFeed = () => {
  return (
    <>
      {/* ...:::: Start Blog Feed Section:::... */}
      <div className="blog-feed-section section-top-gap-100">
        {/* Start Section Content */}
        <div className="section-content-gap">
          <div className="container">
            <div className="row">
              <div className="section-content">
                <h3
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Latest News
                </h3>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Section Content */}
        {/* Start Blog Feed Wrapper */}
        <div className="blog-feed-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Blog Feed Single */}
                <div
                  className="blog-feed-single"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <a
                    href="blog-single-sidebar-left.html"
                    className="blog-feed-img-link"
                  >
                    <img src={img} alt="" className="blog-feed-img" />
                  </a>
                  <div className="blog-feed-content">
                    <div className="blog-feed-post-meta">
                      <span>By:</span>
                      <a href="" className="blog-feed-post-meta-author">
                        Admin
                      </a>{" "}
                      -
                      <a href="" className="blog-feed-post-meta-date">
                        Sep 14, 2020
                      </a>
                    </div>
                    <h5 className="blog-feed-link">
                      <a href="blog-single-sidebar-left.html">
                        Lorem ipsum dolor amet cons adipisicing elit
                      </a>
                    </h5>
                  </div>
                </div>
                {/* End Blog Feed Single */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Blog Feed Single */}
                <div
                  className="blog-feed-single"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <a
                    href="blog-single-sidebar-left.html"
                    className="blog-feed-img-link"
                  >
                    <img src={img} alt="" className="blog-feed-img" />
                  </a>
                  <div className="blog-feed-content">
                    <div className="blog-feed-post-meta">
                      <span>By:</span>
                      <a href="" className="blog-feed-post-meta-author">
                        Admin
                      </a>{" "}
                      -
                      <a href="" className="blog-feed-post-meta-date">
                        Sep 14, 2020
                      </a>
                    </div>
                    <h5 className="blog-feed-link">
                      <a href="blog-single-sidebar-left.html">
                        Lorem ipsum dolor amet cons adipisicing elit
                      </a>
                    </h5>
                  </div>
                </div>
                {/* End Blog Feed Single */}
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Start Blog Feed Single */}
                <div
                  className="blog-feed-single"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="blog-single-sidebar-left.html"
                    className="blog-feed-img-link"
                  >
                    <img src={img} alt="" className="blog-feed-img" />
                  </a>
                  <div className="blog-feed-content">
                    <div className="blog-feed-post-meta">
                      <span>By:</span>
                      <a href="" className="blog-feed-post-meta-author">
                        Admin
                      </a>{" "}
                      -
                      <a href="" className="blog-feed-post-meta-date">
                        Sep 14, 2020
                      </a>
                    </div>
                    <h5 className="blog-feed-link">
                      <a href="blog-single-sidebar-left.html">
                        Lorem ipsum dolor amet cons adipisicing elit
                      </a>
                    </h5>
                  </div>
                </div>
                {/* End Blog Feed Single */}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End Blog Feed Wrapper */}
      </div>{" "}
      {/* ...:::: End Blog Feed Section:::... */}
    </>
  );
};
export default BlogFeed;
