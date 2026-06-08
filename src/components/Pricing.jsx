export default function Pricing() {
  return (
    <>
      {/* Tpm My Price plan Start */}
      <section className="our-price-plan-area tmp-section-gapTop">
        <div className="container">

          <div className="section-head mb--60">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">My Price plan</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Enhancing Collaboration <br /> between Remote
            </h2>
          </div>

          <div className="row align-items-center">

            {/* Card 1 — Starter */}
            <div className="col-lg-4 col-md-6">
              <div className="price-plan-card v2 tmponhover blur-style-three tmp-scroll-trigger tmp-fade-in animation-order-1">
                <div className="price-plan-card-icon">
                  <img src="/assets/images/pricing/pricing-logo-1.svg" alt="pricing-logo" />
                </div>
                <span className="price-sub-title">Starter</span>
                <div className="check-box">
                  <ul>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">5 Social Media Account</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">Free Platform Access</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">Free Platform Access</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">24/7 Customer Support</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="main-price">$ 5.00</h3>
                <p className="per-month">Per Month</p>
                <div className="tmp-button-here">
                  <a className="tmp-btn hover-icon-reverse btn-border btn-md radius-round" href="#">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Started</span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 — Premium (active) */}
            <div className="col-lg-4 col-md-6">
              <div className="price-plan-card v2 tmponhover blur-style-three active tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="price-plan-card-icon">
                  <img src="/assets/images/pricing/pricing-logo-2.svg" alt="pricing-logo" />
                </div>
                <span className="price-sub-title">Premium</span>
                <div className="check-box">
                  <ul>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">5 Social Media Account</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">Free Platform Access</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">24/7 Customer Support</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">24/7 Customer Support</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="main-price">$ 230.00</h3>
                <p className="per-month">Per Month</p>
                <div className="tmp-button-here">
                  <a className="tmp-btn hover-icon-reverse btn-md radius-round" href="#">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Started</span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 — Basic */}
            <div className="col-lg-4 col-md-6">
              <div className="price-plan-card v2 tmponhover blur-style-three tmp-scroll-trigger tmp-fade-in animation-order-3">
                <div className="price-plan-card-icon">
                  <img src="/assets/images/pricing/pricing-logo-3.svg" alt="pricing-logo" />
                </div>
                <span className="price-sub-title">Basic</span>
                <div className="check-box">
                  <ul>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">5 Social Media Account</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">Free Platform Access</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">Digital Marketing</p>
                      </div>
                    </li>
                    <li>
                      <div className="check-box-item">
                        <div className="box-icon"><i className="fa-solid fa-circle-check"></i></div>
                        <p className="box-para">24/7 Customer Support</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="main-price">$ 45.00</h3>
                <p className="per-month">Per Month</p>
                <div className="tmp-button-here">
                  <a className="tmp-btn hover-icon-reverse btn-border btn-md radius-round" href="#">
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Get Started</span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                      <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Tpm My Price plan End */}
    </>
  )
}
