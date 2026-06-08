export default function Portfolio() {
  return (
    <>
      {/* tmp Latest Portfolio Start */}
      <section className="tmp-portfolio-area tmp-section-gap">
        <div className="container">

          {/* Section Head */}
          <div className="section-head mb--60">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Latest Portfolio</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Transforming Ideas into Exceptional
            </h2>
            <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and organizational
            </p>
          </div>

          {/* Tabs */}
          <div className="latest-portfolio-tabs-area">
            <nav>
              <ul className="nav nav-tabs tmp-scroll-trigger tmp-fade-in animation-order-4" id="nav-tab" role="tablist">
                <li>
                  <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</button>
                </li>
                <li>
                  <button className="nav-link" id="nav-branding-tab" data-bs-toggle="tab" data-bs-target="#nav-branding" type="button" role="tab" aria-controls="nav-branding" aria-selected="false">Branding</button>
                </li>
                <li>
                  <button className="nav-link" id="nav-design-tab" data-bs-toggle="tab" data-bs-target="#nav-design" type="button" role="tab" aria-controls="nav-design" aria-selected="false">Design</button>
                </li>
                <li>
                  <button className="nav-link" id="nav-content-writing-tab" data-bs-toggle="tab" data-bs-target="#nav-content-writing" type="button" role="tab" aria-controls="nav-content-writing" aria-selected="false">Content writing</button>
                </li>
                <li>
                  <button className="nav-link" id="nav-marketing-tab" data-bs-toggle="tab" data-bs-target="#nav-marketing" type="button" role="tab" aria-controls="nav-marketing" aria-selected="false">Marketing</button>
                </li>
              </ul>
            </nav>

            <div className="tab-content bg-blur-style-three" id="nav-tabContent">

              {/* Tab — All */}
              <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabIndex="0">
                <div className="row">

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-1.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">My Portfolio of Innovation</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-2.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">A Showcase of My Projects</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-3.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">Professional Showcase</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-4.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">My Journey as a Creator</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-5.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">A Journey Through My Work</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-6.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">A Portfolio of Art & Dedication</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                </div>
              </div>
              {/* Tab All end */}

              {/* Tab — Branding */}
              <div className="tab-pane fade" id="nav-branding" role="tabpanel" aria-labelledby="nav-branding-tab" tabIndex="0">
                <div className="row">

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-7.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">A Journey Through My Work</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-6.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">A Showcase of My Projects</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-5.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">My Journey as a Creator</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-4.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">My Professional Portfolio</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-3.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">Transforming Ideas into Reality</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-2.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">Unveiling Potential</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                </div>
              </div>
              {/* Tab Branding end */}

              {/* Tab — Design */}
              <div className="tab-pane fade" id="nav-design" role="tabpanel" aria-labelledby="nav-design-tab" tabIndex="0">
                <div className="row">

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-1.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">My Portfolio of Innovation</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-2.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">A Showcase of My Projects</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-3.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">Professional Showcase</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                </div>
              </div>
              {/* Tab Design end */}

              {/* Tab — Content Writing */}
              <div className="tab-pane fade" id="nav-content-writing" role="tabpanel" aria-labelledby="nav-content-writing-tab" tabIndex="0">
                <div className="row">

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-4.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">My Journey as a Creator</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-5.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">A Journey Through My Work</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-6.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">A Portfolio of Art & Dedication</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                </div>
              </div>
              {/* Tab Content Writing end */}

              {/* Tab — Marketing */}
              <div className="tab-pane fade" id="nav-marketing" role="tabpanel" aria-labelledby="nav-marketing-tab" tabIndex="0">
                <div className="row">

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-7.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">My Portfolio of Innovation</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-1.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">Professional Showcase</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="tmp-portfolio tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <img src="/assets/images/latest-portfolio/tab-image-3.png" alt="tab-image" />
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <p className="portfoli-card-para">Development</p>
                          <h3 className="portfolio-card-title animated fadeIn"><a href="/project-details">Transforming Ideas into Reality</a></h3>
                        </div>
                        <div className="portfolio-btn">
                          <a href="/project-details" className="tmp-arrow-icon-btn">
                            <div className="btn-inner">
                              <i className="tmp-icon fa-solid fa-arrow-up-right"></i>
                              <i className="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="/project-details" className="over_link"></a>
                    </div>
                  </div>

                </div>
              </div>
              {/* Tab Marketing end */}

            </div>
          </div>

        </div>
      </section>
      {/* tmp Latest Portfolio end */}
    </>
  )
}
