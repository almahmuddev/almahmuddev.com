import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Start Footer Area */}
      <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-two">
            <div className="row g-5">

              {/* Col 1 — Logo + desc + social */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/images/logo/white-logo-reeni-3.png" alt="logo" />
                    </Link>
                  </div>
                  <p className="description">
                    The personal portfolio category includes websites or physical displays
                  </p>
                  <div className="social-link footer">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>
              </div>

              {/* Col 2 — Quick Links */}
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li><Link href="/about">About Me</Link></li>
                    <li><Link href="/service">Service</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/blog">Blog Post</Link></li>
                    <li><Link href="/contact">Pricing</Link></li>
                  </ul>
                </div>
              </div>

              {/* Col 3 — Contact */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon"><i className="fa-solid fa-phone"></i></span>
                      <a href="#">017345 678 9101</a>
                    </li>
                    <li>
                      <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                      Cumilla, Bangladesh
                    </li>
                    <li>
                      <span className="ft-icon"><i className="fa-solid fa-envelope"></i></span>
                      <a href="#">abcd@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 4 — Newsletter */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="newslatter tmp-scroll-trigger animation-order-1">
                  <h3 className="title">Newsletter</h3>
                  <p className="para">
                    The personal portfolio category includes the a websites or representation
                  </p>
                  <form action="#" className="newsletter-form-1">
                    <input type="email" placeholder="Your e-mail" />
                    <span>
                      <a href="#" className="form-icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </span>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Area */}

      {/* Copyright */}
      <div className="copyright-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper tmp-scroll-trigger animation-order-1">
                <p className="copy-right-para">
                  © {new Date().getFullYear()} Al Mahmud | All Rights Reserved
                </p>
                <ul className="tmp-link-animation">
                  <li><a href="#">Terms & Condition</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat widget */}
      <div className="ready-chatting-option tmp-ready-chat">
        <input type="checkbox" id="click" />
        <label htmlFor="click">
          <i className="fab fa-facebook-messenger"></i>
          <i className="fas fa-times"></i>
        </label>
        <div className="wrapper">
          <div className="head-text">Let's chat with me? - Online</div>
          <div className="chat-box">
            <div className="desc-text">
              Please fill out the form below to start chatting with me directly.
            </div>
            <form className="tmp-dynamic-form" action="#">
              <div className="field">
                <input className="input-field" name="name" placeholder="Your Name" type="text" required />
              </div>
              <div className="field">
                <input className="input-field" name="email" placeholder="Your Email" type="email" required />
              </div>
              <div className="field textarea">
                <textarea className="input-field" placeholder="Your Message" name="message" required></textarea>
              </div>
              <div className="field">
                <button name="submit" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <div className="scrollToTop">
        <div className="arrowUp">
          <i className="fa-light fa-arrow-up"></i>
        </div>
        <div className="water">
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            <use xlinkHref="#wave"></use>
          </svg>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            <use xlinkHref="#wave"></use>
          </svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 20" style={{ display: 'none' }}>
            <symbol id="wave">
              <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#"></path>
              <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#"></path>
              <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#"></path>
              <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#"></path>
            </symbol>
          </svg>
        </div>
      </div>
    </>
  )
}
