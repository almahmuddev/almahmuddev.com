'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {

  const odometerRef = useRef(null)

  // Trigger odometer counter when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const odometerEls = document.querySelectorAll('.odometer[data-count]')
            odometerEls.forEach((el) => {
              el.innerHTML = el.getAttribute('data-count')
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (odometerRef.current) {
      observer.observe(odometerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO / BANNER ──────────────────────────────────────────────── */}
      <div className="rpp-banner-four-area" ref={odometerRef}>
        <div className="container">
          <div className="banner-four-main-wrapper">

            {/* User background image */}
            <div className="bg-benner-img-four">
              <Image
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                src="/assets/images/banner/banner-user-image-four.png"
                alt="Banner User"
                width={500}
                height={600}
                priority
              />
            </div>

            {/* Right background shape */}
            <div className="banner-four-right-bg-img">
              <Image
                src="/assets/images/banner/banner-four-right-bg-img.png"
                alt="bg shape"
                width={400}
                height={600}
              />
            </div>

            <div className="row">

              {/* Left — Name, Title, CTA */}
              <div className="col-lg-4 col-md-6">
                <div className="inner">
                  <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    Web Developer
                  </span>
                  <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Al Mahmud
                  </h1>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    I am a skilled full-stack developer specializing in Next.js,
                    React, and MongoDB. I deliver creative, dynamic, and
                    user-centric web solutions.
                  </p>
                  <div className="button-area-banner-three tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <Link className="tmp-btn hover-icon-reverse radius-round" href="/project">
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">View Portfolio</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right — Counter + Social */}
              <div className="col-lg-3 col-md-6">
                <div className="banner-right-content tmp-scroll-trigger tmp-fade-in animation-order-5">

                  {/* Years of experience counter */}
                  <div className="year-expariance-wrap">
                    <h3 className="counter title">
                      <span className="odometer" data-count="3">00</span>
                    </h3>
                    <p className="para">
                      Years Of <br /> Experience
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="find-me-on">
                    <h2 className="find-me-on-title">Find me on</h2>
                    <div className="social-link banner">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://linkedin.com/in/almahmuddev" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="https://github.com/almahmuddev" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Left background shape */}
        <div className="banner-four-left-bg-img">
          <Image
            src="/assets/images/banner/banner-four-left-bg-img.png"
            alt="bg shape"
            width={400}
            height={600}
          />
        </div>
      </div>
      {/* ── HERO END ───────────────────────────────────────────────────── */}


      {/* ── TEXT PARAGRAPH ─────────────────────────────────────────────── */}
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in animation-order-1 inv-title-animation-wrap">
            A personal <span>portfolio</span> is a collection of your work that
            showcases your achievements, and skills — highlighting{' '}
            <span>web development</span> abilities and professional growth. It
            serves as a window into your craft{' '}
            <span>since 2022</span> — a living record of what you build.
          </h2>
          <div className="right-bg-text-para">
            <Image
              src="/assets/images/banner/right-bg-text-para-doc.png"
              alt=""
              width={200}
              height={200}
            />
          </div>
          <div className="left-bg-text-para">
            <Image
              src="/assets/images/banner/left-bg-text-para-doc.png"
              alt=""
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      {/* ── TEXT PARAGRAPH END ─────────────────────────────────────────── */}
    </>
  )
}
