export default function About() {
  return (
    <>
      {/* tmp About Me Start */}
      <section className="about-us-area">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="about-us-left-content-wrap bg-vactor-one">
                <div className="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <h2 className="counter card-title">
                    <span className="odometer" data-count="10">00</span>+
                  </h2>
                  <p className="card-para">years of experience</p>
                </div>
                <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <div className="design-card-img">
                    <div className="icon">
                      <i className="fa-sharp fa-thin fa-lock"></i>
                    </div>
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">Ui/Ux Design</h3>
                    <p className="card-para">241 Projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-us-right-content-wrap">
                <div className="section-head text-align-left mb--50">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle">About Me</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Boost Business Strategic <br /> Solutions with Us
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Business consulting consultants provide expert advice and guida
                    businesses to help them improve their performance, efficiency, and organizational
                  </p>
                </div>

                <div className="about-us-section-card row g-5">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                      <div className="card-head">
                        <div className="logo-img">
                          <img src="/assets/images/about/logo-1.svg" alt="logo" />
                        </div>
                        <h3 className="card-title">Business Solutions</h3>
                      </div>
                      <p className="card-para">
                        Each one showcases my approach and dedication to detail, creativity
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                      <div className="card-head">
                        <div className="logo-img">
                          <img src="/assets/images/about/logo-2.svg" alt="logo" />
                        </div>
                        <h3 className="card-title">Profit Partners</h3>
                      </div>
                      <p className="card-para">
                        Business consulting consul us to a provide expert advice businesses
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                  <a className="tmp-btn hover-icon-reverse radius-round" href="/about">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Read More About Me</span>
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

          </div>
        </div>
      </section>
      {/* tmp About Me end */}
    </>
  )
}
