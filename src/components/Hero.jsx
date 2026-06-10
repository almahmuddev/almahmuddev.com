export default function Hero() {
  return (
    <>
      {/* tmp banner area start */}
      <div className="rpp-banner-four-area">
        <div className="container">
          <div className="banner-four-main-wrapper">

            <div className="bg-benner-img-four">
              <img
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                src="/assets/images/banner/banner-user-image-four.png"
                alt="banner-img-3"
              />
            </div>

            <div className="banner-four-right-bg-img">
              <img src="/assets/images/banner/banner-four-right-bg-img.png" alt="banner-img-3" />
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="inner">
                  <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Web Developer
                  </span>
                  <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Mahmud Khan
                  </h1>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Outsourcing can provide corporate businesses with several
                    advantages, incl b usinesses Outsourcing can provide usinesses
                    Outsourcing can provide
                  </p>
                  <div className="button-area-banner-three tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <a className="tmp-btn hover-icon-reverse radius-round" href="/project-details">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">View Portfolio</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="banner-right-content tmp-scroll-trigger tmp-fade-in animation-order-5">
                  <div className="year-expariance-wrap">
                    <h3 className="counter title">
                      <span className="odometer" data-count="25">2</span>
                    </h3>
                    <p className="para">Years Of <br />experience</p>
                  </div>
                  <div className="find-me-on">
                    <h2 className="find-me-on-title">Find me on</h2>
                    <div className="social-link banner">
                      <a href="https://www.instagram.com/almahmuddev/" target="blank"><i className="fa-brands fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/almahmuddev/" target="blank" ><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="https://github.com/almahmuddev" target="blank" ><i className="fa-brands fa-github"></i></a>
                      <a href="https://www.facebook.com/share/1AKXLBv3Gv/" target="blank" ><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="banner-four-left-bg-img">
          <img src="/assets/images/banner/banner-four-left-bg-img.png" alt="banner-img-3" />
        </div>
      </div>
      {/* tmp banner area end */}


      {/* tmp text para start */}
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in animation-order-1 inv-title-animation-wrap">
            A personal <span>portfolio</span> is a collection of your work, that is aa
            go achievements, and skills that highlights <span>web design</span> in your is abilities and
            professional growth. It serves as A personal to a portfolio in <span>since 2009</span> a collection of
            your work
          </h2>
          <div className="right-bg-text-para">
            <img src="/assets/images/banner/right-bg-text-para-doc.png" alt="" />
          </div>
          <div className="left-bg-text-para">
            <img src="/assets/images/banner/left-bg-text-para-doc.png" alt="" />
          </div>
        </div>
      </div>
      {/* tmp text para end */}
    </>
  )
}
